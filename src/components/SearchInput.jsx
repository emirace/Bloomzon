import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const SearchInput = ({ value, onChangeText }) => {
  return (
    <View style={styles.searchContainer}>
      <Feather
        name="search"
        size={24}
        style={styles.searchIcon}
        color="#8E8E93"
      />
      <TextInput
        style={styles.searchInput}
        placeholder="Search..."
        placeholderTextColor="#8E8E93"
        value={value}
        onChangeText={onChangeText}
      />
      <MaterialCommunityIcons
        name="line-scan"
        style={styles.rightIcon}
        size={24}
        color="#8E8E93"
      />
      <View style={styles.divider} />
      <EvilIcons
        name="camera"
        style={styles.rightIcon}
        size={30}
        color="#8E8E93"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 5,
    backgroundColor: "#FFFFFF",
    flex: 1,
  },
  searchIcon: {
    margin: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 20,
    color: "#000",
  },
  rightIcon: {
    margin: 10,
  },
  divider: {
    backgroundColor: "#e1e1ea",
    width: 1,
    height: 42,
  },
});

export default SearchInput;
