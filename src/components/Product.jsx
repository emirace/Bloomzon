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
const itemWidth = (width - 40) / 2;

const colors = ["green", "blue", "purple"];

const Product = ({ image }) => {
  const [selectedColor, setSelectedColor] = useState("green");
  return (
    <View style={[styles.productCont, { width: itemWidth }]}>
      <Image source={image} style={styles.productImage} resizeMode="cover" />
      <View style={styles.color}>
        {colors.map((color) => (
          <TouchableOpacity
            key={color}
            onPress={() => setSelectedColor(color)}
            style={[
              styles.bigCircle,
              color === selectedColor && { borderColor: color, borderWidth: 1 },
            ]}
          >
            <View style={[styles.smallCircle, { backgroundColor: color }]} />
          </TouchableOpacity>
        ))}
      </View>
      <Text style={{ fontWeight: "600", paddingBottom: 5, lineHeight: 20 }}>
        Bloomzon Talent catch Season 1 episode 1 winner
      </Text>
      <View style={{ flexDirection: "row", gap: 5, alignItems: "center" }}>
        <StarRating rating={4} />
        <Text style={{ opacity: 0.5, fontSize: 14 }}>(173)</Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          gap: 2,
          alignItems: "center",
          marginVertical: 5,
        }}
      >
        <Text style={{ fontWeight: "600", color: "#3ac1d3" }}>
          Bloomzon Elite
        </Text>
        <Ionicons name="checkmark" size={20} color="#ef7204" />
        <Text style={{ opacity: 0.5, fontSize: 14, fontWeight: "600" }}>
          Free Delivery
        </Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          gap: 2,
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <View style={{ flexDirection: "row", gap: 5, alignItems: "center" }}>
          <Text style={{ fontWeight: "800" }}>N1,230</Text>
          <Text style={{ opacity: 0.5, fontSize: 14 }}>816 sold</Text>
        </View>
        <View
          style={{
            borderWidth: 1,
            borderColor: "black",
            padding: 5,
            paddingHorizontal: 10,
            borderRadius: 20,
          }}
        >
          <MaterialIcons name="add-shopping-cart" size={18} color="black" />
        </View>
      </View>
    </View>
  );
};

export default Product;

const styles = StyleSheet.create({
  productCont: { marginBottom: 20 },
  productImage: {
    width: itemWidth,
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
