import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons"; // Assuming you're using Expo

const StarRating = ({ rating }) => {
  const filledStars = Math.floor(rating);
  const halfStars = rating % 1 !== 0;
  const emptyStars = 5 - filledStars - (halfStars ? 1 : 0);

  return (
    <View style={styles.starContainer}>
      {Array(filledStars)
        .fill()
        .map((_, index) => (
          <FontAwesome
            key={`filled-${index}`}
            name="star"
            style={styles.star}
          />
        ))}
      {halfStars && <FontAwesome name="star-half" style={styles.star} />}
      {Array(emptyStars)
        .fill()
        .map((_, index) => (
          <FontAwesome
            key={`empty-${index}`}
            name="star-o"
            style={styles.star}
          />
        ))}
    </View>
  );
};

const styles = StyleSheet.create({
  starContainer: {
    flexDirection: "row",
  },
  star: {
    color: "#FFA500", // Gold color
    fontSize: 16,
    marginHorizontal: 2,
  },
});

export default StarRating;
