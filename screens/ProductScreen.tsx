import React, { useRef, useState } from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  Animated,
  Text,
  Image,
} from "react-native";
import { white, darkgrey, palewhite } from "../constants/Colors";
import { StackScreenProps } from "@react-navigation/stack";
import { HomeStackParamList } from "../types";
import { Button, Slide } from "../components";
import { width, height } from "../constants/Layout";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { RectButton } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";

const DOT_SIZE = 12;

const ProductScreen = ({
  navigation,
  route,
}: StackScreenProps<HomeStackParamList, "ProductScreen">) => {
  const { top } = useSafeAreaInsets();
  const { item } = route.params;
  const { image, name, description, subtitle } = item;
  return (
    <View style={{ ...styles.container }}>
      <RectButton style={{ ...styles.backButton, top: top * 2 }}>
        <Ionicons name="md-arrow-round-back" color={darkgrey} size={26} />
      </RectButton>
      <View style={styles.imageContainer}>
        <Image source={image} style={styles.image} resizeMode="contain" />
      </View>
    </View>
  );
};

export default ProductScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: white,
  },
  imageContainer: {
    // marginTop: 30,
    width: width,
    height: height * 0.5,
    // backgroundColor: white,
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },
  image: {
    width: "130%",
    height: "130%",
  },
  backButton: {
    position: "absolute",
    left: 30,
    width: 60,
    height: 60,
    borderRadius: 30,
    elevation: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: white,
  },
});
