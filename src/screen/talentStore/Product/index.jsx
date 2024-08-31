import React, { useCallback, useRef, useState } from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  FlatList,
  Pressable,
} from "react-native";
import Header from "../../../components/Header";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import Product2 from "../../../components/Product2";
import { styles } from "./styles";
import { Picker } from "@react-native-picker/picker";
import Product3 from "../../../components/Product3";
import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetFooter,
  BottomSheetModal,
  BottomSheetView,
} from "@gorhom/bottom-sheet";
import AddToCart, { HandleComp } from "../../../components/store/AddToCart";

const { width } = Dimensions.get("screen");
const options = ["Video", "Photos", "Reviews", "Highlights", "Gallery"];
const colors = ["blue", "black", "gold", "purple", "green"];
const sizes = ["s", "m", "l", "xl", "xxl", "3xl", "4xl"];

const DATA = [
  {
    id: "1",
    title:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur finibus tempus ultrices. Vivamus placerat metus vel",
  },
  {
    id: "2",
    title:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur finibus tempus ultrices. Vivamus placerat metus vel",
  },
  {
    id: "3",
    title:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur finibus tempus ultrices. Vivamus placerat metus vel",
  },
  {
    id: "4",
    title:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur finibus tempus ultrices. Vivamus placerat metus vel",
  },
  {
    id: "5",
    title:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur finibus tempus ultrices. Vivamus placerat metus vel",
  },
];

