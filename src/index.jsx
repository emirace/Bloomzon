import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./screen/Home";
import TalentCatch from "./screen/TalentCatch";
import TalentDetail from "./screen/TalentDetail";

const Stack = createNativeStackNavigator();

function Main() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="TalentCatch" component={TalentCatch} />
        <Stack.Screen name="TalentDetail" component={TalentDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Main;
