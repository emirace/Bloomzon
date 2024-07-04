import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import StarRating from "./StarRating";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";

const { width } = Dimensions.get("window");
const itemWidth = (width - 150) / 2;

const Product2 = ({ image, item, selectedColor, setSelectedColor }) => {
  return (
    <TouchableOpacity
      onPress={() => setSelectedColor(item)}
      style={[
        styles.productCont,
        { width: itemWidth },
        selectedColor === item && { borderWidth: 2, borderColor: "#ef7204" },
      ]}
    >
      <Image source={image} style={styles.productImage} resizeMode="cover" />
      <View style={{ padding: 10 }}>
        <Text
          style={{
            fontWeight: "800",
            paddingBottom: 10,
            fontSize: 18,
            textTransform: "capitalize",
          }}
        >
          {item}
        </Text>
        <Text style={{ fontWeight: "600", fontSize: 18, marginBottom: 10 }}>
          N1,230
        </Text>
        <Text
          style={{
            fontWeight: "600",
            color: "#3ac1d3",
            textTransform: "uppercase",
            marginBottom: 5,
          }}
        >
          Bloomzon Elite
        </Text>
        <Text
          style={{
            fontWeight: "600",
            color: "#20e36b",
            marginBottom: 5,
          }}
        >
          In-Stock
        </Text>
        <Text style={{ opacity: 0.5, fontSize: 14, fontWeight: "600" }}>
          Free Delivery
        </Text>
        <Text style={{ opacity: 0.5, fontSize: 14, fontWeight: "600" }}>
          Overnight 7...
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default Product2;

const styles = StyleSheet.create({
  productCont: { marginBottom: 20, borderRadius: 5 },
  productImage: {
    width: itemWidth - 4,
    height: 200,
    borderRadius: 5,
  },
  color: {
    flexDirection: "row",
    padding: 10,
    gap: 10,
    justifyContent: "center",
  },
  bigCircle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  smallCircle: { width: 15, height: 15, borderRadius: 10 },
});
