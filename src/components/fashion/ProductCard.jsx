import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const ProductCard = ({ image }) => {
  return (
    <View style={styles.container}>
      <View>
        <Image source={image} style={styles.topImage} />
        <TouchableOpacity style={styles.muteButton}>
          <Ionicons name="volume-mute-outline" size={24} color="white" />
        </TouchableOpacity>
      </View>
      <View style={styles.contentContainer}>
        <Image
          source={require("../../../assets/product-card2.jpg")} // replace with the product image URL
          style={styles.productImage}
        />
        <View style={styles.textContainer}>
          <Text style={styles.productTitle}>
            Checkered Shirt for men black color...
          </Text>
          <View style={styles.seller}>
            <Text style={{ fontWeight: "600", color: "#3ac1d3" }}>
              Bloomzon Elite
            </Text>
            <Ionicons name="checkmark" size={20} color="#ef7204" />
          </View>
          <View style={styles.priceContainer}>
            <Text style={styles.currentPrice}>N1,230</Text>
            <Text style={styles.originalPrice}>N1,300</Text>
          </View>
          <View style={styles.discount}>
            <Text style={{ color: "white" }}>Save 5%</Text>
            <View style={styles.cut} />
          </View>
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "flex-end",
          gap: 2,
        }}
      >
        <Text style={styles.sponsored}>Sponsored</Text>
        <Ionicons name="information-circle" size={18} color="#999" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    marginTop: 5,
    overflow: "hidden",
  },
  topImage: {
    width: "100%",
    height: 200,
  },
  muteButton: {
    position: "absolute",
    bottom: 10,
    right: 10,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    borderRadius: 20,
    padding: 5,
  },
  muteIcon: {
    width: 20,
    height: 20,
  },
  contentContainer: {
    flexDirection: "row",
    paddingTop: 8,
    alignItems: "center",
  },
  productImage: {
    width: 110,
    height: 110,
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
  },
  productTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  seller: {
    flexDirection: "row",
    alignItems: "center",
    fontSize: 14,
    gap: 5,
  },
  checkIcon: {
    width: 16,
    height: 16,
  },
  priceContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
  },
  currentPrice: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
    marginRight: 10,
  },
  originalPrice: {
    fontSize: 14,
    color: "#666",
    textDecorationLine: "line-through",
  },
  discount: {
    backgroundColor: "#ef7204",
    paddingHorizontal: 5,
    padding: 5,
    width: 80,
    position: "relative",
  },
  sponsored: {
    fontSize: 12,
    color: "#999",
    textAlign: "right",
    paddingVertical: 10,
  },
  cut: {
    width: 25,
    height: 25,
    backgroundColor: "white",
    position: "absolute",
    top: 0,
    bottom: 0,
    right: -10,
    transform: [{ rotate: "45deg" }],
  },
});

export default ProductCard;
