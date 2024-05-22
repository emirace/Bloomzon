import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Linking,
  Dimensions,
} from "react-native";
import * as Progress from "react-native-progress";
import { AntDesign } from "@expo/vector-icons";

const More = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>More info</Text>
      <Text style={styles.header}>Content advisery</Text>
      <Text style={styles.description}>
        Alcohol use, smoking, foul language, sexual content
      </Text>
      <Text style={styles.header}>Audio Language</Text>
      <Text style={styles.description}>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua.
      </Text>
      <Text style={styles.header}>Subtitles</Text>
      <Text style={styles.description}>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
        diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
        erat, sed diam voluptua.
      </Text>

      <Text style={styles.header}>Directors</Text>
      <TouchableOpacity style={styles.linkContainer}>
        <Text style={styles.link}>Ramy Romany</Text>
      </TouchableOpacity>

      <Text style={styles.header}>Producers</Text>
      <View style={styles.linkContainer}>
        <TouchableOpacity>
          <Text style={styles.link}>Lorem ipsum</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.link}>Lorem ipsum</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.link}>Lorem ipsum</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.link}>Lorem ipsum</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.header}>Starring</Text>
      <View style={styles.linkContainer}>
        <TouchableOpacity onPress={() => Linking.openURL("#")}>
          <Text style={styles.link}>Lorem ipsum</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Linking.openURL("#")}>
          <Text style={styles.link}>Lorem ipsum</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Linking.openURL("#")}>
          <Text style={styles.link}>Lorem ipsum</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Linking.openURL("#")}>
          <Text style={styles.link}>Lorem ipsum</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.header}>Reviews</Text>

      <View style={styles.ratingContainer}>
        <AntDesign name="star" size={16} color="#FFA500" />
        <AntDesign name="star" size={16} color="#FFA500" />
        <AntDesign name="star" size={16} color="#FFA500" />
        <AntDesign name="star" size={16} color="#FFA500" />
        <AntDesign name="star" size={16} color="#FFA500" />
        <Text style={styles.rating}>4.6 out of 5</Text>
      </View>
      <Text style={styles.reviewsCount}>347 global ratings</Text>

      <View style={styles.progressContainer}>
        {renderProgressBar(5, 0.8)}
        {renderProgressBar(4, 0.11)}
        {renderProgressBar(3, 0.05)}
        {renderProgressBar(2, 0.01)}
        {renderProgressBar(1, 0.03)}
      </View>

      <View style={styles.calculateRate}>
        <AntDesign name="down" size={16} color="#666" />
        <Text style={styles.seasonText}>How are rating calculated?</Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={() => {}}>
        <Text style={styles.buttonText}>Rate this video</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => {}}>
        <Text style={styles.buttonText}>Read all reviews</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const WIDTH = Dimensions.get("screen").width;

const renderProgressBar = (stars, progress) => (
  <View style={styles.progressBarContainer} key={stars}>
    <Text style={styles.starText}>{stars} star</Text>
    <Progress.Bar
      progress={progress}
      width={WIDTH * 0.75}
      color="#ef7204"
      height={2}
    />
    <Text style={styles.starText}> {progress * 100}%</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    paddingTop: 10,
    paddingBottom: 40,
  },
  title: {
    fontWeight: "bold",
    fontSize: 17,
    marginBottom: 16,
  },
  header: {
    fontWeight: "bold",
    fontSize: 14,
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    marginBottom: 8,
    color: "#666",
    lineHeight: 20,
  },
  link: {
    color: "#666",
    fontSize: 16,
    textDecorationLine: "underline",
    marginBottom: 8,
  },
  linkContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginBottom: 8,
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  reviewCount: {
    fontSize: 12,
    color: "#666",
    marginLeft: 4,
  },
  rating: {
    fontSize: 16,
    marginVertical: 4,
  },
  reviewsCount: {
    fontSize: 16,
    color: "#888",
    marginBottom: 8,
  },
  progressContainer: {
    marginBottom: 16,
  },
  progressBarContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 4,
  },
  starText: {
    width: 40,
    fontSize: 16,
    color: "#666",
  },
  progressBar: {
    height: 10,
    flex: 1,
    marginLeft: 8,
  },
  calculateRate: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  seasonText: {
    color: "#666",
  },
  button: {
    backgroundColor: "#EEE",
    padding: 12,
    borderRadius: 5,
    alignItems: "center",
    marginVertical: 8,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "600",
  },
});

export default More;
