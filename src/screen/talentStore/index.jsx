import { Dimensions, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import Header from "../../components/Header";
import { Ionicons } from "@expo/vector-icons";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Fashion from "./Fashion";
import Invention from "./Invention";
import { MaterialTabBar, Tabs } from "react-native-collapsible-tab-view";

const Tab = createMaterialTopTabNavigator();
const { width } = Dimensions.get("screen");

const TalentStore = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Header navigation={navigation} />
      <Tabs.Container
        renderHeader={renderHeader}
        renderTabBar={renderTabBar}
        // headerHeight={HEADER_HEIGHT} // optional
      >
        <Tabs.Tab name="Fashion">
          <Tabs.ScrollView>
            <Fashion />
          </Tabs.ScrollView>
        </Tabs.Tab>
        <Tabs.Tab name="Invention">
          <Tabs.ScrollView>
            <Invention />
          </Tabs.ScrollView>
        </Tabs.Tab>
      </Tabs.Container>
    </View>
  );
};

const renderHeader = () => (
  <View style={styles.deliveryLabel}>
    <Ionicons name="location-outline" size={24} color="black" />
    <Text style={styles.deliveryLabelText}>
      Deliver to Imobighe - Ingiewwod 90301
    </Text>
  </View>
);

const renderTabBar = (props) => (
  <MaterialTabBar
    {...props}
    indicatorStyle={{
      backgroundColor: "#ef7204",
      height: 3,
      borderRadius: 2,
    }}
    activeColor="#ef7204"
    labelStyle={{
      textTransform: "capitalize",
      fontWeight: "600",
      color: "#ef7204",
    }}
  />
);

export default TalentStore;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  deliveryLabel: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    backgroundColor: "#94e9f490",
    paddingHorizontal: 20,
  },
  deliveryLabelText: { fontWeight: "600", fontSize: 16 },
});
