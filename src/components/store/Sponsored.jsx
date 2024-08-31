import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import { Button, Checkbox } from "react-native-paper";

const options = [
  "not relevant",
  "not appropriate",
  "not working",
  "shown too often",
  "helpfull",
  "others",
];
const Sponsored = () => {
  const [selected, setSelected] = useState("");
  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginBottom: 16,
          paddingBottom: 10,
          paddingHorizontal: 16,
        }}
      >
        <Text style={{ fontSize: 18, fontWeight: "bold" }}>Feedback</Text>
      </View>
      <View style={{ paddingHorizontal: 16, flex: 1 }}>
        <Text style={{ fontSize: 18, fontWeight: "bold" }}>Reason:</Text>
        <FlatList
          data={options}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.option}
              onPress={() => setSelected(item)}
            >
              <Checkbox.Android
                status={selected === item ? "checked" : "unchecked"}
              />
              <Text style={styles.optionText}>{item}</Text>
            </TouchableOpacity>
          )}
          ListFooterComponent={() => (
            <>
              <Text style={{ fontSize: 18, fontWeight: "bold", marginTop: 16 }}>
                Pleas tell us why
              </Text>
              <TextInput
                style={styles.textinput}
                multiline={true}
                numberOfLines={4}
              />
              <Text>4,000 character remaining</Text>
            </>
          )}
        />
      </View>
      <View
        style={{
          flexDirection: "row",
          borderTopWidth: 1,
          padding: 16,
          marginTop: 25,
          borderTopColor: "#e1e1e1",
          gap: 16,
        }}
      >
        <TouchableOpacity
          style={{
            justifyContent: "center",
            borderRadius: 5,
            marginTop: 8,
            alignItems: "center",
            padding: 15,
            borderWidth: 1,
            flex: 1,
          }}
        >
          <Text style={{ fontWeight: "600" }}>Cancel</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: "#ffa500",
            justifyContent: "center",
            borderRadius: 5,
            marginTop: 8,
            alignItems: "center",
            padding: 15,
            flex: 1,
          }}
        >
          <Text style={{ color: "white", fontWeight: "600" }}>Submit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Sponsored;

const styles = StyleSheet.create({
  option: {
    paddingVertical: 5,
    flexDirection: "row",
    alignItems: "center",
  },
  optionText: {
    fontSize: 16,
    color: "#333",
    textTransform: "capitalize",
  },
  textinput: {
    height: 100,
    paddingVertical: 10,
    borderWidth: 1,
    borderRadius: 8,
    marginTop: 8,
  },
});