const Product = ({ navigation }) => {
  const [selectedOption, setSelectedOption] = useState("Video");
  const [selectedColor, setSelectedColor] = useState(colors[0]);
  const [selectedSize, setSelectedSize] = useState(sizes[0]);
  const [sectionOption, setSectionOption] = useState("No Thanks");
  const [selectedCondition, setSelectedCondition] = useState(null);
  const bottomSheetRef = useRef(null);

  const conditions = [
    { id: "1", type: "Minor wear (Refurbished)", price: "$234.64" },
    { id: "2", type: "Moderate wear (Refurbished)", price: "$230.00" },
  ];

  const accessories = [
    {
      id: "1",
      name: "Bloomzon Basics Fast charging 3A USB-c2.0 to USA-A Cable (USB-IF Certified)",
      price: "₦1,300",
    },
    {
      id: "2",
      name: "Rescue Monthly whole home data and image recovery [Subscription]",
      price: "₦300",
    },
  ];

  const renderOptions = ({ item }) => {
    return (
      <TouchableOpacity
        onPress={() => setSelectedOption(item)}
        style={{
          backgroundColor: selectedOption === item ? "#fff" : undefined,
          padding: 10,
          paddingHorizontal: 15,
          borderRadius: 20,
        }}
      >
        <Text
          style={{
            opacity: selectedOption === item ? 1 : 0.5,
            fontWeight: "600",
          }}
        >
          {item}
        </Text>
      </TouchableOpacity>
    );
  };

  const renderProduct = ({ item }) => (
    <View style={{ marginRight: 10 }}>
      <Product2
        item={item}
        image={require("../../../../assets/product2.jpg")}
        setSelectedColor={setSelectedColor}
        selectedColor={selectedColor}
      />
    </View>
  );

  const renderProduct2 = ({ item }) => (
    <View style={{ marginRight: 10 }}>
      <Product3 image={require("../../../../assets/product2.jpg")} />
    </View>
  );

  const renderSize = ({ item }) => {
    return (
      <TouchableOpacity
        onPress={() => setSelectedSize(item)}
        style={[
          {
            padding: 15,
            paddingTop: 10,
            margin: 5,
            borderWidth: 1,
            borderColor: "#e0e0e0",
            borderRadius: 5,
          },
          selectedSize === item && { borderColor: "#ef7204" },
        ]}
      >
        <Text
          style={{
            textTransform: "uppercase",
            color: "gray",
            fontSize: 20,
          }}
        >
          {item}
        </Text>
      </TouchableOpacity>
    );
  };

  const Item = ({ title }) => (
    <View style={styles.itemContainer}>
      <View style={styles.dot} />
      <Text style={styles.title}>{title}</Text>
    </View>
  );

  const renderBackdrop = useCallback(
    (props) => (
      <BottomSheetBackdrop
        {...props}
        enableTouchThrough={false}
        pressBehavior={"none"}
        opacity={0.8}
        appearsOnIndex={0}
        disappearsOnIndex={-1}
      />
    ),
    []
  );

  const renderFooter = useCallback(
    (props) => (
      <BottomSheetFooter {...props}>
        <View
          style={{
            flexDirection: "row",
            gap: 10,
            backgroundColor: "white",
            padding: 20,
            paddingTop: 10,
          }}
        >
          <TouchableOpacity
            onPress={() => bottomSheetRef.current?.dismiss()}
            style={[styles.setupAutobuyButton, { flex: 1, marginBottom: 10 }]}
          >
            <Text style={styles.setupAutobuyText}>Continue</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.addToCartButton1, { flex: 1 }]}>
            <Text style={styles.buttonText}>View Cart</Text>
          </TouchableOpacity>
        </View>
      </BottomSheetFooter>
    ),
    []
  );

  const handlePresentModalPress = useCallback(() => {
    bottomSheetRef.current?.present();
  }, []);

  const renderImageArea = () => {
    switch (selectedOption) {
      case "Video":
        return (
          <View style={styles.mediaContainer}>
            {/* Video placeholder */}
            <Image
              style={styles.image}
              source={require("../../../../assets/product2.jpg")}
            />
            <AntDesign
              name="playcircleo"
              size={50}
              color="white"
              style={{ position: "absolute" }}
            />
          </View>
        );
      case "Photos":
        return (
          <View style={styles.mediaContainer}>
            {/* Video placeholder */}
            <Image
              style={styles.image}
              source={require("../../../../assets/product2.jpg")}
            />
            <View
              style={{
                position: "absolute",
                bottom: 10,
                left: 10,
                backgroundColor: "gray",
                padding: 5,
                borderRadius: 15,
              }}
            >
              <Text style={{ color: "white" }}>1/7</Text>
            </View>
          </View>
        );
      case "Reviews":
        return (
          <View style={[styles.mediaContainer, { backgroundColor: "white" }]}>
            <View
              style={{
                padding: 16,
                backgroundColor: "#f0eded",
                margin: 16,
                borderRadius: 8,
              }}
            >
              <Text style={[styles.reviewsCount, { marginBottom: 8 }]}>
                {" "}
                Imobighe
              </Text>

              <View style={styles.ratingContainer}>
                <Text style={styles.rating}>★★★★★</Text>
                <Text style={{ color: "#ffa500" }}>Verified Purchase</Text>
              </View>
              <Text style={{ fontSize: 16 }}>
                Amazing product and honestly great communication, great
                communication, i have talked to other supplier and none have
                been as smooth as...
              </Text>
            </View>
            <Pressable
              style={{
                borderWidth: 1,
                borderRadius: 10,
                padding: 4,
                borderColor: "#e1e1e1",
                marginBottom: 15,
              }}
            >
              <Text style={{ color: "gray" }}>See all reviews</Text>
            </Pressable>
          </View>
        );
      case "Highlights":
        return (
          <View
            style={[
              styles.mediaContainer,
              { backgroundColor: "white", paddingHorizontal: 15 },
            ]}
          >
            <View
              style={{
                padding: 16,
                backgroundColor: "#f0eded",
                margin: 16,
                borderRadius: 8,
                width: "100%",
              }}
            >
              <Text
                style={{ fontSize: 16, fontWeight: "500", marginBottom: 8 }}
              >
                On-time Dispatch Guarantee
              </Text>
              <Text style={[styles.reviewsCount, { marginBottom: 8 }]}>
                Claim compansetion for delay dispatch
              </Text>
              <View
                style={{
                  borderTopColor: "#e1e1e1",
                  borderTopWidth: 1,
                  paddingTop: 10,
                  marginTop: 10,
                }}
              >
                <Text
                  style={{ fontSize: 16, fontWeight: "500", marginBottom: 8 }}
                >
                  Payment
                </Text>

                <Text style={[styles.reviewsCount, { marginBottom: 8 }]}>
                  Enjoy encrypted and secure payments
                </Text>
              </View>
            </View>
            <Pressable
              style={{
                borderWidth: 1,
                borderRadius: 10,
                padding: 4,
                borderColor: "#e1e1e1",
                marginBottom: 15,
              }}
            >
              <Text style={{ color: "gray" }}>See all reviews</Text>
            </Pressable>
          </View>
        );

      case "Gallery":
        return (
          <View style={[styles.mediaContainer, { backgroundColor: "white" }]}>
            <View style={{ flexDirection: "row", paddingVertical: 16 }}>
              <Image
                style={{ width: 100, height: 150 }}
                source={require("../../../../assets/product2.jpg")}
              />
              <Image
                style={{ width: 100, height: 150 }}
                source={require("../../../../assets/product2.jpg")}
              />
              <Image
                style={{ width: 100, height: 150 }}
                source={require("../../../../assets/product2.jpg")}
              />
            </View>

            <Pressable
              style={{
                borderWidth: 1,
                borderRadius: 10,
                padding: 4,
                borderColor: "#e1e1e1",
                marginBottom: 15,
              }}
            >
              <Text style={{ color: "gray" }}>See all products gallery</Text>
            </Pressable>
          </View>
        );
      default:
        break;
    }
  };

  return (
    <>
      <Header navigation={navigation} />
      <ScrollView style={styles.container}>
        {renderImageArea()}
        <View
          style={{
            alignItems: "center",
          }}
        >
          <FlatList
            data={options}
            renderItem={renderOptions}
            keyExtractor={(item, index) => index.toString()}
            horizontal
            showsHorizontalScrollIndicator={false}
            style={{
              margin: 15,
              borderRadius: 20,
              backgroundColor: "#dedede",
              width: 0.9 * width,
            }}
          />
        </View>
        <View style={styles.detailsContainer}>
          <Text style={styles.productTitle}>
            Navy Blue Polo shirt for men - Men's Polo Shirt
          </Text>
          <View style={styles.priceContainer}>
            <Text style={styles.currentPrice}>$300</Text>
            <Text style={styles.originalPrice1}>$330</Text>
            <Text style={styles.discount1}>5% OFF</Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: 20,
            }}
          >
            <View style={styles.ratingContainer}>
              <Text style={styles.rating}>★★★★☆</Text>
              <Text style={styles.reviewsCount}>(173)</Text>
            </View>
            <AntDesign name="hearto" size={24} color="black" />
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 5,
              }}
            >
              <Text style={[styles.colorTitle, { color: "gray" }]}>
                Colors:
              </Text>
              <Text
                style={[styles.colorTitle, { textTransform: "capitalize" }]}
              >
                {selectedColor}
              </Text>
            </View>
            <AntDesign name="up" size={14} color="black" />
          </View>
          <View style={styles.colorOptions}>
            <FlatList
              data={colors}
              renderItem={renderProduct}
              keyExtractor={(item, index) => index.toString()}
              horizontal
              showsHorizontalScrollIndicator={false}
            />
          </View>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 5,
            }}
          >
            <Text style={[styles.colorTitle, { color: "gray" }]}>Size:</Text>
            <Text style={[styles.colorTitle, { textTransform: "uppercase" }]}>
              {selectedSize}
            </Text>
          </View>
          <FlatList
            data={sizes}
            renderItem={renderSize}
            keyExtractor={(item, index) => index.toString()}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>
        {/* Trade-in section */}
        <View style={styles.tradeInContainer}>
          <Text style={styles.sectionTitle}>Enhance your purchase</Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Text style={styles.tradeInTitle}>Trade-in and save</Text>
            <AntDesign name="up" size={14} color="black" />
          </View>
          <Text style={styles.tradeInDescription}>
            Save up to N2,000 on your new device with Bloomzon Gift Card Credit
            when you trade in your old device
          </Text>
          <View style={styles.tradeInButtons}>
            <TouchableOpacity
              style={[
                styles.button,
                sectionOption === "No Thanks" && styles.selectedButton,
              ]}
              onPress={() => setSectionOption("No Thanks")}
            >
              <Text style={styles.buttonText1}>No Thanks</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.button,
                sectionOption === "Trade In" && styles.selectedButton,
                { alignItems: "flex-start" },
              ]}
              onPress={() => setSectionOption("Trade In")}
            >
              <Text
                style={[
                  styles.buttonText1,
                  { fontWeight: "600", marginBottom: 5 },
                ]}
              >
                Trade In
              </Text>
              <Text style={{ color: "gray" }}>Up to N1200 back</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Payment plans section */}
        <View style={styles.paymentPlansContainer}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Text style={styles.paymentPlansTitle}>Payment plans</Text>
            <AntDesign name="down" size={14} color="black" />
          </View>
          <Text style={styles.paymentPlansDescription}>
            N1,200/mo (12 mo) at example APR of 30% (rates from 10-30% APR)
          </Text>
        </View>
        <View style={styles.paymentPlansContainer}>
          {/* Gift card bonus section */}
          <Text style={styles.giftCardBonus}>
            Get a $8 bonus when you reload $100 or more to your gift card
            balance (Restrictions apply).
          </Text>

          {/* Delivery/Pickup section */}
          <View style={styles.deliveryPickupContainer}>
            <TouchableOpacity style={styles.deliveryOption}>
              <Text style={styles.deliveryText}>Delivery</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.pickupOption}>
              <Text style={styles.pickupText}>Pickup</Text>
            </TouchableOpacity>
          </View>

          {/* Price section */}
          <View style={styles.priceContainer}>
            <Text style={styles.discountText}>-11%</Text>
            <Text style={styles.priceText}>$115.69</Text>
            <Text style={styles.unitPriceText}>($115.69 / Count)</Text>
          </View>
          <Text style={styles.typicalPrice}>
            Typical price in last 90 days:{" "}
            <Text style={styles.strikethrough}>$129.99</Text>
          </Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 5,
              marginBottom: 5,
            }}
          >
            <Text style={styles.elite}>Bloomzon Elite</Text>
            <AntDesign name="check" size={18} color="#ffa500" />
          </View>
          <Text style={styles.freeReturns}>FREE Returns</Text>
          <Text style={styles.exclusivePrice}>Exclusive Elite price</Text>
          <Text style={styles.delivery}>
            FREE delivery{" "}
            <Text style={styles.boldText}>Wednesday, April 26</Text>. Order
            within <Text style={{ color: "#3ac1d3" }}>1 hr 25 mins</Text>
          </Text>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 5,
              marginBottom: 10,
            }}
          >
            <Ionicons name="leaf-outline" size={20} color="green" />
            <Text style={styles.shipsFrom}>Ships from nearby</Text>
            <AntDesign name="down" size={14} color="black" />
          </View>
          <View style={styles.address}>
            <Ionicons name="location-outline" size={20} color="black" />
            <Text style={[styles.boldText, { color: "#3ac1d3" }]}>
              Deliver to Imobighe - Inglewood 90301
            </Text>
          </View>
          <Text style={styles.stock}>In Stock</Text>
          <View style={styles.quantityContainer}>
            <Text style={{ fontSize: 18 }}>Select Quantity</Text>
            <AntDesign name="down" size={14} color="black" />
            {/* <Picker
                selectedValue={selectedQuantity}
                style={styles.picker}
                onValueChange={(itemValue) => setSelectedQuantity(itemValue)}
              >
                <Picker.Item label="Select Quantity" value="" />
                <Picker.Item label="1" value="1" />
                <Picker.Item label="2" value="2" />
                <Picker.Item label="3" value="3" />
                <Picker.Item label="4" value="4" />
                <Picker.Item label="5" value="5" />
              </Picker> */}
          </View>
          <TouchableOpacity
            onPress={handlePresentModalPress}
            style={styles.addToCartButton1}
          >
            <Text style={styles.buttonText}>Add to cart</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buyNowButton}>
            <Text style={styles.buttonText}>Buy now</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.setupAutobuyButton}>
            <Text style={styles.setupAutobuyText}>Setup Autobuy</Text>
          </TouchableOpacity>
          <View style={styles.conditionsContainer}>
            {conditions.map((condition) => (
              <TouchableOpacity
                key={condition.id}
                style={styles.conditionItem}
                onPress={() => setSelectedCondition(condition.id)}
              >
                <View style={styles.radio}>
                  {selectedCondition === condition.id && (
                    <View style={styles.selectedRadio} />
                  )}
                </View>
                <View>
                  <Text style={{ fontWeight: "600", marginBottom: 5 }}>
                    {condition.type}
                  </Text>
                  <Text style={{ color: "gray" }}>{condition.price}</Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
          <TouchableOpacity style={styles.addToButton}>
            <Text style={styles.addToButtonText}>Add to</Text>
            <AntDesign name="down" size={14} color="#3ac1d3" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.addToButton}>
            <Text style={styles.addToButtonText}>
              Add to Registry & Gifting
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.paymentPlansContainer}>
          <Text style={styles.sectionTitle}>Add an Accessory</Text>
          {accessories.map((item) => (
            <View key={item.id} style={styles.accessoryItem}>
              <Text>{item.name}</Text>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Text>{item.price}</Text>
                <TouchableOpacity style={styles.addToCartButton}>
                  <Text style={styles.addToCartButtonText}>Add to cart</Text>
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </View>
        <View
          style={[
            styles.paymentPlansContainer,
            {
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            },
          ]}
        >
          <View>
            <Text style={styles.sectionTitle}>Other sellers on Bloomzon</Text>
            <Text style={{ marginBottom: 5 }}>Compare Renewed (48) from</Text>
            <Text style={{ fontWeight: "600", marginBottom: 5, fontSize: 16 }}>
              N300
            </Text>
            <Text style={{ fontWeight: "600", fontSize: 16 }}>
              & FREE Shipping
            </Text>
          </View>
          <AntDesign name="right" size={14} color="black" />
        </View>
        <View style={styles.paymentPlansContainer}>
          <Text style={styles.sectionTitle}>Description</Text>
          <Text style={{ marginBottom: 5 }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            finibus tempus ultrices. Vivamus placerat metus vel diam iaculis
            imperdiet. Aliquam sed arcu dui. Suspendisse potenti. Nam imperdiet
            vel nisi eu lacinia. Integer ac porta lacus, in rutrum risus. Fusce
            nisi diam, lobortis sed augue sagittis, volutpat faucibus ante. In
            nunc purus, sollicitudin sed consequat sed, accumsan id ante.
          </Text>
        </View>
        <View style={{ backgroundColor: "#fff", marginBottom: 5 }}>
          <Text
            style={[styles.sectionTitle, { padding: 20, paddingBottom: 0 }]}
          >
            Styling ideas
          </Text>

          <Image
            style={styles.image}
            source={require("../../../../assets/product1.jpg")}
          />
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 5,
              justifyContent: "center",
              marginTop: 10,
            }}
          >
            <Text style={{}}>Do yo like this outfit</Text>
            <Text
              style={{
                fontSize: 16,
                borderWidth: 1,
                padding: 5,
                borderRadius: 5,
                borderColor: "#eee",
              }}
            >
              YES
            </Text>
            <Text
              style={{
                fontSize: 16,
                borderWidth: 1,
                padding: 3,
                paddingHorizontal: 8,
                borderRadius: 5,
                borderColor: "#eee",
              }}
            >
              NO
            </Text>
          </View>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 5,
              justifyContent: "center",
              padding: 20,
            }}
          >
            <View
              style={{
                width: 8,
                height: 8,
                backgroundColor: "#ffa500",
                borderRadius: 10,
              }}
            />
            {[1, 2, 4].map((i, index) => (
              <View
                style={{
                  width: 8,
                  height: 8,
                  backgroundColor: "#d4d4d4",
                  borderRadius: 10,
                }}
                key={index}
              />
            ))}
          </View>
        </View>
        <View style={[styles.paymentPlansContainer]}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: 5,
            }}
          >
            <Text style={styles.sectionTitle}>Frequently bought together</Text>
            <Text style={[styles.sectionTitle, { color: "#ffa500" }]}>
              See more
            </Text>
          </View>

          <FlatList
            data={colors}
            renderItem={renderProduct2}
            keyExtractor={(item, index) => index.toString()}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>

        <View style={styles.paymentPlansContainer}>
          <Text style={styles.sectionTitle}>Feature & Details</Text>
          {DATA.map((item) => (
            <Item key={item.id} title={item.title} />
          ))}
        </View>

        <View style={styles.paymentPlansContainer}>
          <Text style={styles.sectionTitle}>Product information</Text>
          {[1, 2, 3].map((i) => (
            <View
              style={{
                flexDirection: "row",
                borderWidth: 1,
                borderColor: "#d4d0d080",
              }}
              key={i}
            >
              <View
                style={{
                  backgroundColor: "#eee",
                  width: 0.3 * width,
                  padding: 20,
                }}
              >
                <Text>item package Dimesion (L x W x H)</Text>
              </View>
              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  padding: 20,
                }}
              >
                <Text style={{ color: "gray" }}>8.48 x 2.48 inches</Text>
              </View>
            </View>
          ))}

          <TouchableOpacity
            style={[
              styles.setupAutobuyButton,
              { marginTop: 10, marginBottom: 0 },
            ]}
          >
            <Text style={styles.setupAutobuyText}>Show More</Text>
          </TouchableOpacity>
        </View>

        <View style={[styles.paymentPlansContainer]}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: 5,
            }}
          >
            <Text style={styles.sectionTitle}>Related Products</Text>
            <Text style={[styles.sectionTitle, { color: "#ffa500" }]}>
              See more
            </Text>
          </View>

          <FlatList
            data={colors}
            renderItem={renderProduct2}
            keyExtractor={(item, index) => index.toString()}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>
        <View style={[styles.paymentPlansContainer, { paddingHorizontal: 0 }]}>
          <View
            style={[
              styles.quantityContainer,
              { marginBottom: 0, borderTopWidth: 0 },
            ]}
          >
            <Text style={{ fontWeight: "600", fontSize: 18 }}>
              Delivery time
            </Text>
            <AntDesign name="down" size={14} color="black" />
          </View>
          <View
            style={[
              styles.quantityContainer,
              { marginBottom: 0, padding: 20, borderTopWidth: 0 },
            ]}
          >
            <Text style={{ fontWeight: "600", fontSize: 18 }}>
              Return Policy
            </Text>
            <AntDesign name="down" size={14} color="black" />
          </View>
          <View
            style={[
              styles.quantityContainer,
              { marginBottom: 0, padding: 20, borderTopWidth: 0 },
            ]}
          >
            <Text style={{ fontWeight: "600", fontSize: 18 }}>
              Processing & Shipping
            </Text>
            <AntDesign name="down" size={14} color="black" />
          </View>
          <View
            style={[
              styles.quantityContainer,
              { marginBottom: 0, padding: 20, borderTopWidth: 0 },
            ]}
          >
            <Text style={{ fontWeight: "600", fontSize: 18 }}>
              Shopping Cost
            </Text>
            <AntDesign name="down" size={14} color="black" />
          </View>
          <View
            style={[
              styles.quantityContainer,
              { marginBottom: 0, padding: 20, borderTopWidth: 0 },
            ]}
          >
            <Text style={{ fontWeight: "600", fontSize: 18 }}>Disclaimer</Text>
            <AntDesign name="down" size={14} color="black" />
          </View>
          <View
            style={[
              styles.quantityContainer,
              { marginBottom: 0, padding: 20, borderTopWidth: 0 },
            ]}
          >
            <Text style={{ fontWeight: "600", fontSize: 18 }}>Size Guide</Text>
            <AntDesign name="down" size={14} color="black" />
          </View>
        </View>

        <View style={[styles.paymentPlansContainer]}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: 5,
            }}
          >
            <Text style={styles.sectionTitle}>
              You May Also Like This Items
            </Text>
            <Text style={[styles.sectionTitle, { color: "#ffa500" }]}>
              See more
            </Text>
          </View>

          <FlatList
            data={colors}
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
            <Text style={styles.sectionTitle}>Pick For You</Text>
            <Text style={[styles.sectionTitle, { color: "#ffa500" }]}>
              See more
            </Text>
          </View>

          <FlatList
            data={colors}
            renderItem={renderProduct2}
            keyExtractor={(item, index) => index.toString()}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>
        <View style={[styles.paymentPlansContainer, { padding: 0 }]}>
          <View style={styles.contentContainer}>
            <Image
              source={require("../../../../assets/product-card2.jpg")} // replace with the product image URL
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
        <View style={[styles.paymentPlansContainer]}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Text style={styles.sectionTitle}>Inspired From Recent View</Text>
            <Text style={[styles.sectionTitle, { color: "#ffa500" }]}>
              See more
            </Text>
          </View>

          <FlatList
            data={colors}
            renderItem={renderProduct2}
            keyExtractor={(item, index) => index.toString()}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </ScrollView>
      <BottomSheetModal
        ref={bottomSheetRef}
        index={0}
        snapPoints={["70%"]}
        backdropComponent={renderBackdrop}
        handleComponent={() => <HandleComp />}
        footerComponent={renderFooter}
        enableOverDrag={false}
        enablePanDownToClose={false}
      >
        <BottomSheetView style={{ flex: 1 }}>
          <AddToCart />
        </BottomSheetView>
      </BottomSheetModal>
    </>
  );
};

export default Product;
