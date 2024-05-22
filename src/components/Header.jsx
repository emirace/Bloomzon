import { Platform, StatusBar, StyleSheet, View } from "react-native";
import React, { useState } from "react";
import SearchInput from "./SearchInput";
import { AntDesign } from "@expo/vector-icons";

const Header = ({ navigation, showBack = true }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (text) => {
    setSearchQuery(text);
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        {showBack && (
          <AntDesign
            name="arrowleft"
            size={30}
            color="black"
            onPress={() => navigation.goBack()}
          />
        )}
        <SearchInput value={searchQuery} onChangeText={handleSearch} />
      </View>
    </View>
  );
};

export default Header;

const STATUSBAR_HEIGHT = Platform.OS === "ios" ? 50 : StatusBar.currentHeight;

const styles = StyleSheet.create({
  container: {
    paddingTop: STATUSBAR_HEIGHT,
    backgroundColor: "#94e9f4",
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    margin: 20,
    gap: 10,
  },
});
