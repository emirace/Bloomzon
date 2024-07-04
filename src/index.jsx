import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./screen/Home";
import TalentCatch from "./screen/talentCatch";
import TalentDetail from "./screen/talentCatch/TalentDetail";
import TalentStore from "./screen/talentStore";
import Product from "./screen/talentStore/Product";

const Stack = createNativeStackNavigator();

function Main() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="TalentCatch" component={TalentCatch} />
        <Stack.Screen name="TalentDetail" component={TalentDetail} />
        <Stack.Screen name="TalentStore" component={TalentStore} />
        <Stack.Screen name="Product" component={Product} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Main;
