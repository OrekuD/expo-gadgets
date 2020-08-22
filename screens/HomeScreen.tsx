import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { white } from "../constants/Colors";
import { StackScreenProps } from "@react-navigation/stack";
import { HomeStackParamList } from "../types";

const HomeScreen = ({
  navigation,
}: StackScreenProps<HomeStackParamList, "HomeScreen">) => {
  return (
    <View style={styles.container}>
      <Text style={{ fontFamily: "Rubik-Light", fontSize: 46 }}>
        HomeScreen
      </Text>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: white,
  },
});
