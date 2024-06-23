import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from "react-native";
import Header from "../components/Header";

const WIDTH = Dimensions.get("screen").width;

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Header showBack={false} />
      <Text style={styles.header}>Bloomzon Talent Catch Store</Text>
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: "https://example.com/flashlight.jpg" }}
          style={styles.image}
        />
        <TouchableOpacity style={styles.playButton}>
          <Text style={styles.playButtonText}>▶</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          onPress={() => navigation.push("TalentCatch")}
          style={styles.button}
        >
          <Text style={styles.buttonText}>View Bloomzon</Text>
          <Text style={styles.buttonText}> Talent Catch</Text>
        </TouchableOpacity>
        <View style={styles.divider} />
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.push("TalentStore")}
        >
          <Text style={styles.buttonText}>View Bloomzon</Text>
          <Text style={styles.buttonText}> Talent Store</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    // justifyContent: "center",
    // alignItems: "center",
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
    margin: 20,
  },
  imageContainer: {
    position: "relative",
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    width: WIDTH,
    height: 250,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    position: "absolute",
    top: 0,
    left: 0,
    width: WIDTH,
    height: 200,
    borderRadius: 10,
  },
  playButton: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    borderRadius: 50,
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#FFFFFF",
  },
  playButtonText: {
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: "bold",
  },
  buttonsContainer: {
    backgroundColor: "#f4f3f3",
    flexDirection: "row",
    justifyContent: "space-around",
    borderRadius: 5,
    width: "100%",
    alignItems: "center",
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginHorizontal: 10,
  },
  buttonText: {
    color: "#000000",
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 5,
  },
  divider: {
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    width: 1,
    height: "70%",
  },
});

export default Home;
