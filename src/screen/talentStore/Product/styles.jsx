import { Dimensions, StyleSheet } from "react-native";

const { width } = Dimensions.get("screen");

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mediaContainer: {
    alignItems: "center",
    justifyContent: "center",
    // marginVertical: 20,
  },
  image: {
    width,
    height: 200,
  },
  detailsContainer: {
    padding: 20,
    backgroundColor: "#fff",
    marginBottom: 5,
  },
  productTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  priceContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  currentPrice: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000",
  },
  originalPrice1: {
    fontSize: 18,
    textDecorationLine: "line-through",
    marginLeft: 10,
  },
  discount1: {
    fontSize: 18,
    color: "#888",
    marginLeft: 10,
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  rating: {
    fontSize: 18,
    color: "#ffa500",
  },
  reviewsCount: {
    fontSize: 16,
    color: "#888",
    marginLeft: 5,
  },
  colorTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  colorOptions: {},
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 20,
  },
  tradeInContainer: {
    marginBottom: 2,
    backgroundColor: "#fff",
    padding: 20,
  },
  tradeInTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  tradeInDescription: {
    fontSize: 14,
    color: "#666",
    marginBottom: 10,
  },
  tradeInButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#ccc",
    width: "48%",
    alignItems: "center",
    justifyContent: "center",
  },
  selectedButton: {
    borderColor: "#ef7204",
  },
  buttonText1: {
    fontSize: 18,
  },
  paymentPlansContainer: {
    marginBottom: 5,
    padding: 20,
    backgroundColor: "#fff",
  },
  paymentPlansTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  paymentPlansDescription: {
    fontSize: 14,
    color: "#666",
  },
  giftCardBonus: {
    fontSize: 14,
    color: "#3ac1d3",
    marginBottom: 20,
  },
  deliveryPickupContainer: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 10,
    marginBottom: 20,
  },
  deliveryOption: {
    borderBottomWidth: 2,
    borderBottomColor: "#ffa500",
    flex: 1,
    paddingBottom: 5,
    alignItems: "center",
  },
  pickupOption: {
    borderBottomWidth: 2,
    borderBottomColor: "#ccc",
    flex: 1,
    alignItems: "center",
    paddingBottom: 5,
  },
  deliveryText: {
    fontSize: 16,
    color: "#000",
  },
  pickupText: {
    fontSize: 16,
    color: "#ccc",
  },
  discountText: {
    fontSize: 24,
    color: "#ff0000",
    marginRight: 10,
  },
  priceText: {
    fontSize: 24,
    fontWeight: "bold",
    marginRight: 10,
  },
  unitPriceText: {
    fontSize: 14,
    color: "#666",
  },
  typicalPrice: {
    fontSize: 14,
    color: "#666",
    marginBottom: 5,
  },
  strikethrough: {
    textDecorationLine: "line-through",
  },
  elite: {
    fontSize: 14,
    color: "#3ac1d3",
    fontWeight: "800",
  },
  freeReturns: {
    fontSize: 14,
    color: "#3ac1d3",
    marginBottom: 5,
  },
  exclusivePrice: {
    fontSize: 14,
    marginBottom: 10,
  },
  delivery: {
    fontSize: 14,
    color: "#666",
    marginBottom: 5,
  },
  boldText: {
    fontWeight: "bold",
  },
  shipsFrom: {
    fontSize: 18,
    color: "#666",
    marginBottom: 5,
  },
  address: {
    flexDirection: "row",
    gap: 5,
    marginBottom: 10,
  },
  stock: {
    fontSize: 16,
    fontWeight: "600",
    color: "#22c161",
    marginBottom: 10,
  },
  quantityContainer: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    marginBottom: 10,
    padding: 15,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  picker: {
    height: 50,
    width: "100%",
  },
  addToCartButton1: {
    backgroundColor: "#ffa500",
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
    marginBottom: 10,
  },
  buyNowButton: {
    backgroundColor: "#ff4500",
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
    marginBottom: 10,
  },
  setupAutobuyButton: {
    borderWidth: 1,
    borderColor: "#ffa500",
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
    marginBottom: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  setupAutobuyText: {
    color: "#ffa500",
    fontSize: 16,
    fontWeight: "bold",
  },
  refurbishedContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
  },
  refurbishedText: {
    fontSize: 16,
    color: "#666",
  },
  refurbishedPrice: {
    fontSize: 16,
    color: "#000",
  },
  conditionsContainer: {
    marginBottom: 16,
    backgroundColor: "#eaeaea70",
    borderWidth: 1,
    borderColor: "#b7b7b780",
    borderRadius: 10,
  },
  conditionItem: {
    flexDirection: "row",
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#b7b7b750",
    borderBottomEndRadius: 10,
    borderBottomStartRadius: 10,
  },
  radio: {
    height: 24,
    width: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: "#000",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },
  selectedRadio: {
    height: 12,
    width: 12,
    borderRadius: 6,
    backgroundColor: "#000",
  },
  addToButton: {
    marginVertical: 10,
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  addToButtonText: {
    color: "#3ac1d3",
    fontWeight: "500",
    fontSize: 18,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  accessoryItem: {
    marginBottom: 20,
  },
  addToCartButton: {
    backgroundColor: "#ffa500",
    padding: 10,
    paddingHorizontal: 20,
    marginTop: 10,
    alignItems: "center",
    borderRadius: 5,
  },
  addToCartButtonText: {
    color: "#fff",
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
  listContainer: {},
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
  dot: {
    height: 5,
    width: 5,
    borderRadius: 5,
    backgroundColor: "#000",
    marginRight: 10,
  },
  title: {
    fontSize: 14,
    color: "#000",
  },
});
