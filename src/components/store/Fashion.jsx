import {
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import Product from "../Product";
import ClimatePledgeFriendly from "../fashion/ClimatePledgeFriendly";
import ProductCard from "../fashion/ProductCard";

const { width } = Dimensions.get("screen");
const selects = ["Price & Details", "Brands", "Category", "Sizes", "Color"];
const fashionStylists = [
  { image: require("../../../assets/fashion1.jpg"), text: "All" },
  {
    image: require("../../../assets/fashion2.jpg"),
    text: "Hot Selling Products",
  },
  { image: require("../../../assets/fashion3.jpg"), text: "Dress" },
  { image: require("../../../assets/fashion4.jpg"), text: "Gown" },
];
const popular = [
  "Shirt",
  "Pants",
  "Coat",
  "SweatShirt",
  "Skirt",
  "Gown",
  "Others",
];
const products = [1, 2, 3, 4, 5, 6];
const brands = [
  { name: "OFEEFAN", description: "OFEEFAN spaghetti strap Maxi dress" },
  { name: "OFEEFAN", description: "OFEEFAN spaghetti strap Maxi dress" },
  { name: "OFEEFAN", description: "OFEEFAN spaghetti strap Maxi dress" },
];

const Fashion = ({ navigation }) => {
  const renderFilter = ({ item }) => (
    <View style={styles.selectCont}>
      <Text style={styles.selectText}>{item}</Text>
      <AntDesign name="down" size={16} color="#928e8e" />
    </View>
  );

  const renderFashionStylist = ({ item }) => (
    <View style={styles.stylistItemCont}>
      <Image source={item.image} style={styles.stylistImage} />
      <Text style={styles.stylistText}>{item.text}</Text>
    </View>
  );

  const renderPopular = ({ item }) => (
    <View style={styles.selectCont}>
      <Text style={styles.selectText}>{item}</Text>
    </View>
  );

  const renderProduct = ({ item }) => (
    <View style={{ marginRight: 10 }}>
      <Product
        width={0.4 * width}
        navigation={navigation}
        image={require("../../../assets/product2.jpg")}
      />
    </View>
  );

  const renderBrand = ({ item }) => {
    return (
      <View
        style={{
          alignItems: "center",
          marginRight: 10,
          backgroundColor: "#99999920",
          // paddingHorizontal: 15,
          paddingTop: 15,
          borderRadius: 5,
          width: 180,
        }}
      >
        <Text style={{ fontWeight: "800", marginBottom: 20, fontSize: 18 }}>
          {item.name}
        </Text>
        <View
          style={{
            backgroundColor: "white",
            width: 120,
            height: 120,
            borderRadius: 100,
            marginBottom: 20,
          }}
        />
        <Text
          style={{
            textAlign: "center",
            paddingHorizontal: 15,
            marginBottom: 20,
          }}
        >
          {item.description}
        </Text>
        <View style={{ backgroundColor: "#3ac1d330" }}>
          <Text
            style={{
              color: "#3ac1d3",
              fontWeight: "600",
              fontSize: 18,
              padding: 10,
            }}
          >
            Shop now
          </Text>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.filterRow}>
        <FlatList
          data={selects}
          renderItem={renderFilter}
          keyExtractor={(item, index) => index.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
        <View
          style={[styles.selectCont, { borderWidth: 0, paddingHorizontal: 15 }]}
        >
          <Text style={styles.filter}>Filter</Text>
          <AntDesign name="down" size={16} color="#94e9f4" />
        </View>
      </View>

      <View style={styles.fashionStyle}>
        <View style={styles.prettyGarden}>
          <Image
            source={require("../../../assets/pretty-garden.jpg")}
            style={styles.image}
          />
          <Text style={styles.fashionStyleText}>Be Your Fashion Stylist</Text>
        </View>
        <FlatList
          data={fashionStylists}
          renderItem={renderFashionStylist}
          keyExtractor={(item, index) => index.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            paddingTop: 10,
            marginTop: 10,
            borderTopWidth: 1,
            borderTopColor: "#827f7f",
          }}
        >
          <Text style={styles.filter}>
            Shop the PrettyGarden Store on Bloomzon
          </Text>
          <View style={{ flexDirection: "row", alignItems: "center", gap: 5 }}>
            <Text style={{ fontSize: 14, color: "gray" }}>Sponsored</Text>
            <Ionicons name="information-circle" size={18} color="gray" />
          </View>
        </View>
      </View>

      <View style={{ marginTop: 5, backgroundColor: "#fff", padding: 15 }}>
        <Text style={{ fontWeight: "700", fontSize: 20, marginVertical: 10 }}>
          Popular Shopping Ideas
        </Text>

        <FlatList
          data={popular}
          renderItem={renderPopular}
          keyExtractor={(item, index) => index.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
        <Text
          style={{
            fontWeight: "700",
            fontSize: 20,
            marginVertical: 10,
            // marginBottom: 5,
          }}
        >
          Results
        </Text>
        <Text style={styles.selectText}>
          Price and other details may vary based on product size and color.
        </Text>

        <View style={styles.scrollViewContainer}>
          {products.map((item, index) => (
            <Product
              navigation={navigation}
              image={require("../../../assets/product1.jpg")}
              key={index.toString()}
            />
          ))}
        </View>
      </View>
      <View style={{ backgroundColor: "#fff", padding: 15, marginTop: 5 }}>
        <ClimatePledgeFriendly />
        <FlatList
          data={fashionStylists}
          renderItem={renderProduct}
          keyExtractor={(item, index) => index.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>
      <View style={{ marginTop: 5, backgroundColor: "#fff", padding: 15 }}>
        <Text
          style={{
            fontWeight: "700",
            fontSize: 20,
            marginVertical: 10,
          }}
        >
          More Results
        </Text>
        <View style={styles.scrollViewContainer}>
          {products.map((item, index) => (
            <Product
              navigation={navigation}
              image={require("../../../assets/product2.jpg")}
              key={index.toString()}
            />
          ))}
        </View>
      </View>
      <ProductCard image={require("../../../assets/product-card.jpg")} />

      <View style={{ marginTop: 5, backgroundColor: "#fff", padding: 15 }}>
        <Text
          style={{
            fontWeight: "700",
            fontSize: 20,
            marginVertical: 10,
          }}
        >
          More Results
        </Text>
        <View style={styles.scrollViewContainer}>
          {products.map((item, index) => (
            <Product
              navigation={navigation}
              image={require("../../../assets/product2.jpg")}
              key={index.toString()}
            />
          ))}
        </View>
      </View>
      <ProductCard image={require("../../../assets/product-card3.jpg")} />

      <View style={{ marginTop: 5, backgroundColor: "#fff", padding: 15 }}>
        <Text
          style={{
            fontWeight: "700",
            fontSize: 20,
            marginVertical: 10,
          }}
        >
          Brands Related To Your Search
        </Text>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 2,
            marginBottom: 15,
          }}
        >
          <Text style={styles.sponsored}>Sponsored</Text>
          <Ionicons name="information-circle" size={18} color="#999" />
        </View>

        <FlatList
          data={brands}
          renderItem={renderBrand}
          keyExtractor={(item, index) => index.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>

      <View style={{ marginTop: 5, backgroundColor: "#fff", padding: 15 }}>
        <Text
          style={{
            fontWeight: "700",
            fontSize: 20,
            marginVertical: 10,
          }}
        >
          More Results
        </Text>
        <View style={styles.scrollViewContainer}>
          {products.map((item, index) => (
            <Product
              navigation={navigation}
              image={require("../../../assets/product1.jpg")}
              key={index.toString()}
            />
          ))}
        </View>
      </View>
    </View>
  );
};

export default Fashion;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  filterRow: {
    flexDirection: "row",
    marginBottom: 5,
    backgroundColor: "#fff",
    padding: 15,
    paddingTop: 20,
  },
  selectCont: {
    flexDirection: "row",
    alignItems: "center",
    borderColor: "#EEE",
    borderWidth: 1,
    padding: 5,
    borderRadius: 5,
    alignSelf: "start",
    marginRight: 10,
  },
  selectText: {
    fontSize: 14,
    marginRight: 5,
    color: "#928e8e",
  },
  filter: {
    color: "#3ac1d3",
    fontSize: 14,
    fontWeight: "600",
  },
  fashionStyle: {
    backgroundColor: "#fff",
    padding: 15,
  },
  prettyGarden: {
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
    marginBottom: 20,
  },
  image: { width: 0.15 * width, height: 50 },
  fashionStyleText: { fontSize: 16, fontWeight: "500" },
  stylistItemCont: { marginRight: 10, alignItems: "center" },
  stylistImage: { width: 115, height: 150 },
  stylistText: { marginTop: 5, color: "gray" },
  scrollViewContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginTop: 15,
  },
});
