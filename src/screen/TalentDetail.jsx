import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import {
  MaterialIcons,
  AntDesign,
  Ionicons,
  Feather,
} from "@expo/vector-icons";
import Header from "../components/Header";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Episodes from "../components/tabs/Episodes";
import More from "../components/tabs/More";
import { getVideo } from "../services/video";
import StarRating from "../components/StarRating";
import { Video, ResizeMode } from "expo-av";

const iconData = [
  { id: "1", name: "replay", library: MaterialIcons, label: "Start over" },
  { id: "2", name: "plus", library: AntDesign, label: "Watchlist" },
  { id: "3", name: "like2", library: AntDesign, label: "Like" },
  { id: "4", name: "dislike2", library: AntDesign, label: "Not for me" },
  {
    id: "5",
    name: "party-popper",
    library: MaterialCommunityIcons,
    label: "Watch Party",
  },
  { id: "6", name: "share-outline", library: Ionicons, label: "Share" },
  { id: "7", name: "youtube", library: Feather, label: "YouTube" },
];

const TalentDetail = ({ route, navigation }) => {
  const { id } = route.params;
  const [activeTab, setActiveTab] = useState("Episodes");
  const [video, setVideo] = useState(null);
  const [episode, setEpisode] = useState(null);
  const [loading, setLoading] = useState(true);
  const [status, setStatus] = useState({});

  const videoRef = React.useRef(null);

  useEffect(() => {
    const fetchVideo = async () => {
      if (!id) return;
      try {
        setLoading(true);
        const data = await getVideo(id);
        setVideo(data);
        setEpisode(data.Episodes[0]);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    fetchVideo();
  }, []);

  const renderItem = ({ item }) => {
    const IconComponent = item.library;
    return (
      <TouchableOpacity style={styles.iconButton}>
        <IconComponent name={item.name} size={26} color="black" />
        <Text style={styles.iconText}>{item.label}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={{ flex: 1 }}>
      <Header navigation={navigation} />
      <ScrollView style={styles.container}>
        {loading ? (
          <ActivityIndicator />
        ) : !video ? (
          <Text>No video</Text>
        ) : (
          <>
            <View style={styles.header}>
              {!episode ? (
                <View
                  style={[
                    styles.header,
                    { justifyContent: "center", alignItems: "center" },
                  ]}
                >
                  <Text style={styles.title}>{video.title}</Text>
                  <ActivityIndicator />
                </View>
              ) : (
                <Video
                  source={{ uri: episode.video_url }}
                  ref={videoRef}
                  resizeMode={ResizeMode.CONTAIN}
                  onError={(e) => console.log(e)}
                  useNativeControls
                  isLooping
                  onPlaybackStatusUpdate={(status) => setStatus(() => status)}
                  style={styles.video}
                />
              )}
            </View>

            <View style={styles.seasonContainer}>
              <Text style={styles.seasonText}>
                Season {video.season_number}
              </Text>
              <AntDesign name="down" size={16} color="black" />
            </View>

            <View style={styles.includeContainer}>
              <AntDesign name="checkcircle" size={16} color="#00BCD4" />
              <Text style={styles.includeText}>Include with Elite</Text>
            </View>

            <TouchableOpacity
              style={[
                styles.playButton,
                !episode && { backgroundColor: "gray" },
              ]}
              onPress={() =>
                !episode
                  ? null
                  : status.isPlaying
                  ? videoRef.current.pauseAsync()
                  : videoRef.current.playAsync()
              }
            >
              {!episode ? (
                <Text style={styles.playButtonText}>No episode</Text>
              ) : (
                <>
                  <MaterialIcons
                    name={status.isPlaying ? "pause" : "play-arrow"}
                    size={24}
                    color="white"
                  />
                  <Text style={styles.playButtonText}>
                    {status.isPlaying ? "Pause" : "Play"} S
                    {episode.season_number} E{episode.episode_number}
                  </Text>
                </>
              )}
            </TouchableOpacity>

            <TouchableOpacity style={styles.downloadButton}>
              <AntDesign name="download" size={24} color="#ef7204" />
              <Text style={styles.downloadButtonText}>
                Download Season {video.season_number}
              </Text>
            </TouchableOpacity>

            <FlatList
              data={iconData}
              renderItem={renderItem}
              keyExtractor={(item) => item.id}
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.iconRow}
            />

            <Text style={styles.description}>{video.description}</Text>

            <View style={styles.ratingContainer}>
              <StarRating rating={video.rating} />
              <Text style={styles.reviewCount}>(173)</Text>
            </View>

            <View style={styles.tagsContainer}>
              <Text style={styles.tag}>13+</Text>
              <Text style={styles.tag}>UHD</Text>
              <Text style={styles.tag}>X-RAY</Text>
              <Text style={styles.tag}>HDR</Text>
            </View>

            <Text style={styles.languageText}>
              Languages: Audio (5), Subtitles (33)
            </Text>
            <View style={styles.categoryContainer}>
              <TouchableOpacity style={styles.categoryButton}>
                <Text style={styles.categoryText}>Unscripted</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.categoryButton}>
                <Text style={styles.categoryText}>Special Interest</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.tabContainer}>
              <TouchableOpacity
                onPress={() => setActiveTab("Episodes")}
                style={[
                  styles.tab,
                  activeTab === "Episodes" && styles.activeTab,
                ]}
              >
                <Text
                  style={[
                    styles.tabText,
                    activeTab === "Episodes" && styles.activeTab,
                  ]}
                >
                  Episodes ({video.Episodes.length})
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => setActiveTab("More")}
                style={[styles.tab, activeTab === "More" && styles.activeTab]}
              >
                <Text
                  style={[
                    styles.tabText,
                    activeTab === "More" && styles.activeTab,
                  ]}
                >
                  More details
                </Text>
              </TouchableOpacity>
            </View>
            {activeTab === "Episodes" && (
              <Episodes video={video} setEpisode={setEpisode} />
            )}
            {activeTab === "More" && <More video={video} />}
          </>
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#FFF",
  },
  header: {
    backgroundColor: "#94e9f4",
    borderRadius: 10,
    height: 230,
    marginBottom: 16,
  },
  video: { height: 230, borderRadius: 10 },
  title: {
    fontSize: 45,
    fontWeight: "600",
    color: "#000",
  },
  seasonContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#EEE",
    marginBottom: 20,
    padding: 10,
    borderRadius: 5,
    alignSelf: "start",
  },
  seasonText: {
    fontSize: 16,
    marginRight: 5,
  },
  includeContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  includeText: {
    fontSize: 16,
    marginLeft: 4,
  },
  playButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#ef7204",
    borderRadius: 5,
    padding: 12,
    marginBottom: 16,
    justifyContent: "center",
  },
  playButtonText: {
    fontSize: 18,
    color: "#FFF",
    marginLeft: 8,
  },
  downloadButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#ef7204",
    borderWidth: 1,
    borderRadius: 5,
    padding: 12,
    marginBottom: 20,
  },
  downloadButtonText: {
    fontSize: 18,
    color: "#ef7204",
    marginLeft: 8,
  },
  iconRow: {
    flexDirection: "row",
    marginBottom: 20,
  },
  iconButton: {
    alignItems: "center",
    width: 80,
  },
  iconText: {
    fontSize: 13,
    marginTop: 4,
    fontWeight: "600",
    textAlign: "center",
  },
  description: {
    fontSize: 14,
    color: "#373636",
    fontWeight: "600",
    textAlign: "justify",
    marginBottom: 16,
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  ratingText: {
    fontSize: 14,
    color: "#ef7204",
    marginLeft: 4,
  },
  reviewCount: {
    fontSize: 12,
    color: "#666",
    marginLeft: 4,
  },
  tagsContainer: {
    flexDirection: "row",
    marginBottom: 16,
  },
  tag: {
    fontSize: 12,
    backgroundColor: "#EEE",
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 5,
    marginRight: 8,
  },
  languageText: {
    fontSize: 14,
    color: "#666",
    textDecorationLine: "underline",
    marginBottom: 16,
  },
  categoryContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },
  categoryButton: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: "#F9F9F9",
    borderRadius: 5,
    marginRight: 8,
  },
  categoryText: {
    fontSize: 14,
    color: "#666",
    textDecorationLine: "underline",
  },
  tabContainer: {
    flexDirection: "row",
    marginBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#EEE",
  },
  tab: {
    paddingBottom: 5,
    color: "#666",
    flex: 1,
    alignItems: "center",
  },
  tabText: {
    fontWeight: "500",
    fontSize: 18,
  },
  activeTab: {
    color: "#FFA500",
    borderBottomWidth: 2,
    borderBottomColor: "#FFA500",
  },
});

export default TalentDetail;
