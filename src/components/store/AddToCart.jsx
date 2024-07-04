import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import Product3 from "../Product3";
import {
  BottomSheetFlatList,
  BottomSheetScrollView,
} from "@gorhom/bottom-sheet";

const AddToCart = () => {
  const renderProduct2 = ({ item }) => (
    <View style={{ marginRight: 10 }}>
      <Product3 image={require("../../../assets/product2.jpg")} />
    </View>
  );
  return (
    <View style={{ flex: 1, backgroundColor: "#eeeeee90" }}>
      <BottomSheetScrollView>
        <View style={[styles.paymentPlansContainer]}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Text style={styles.sectionTitle}>Consider These items</Text>
            <Text style={[styles.sectionTitle, { color: "#ffa500" }]}>
              See more
            </Text>
          </View>

          <BottomSheetFlatList
            data={[1, 2, 3, 4]}
            renderItem={renderProduct2}
            keyExtractor={(item, index) => index.toString()}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>
        <View style={[styles.paymentPlansContainer]}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Text style={styles.sectionTitle}>Discover More</Text>
            <Text style={[styles.sectionTitle, { color: "#ffa500" }]}>
              See more
            </Text>
          </View>

          <BottomSheetFlatList
            data={[1, 2, 3, 4]}
            renderItem={renderProduct2}
            keyExtractor={(item, index) => index.toString()}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>
        <View style={[styles.paymentPlansContainer]}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Text style={styles.sectionTitle}>Shop Aisles</Text>
            <Text style={[styles.sectionTitle, { color: "#ffa500" }]}>
              See more
            </Text>
          </View>

          <BottomSheetFlatList
            data={[1, 2, 3, 4]}
            renderItem={renderProduct2}
            keyExtractor={(item, index) => index.toString()}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </BottomSheetScrollView>
    </View>
  );
};

export const HandleComp = () => (
  <View
    style={{
      flexDirection: "row",
      alignItems: "center",
      padding: 20,
      gap: 5,
      borderBottomWidth: 1,
    }}
  >
    <Image
      source={require("../../../assets/product2.jpg")}
      style={styles.productImage}
      resizeMode="cover"
    />
    <Ionicons name="checkmark-circle" size={24} color="green" />
    <Text style={{ color: "green", fontSize: 20 }}> Added to Cart</Text>
  </View>
);

export default AddToCart;

const styles = StyleSheet.create({
  productImage: {
    width: 40,
    height: 40,
    marginRight: 20,
    borderRadius: 5,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 20,
  },
  paymentPlansContainer: {
    marginBottom: 5,
    padding: 20,
    backgroundColor: "#fff",
  },
});
