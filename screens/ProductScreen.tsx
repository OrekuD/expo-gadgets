import React, { useRef, useState } from "react";
import { View, StyleSheet, ScrollView, Animated, Text } from "react-native";
import { white, blue, grey } from "../constants/Colors";
import { StackScreenProps } from "@react-navigation/stack";
import { HomeStackParamList } from "../types";
import { Button, Slide } from "../components";
import { width, height } from "../constants/Layout";

const DOT_SIZE = 12;

const ProductScreen = ({
  navigation,
}: StackScreenProps<HomeStackParamList, "ProductScreen">) => {
  return (
    <View style={styles.container}>
      <Text>Okay</Text>
    </View>
  );
};

export default ProductScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: white,
  },
});
