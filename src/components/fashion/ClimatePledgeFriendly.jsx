import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

const ClimatePledgeFriendly = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Climate Pledge Friendly</Text>
      <Text style={styles.subtitle}>
        Lorem ipsum dolor sit amet, consetetur
      </Text>
      <View style={styles.contentContainer}>
        <Image
          source={require("../../../assets/climate.jpg")}
          resizeMode="contain"
          style={styles.icon}
        />
        <View style={{ flex: 1 }}>
          <Text style={styles.description}>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna
          </Text>
          <TouchableOpacity>
            <Text style={styles.learnMore}>Learn more</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 14,
    color: "#666",
    marginBottom: 10,
  },
  contentContainer: {
    flexDirection: "row",
    // alignItems: "center",
    marginBottom: 10,
  },
  icon: {
    width: 80,
    height: 80,
    marginRight: 10,
  },
  description: {
    fontSize: 14,
    color: "#666",
    flex: 1,
  },
  learnMore: {
    fontSize: 14,
    textDecorationLine: "underline",
  },
});

export default ClimatePledgeFriendly;
