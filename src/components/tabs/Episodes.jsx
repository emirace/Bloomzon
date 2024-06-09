import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { MaterialIcons, AntDesign, Entypo } from "@expo/vector-icons";
import React from "react";

const Episodes = ({ video }) => {
  return (
    <View style={styles.episodeList}>
      {video.episodes.map((episode) => (
        <View key={episode.id} style={styles.episodeContainer}>
          <TouchableOpacity style={styles.episodePlayButton}>
            <MaterialIcons name="play-arrow" size={24} color="#ffffff" />
          </TouchableOpacity>
          <View style={styles.episodeInfo}>
            <Text style={styles.episodeTitle}>
              Episode {episode.episode_number}
            </Text>
            <Text style={styles.episodeDescription}>{episode.title}</Text>
          </View>
          <View style={styles.episodeActions}>
            <TouchableOpacity style={styles.episodeActionButton}>
              <AntDesign name="download" size={24} color="black" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.episodeActionButton}>
              <Entypo name="dots-three-vertical" size={24} color="black" />
            </TouchableOpacity>
          </View>
        </View>
      ))}
    </View>
  );
};

export default Episodes;

const styles = StyleSheet.create({
  episodeList: {
    marginBottom: 40,
  },
  episodeContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F9F9F9",
    padding: 16,
    borderRadius: 5,
    marginBottom: 8,
  },
  episodePlayButton: {
    marginRight: 12,
    backgroundColor: "#666",
    borderRadius: 50,
    padding: 5,
  },
  episodeInfo: {
    flex: 1,
  },
  episodeTitle: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 4,
  },
  episodeDescription: {
    fontSize: 14,
    color: "#666",
  },
  episodeActions: {
    flexDirection: "row",
    alignItems: "center",
  },
  episodeActionButton: {
    marginLeft: 16,
  },
});
