import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import { width } from "../constants/Layout";
import { Product } from "../types";
import { black, white, darkgrey, lightgrey } from "../constants/Colors";
import { RectButton } from "react-native-gesture-handler";

interface SlideProps {
  slide: Product;
  first: boolean;
}

const CARD_WIDTH = width * 0.4;

const Slide = ({ slide, first }: SlideProps) => {
  const { name, company, image } = slide;
  return (
    <RectButton style={{ ...styles.container, marginLeft: first ? 30 : 0 }}>
      <Image source={image} style={styles.image} resizeMode="contain" />
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.company}>{company}</Text>
    </RectButton>
  );
};

export default Slide;

const styles = StyleSheet.create({
  container: {
    width: CARD_WIDTH,
    height: CARD_WIDTH * 2,
    elevation: 1,
    backgroundColor: white,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 20,
  },
  image: {
    width: CARD_WIDTH * 0.8,
    height: CARD_WIDTH * 0.8,
    marginVertical: 10,
  },
  name: {
    fontFamily: "Rubik-Regular",
    fontSize: 18,
    color: darkgrey,
    marginVertical: 5,
  },
  company: {
    fontFamily: "Rubik-Regular",
    fontSize: 14,
    color: lightgrey,
    marginVertical: 5,
    textTransform: "uppercase",
  },
});
