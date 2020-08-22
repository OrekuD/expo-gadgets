import React, { useRef, useState } from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  Animated,
  Text,
  Image,
  TouchableOpacity,
} from "react-native";
import {
  white,
  darkgrey,
  palewhite,
  lightgrey,
  darkergrey,
} from "../constants/Colors";
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
    <>
      <RectButton
        onPress={navigation.goBack}
        style={{ ...styles.backButton, top: top * 2 }}
      >
        <Ionicons name="md-arrow-round-back" color={darkgrey} size={22} />
      </RectButton>
      <ScrollView style={{ backgroundColor: white }}>
        <View style={{ ...styles.container }}>
          <View style={styles.imageContainer}>
            <Image source={image} style={styles.image} resizeMode="contain" />
          </View>
          <View style={styles.content}>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.subtitle}>{subtitle}</Text>
            <Text style={styles.description}>{description}</Text>
            <RectButton style={styles.button}>
              <Text style={styles.buttonText}>Add to cart</Text>
              <Ionicons name="md-arrow-round-forward" color={white} size={18} />
            </RectButton>
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default ProductScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageContainer: {
    width: width,
    height: height * 0.6,
    paddingTop: 20,
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },
  image: {
    width: "130%",
    height: "130%",
    marginLeft: 30,
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
    zIndex: 10,
  },
  content: {
    width: width,
    height: height * 0.4,
    alignItems: "center",
  },
  name: {
    fontFamily: "Rubik-Light",
    fontSize: 38,
    color: darkgrey,
    marginVertical: 5,
  },
  description: {
    fontFamily: "Rubik-Light",
    fontSize: 18,
    width: "80%",
    textAlign: "center",
    lineHeight: 30,
  },
  subtitle: {
    fontFamily: "Rubik-Regular",
    fontSize: 18,
    color: lightgrey,
    textTransform: "uppercase",
    marginVertical: 20,
    letterSpacing: 1.4,
  },
  button: {
    width: width * 0.55,
    height: 50,
    borderRadius: 25,
    backgroundColor: darkergrey,
    marginTop: 40,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 35,
  },
  buttonText: {
    fontFamily: "Rubik-Medium",
    fontSize: 18,
    color: white,
  },
});
