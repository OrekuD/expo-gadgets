import React from "react";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { HomeStackParamList } from "../types";
import { HomeScreen, ProductScreen } from "../screens";

const Stack = createStackNavigator<HomeStackParamList>();

const Navigation = () => (
  <NavigationContainer>
    <Stack.Navigator
      screenOptions={{
        ...TransitionPresets.SlideFromRightIOS,
      }}
      headerMode="none"
    >
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="ProductScreen" component={ProductScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default Navigation;
