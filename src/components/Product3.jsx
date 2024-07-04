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

const { width } = Dimensions.get("window");
const itemWidth = (width - 150) / 2;

const Product3 = ({ image }) => {
  return (
    <TouchableOpacity style={[styles.productCont, { width: itemWidth }]}>
      <Image source={image} style={styles.productImage} resizeMode="cover" />
      <View style={{ padding: 10 }}>
        <Text
          style={{
            fontWeight: "800",
            paddingBottom: 10,
            fontSize: 18,
            textTransform: "capitalize",
          }}
          numberOfLines={1}
        >
          Iphone 14 case...
        </Text>
        <StarRating rating={5} />
        <Text
          style={{
            opacity: 0.5,
            fontSize: 14,
            fontWeight: "600",
            marginVertical: 5,
          }}
        >
          2407 reviews
        </Text>
        <Text style={{ fontWeight: "600", fontSize: 18 }}>N1,330</Text>
        <View
          style={{
            backgroundColor: "#ffa500",
            justifyContent: "center",
            borderRadius: 5,
            marginTop: 8,
            alignItems: "center",
            padding: 10,
          }}
        >
          <Text style={{ color: "white", fontWeight: "600" }}>Add to cart</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Product3;

const styles = StyleSheet.create({
  productCont: {
    borderRadius: 5,
    backgroundColor: "#eeeeee80",
  },
  productImage: {
    width: itemWidth,
    height: itemWidth,
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
