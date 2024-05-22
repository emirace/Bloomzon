import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  StatusBar,
  Platform,
  Dimensions,
} from "react-native";
import SearchInput from "../components/SearchInput";
import Header from "../components/Header";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const seasons = [
  {
    id: "1",
    title: "Bloomzon Talent Catch 2024 - Season 1",
    period: "Jul - Oct 2024",
  },
  {
    id: "2",
    title: "Bloomzon Talent Catch 2025 - Season 2",
    period: "Nov - Feb 2025",
  },
  {
    id: "3",
    title: "Bloomzon Talent Catch 2025 - Season 3",
    period: "Mar - Aug 2025",
  },
  {
    id: "4",
    title: "Bloomzon Talent Catch 2026 - Season 4",
    period: "Sep - Jan 2026",
  },
  {
    id: "5",
    title: "Bloomzon Talent Catch 2026 - Season 5",
    period: "Feb - Jul 2026",
  },
  {
    id: "6",
    title: "Bloomzon Talent Catch 2026 - Season 6",
    period: "Aug - Dec 2026",
  },
  { id: "7", title: "Grand Final", period: "Aug - Dec 2026" },
];

const TalentCatchScreen = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredSeasons, setFilteredSeasons] = useState(seasons);

  const handleSearch = (text) => {
    setSearchQuery(text);
    if (text) {
      const filteredData = seasons.filter((item) =>
        item.title.toLowerCase().includes(text.toLowerCase())
      );
      setFilteredSeasons(filteredData);
    } else {
      setFilteredSeasons(seasons);
    }
  };

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <TouchableOpacity
        onPress={() => navigation.push("TalentDetail")}
        style={styles.thumb}
      >
        <Text style={styles.thumbText}>Talent Catch</Text>
        <View style={styles.playButton}>
          <Text style={styles.playButtonText}>▶</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.period}>{item.period}</Text>
      </View>
      <TouchableOpacity style={styles.menuButton}>
        <MaterialCommunityIcons name="dots-vertical" size={24} color={"#999"} />
      </TouchableOpacity>
    </View>
  );
  const renderTitle = () => {
    return (
      <View style={{ marginBottom: 10 }}>
        <Text style={styles.thumbText}>Bloomzon Talent Catch</Text>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <Header navigation={navigation} />
      <FlatList
        data={filteredSeasons}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        style={{ padding: 20 }}
        ListHeaderComponent={renderTitle}
      />
    </View>
  );
};

const WIDTH = Dimensions.get("screen").width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
  },
  thumb: {
    backgroundColor: "#94e9f4",
    justifyContent: "center",
    alignItems: "center",
    height: 90,
    width: WIDTH * 0.3,
    borderRadius: 10,
    position: "relative",
    marginRight: 10,
  },
  thumbText: { fontWeight: "600", fontSize: "20" },
  playButton: {
    position: "absolute",
    bottom: 5,
    left: 5,
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    width: 30,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
  playButtonText: {
    color: "#000000",
    fontSize: 18,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: "500",
    color: "#333",
    lineHeight: 30,
    marginBottom: 5,
  },
  period: {
    fontSize: 16,
    color: "#666",
  },
  menuButton: {
    padding: 5,
    borderWidth: 1,
    borderRadius: 50,
    borderColor: "#cec9c9",
    marginLeft: 50,
  },
});

export default TalentCatchScreen;
