import React from "react";
import { Text, StyleSheet, Image } from "react-native";
import { width } from "../constants/Layout";
import { Product } from "../types";
import { white, darkgrey, lightgrey } from "../constants/Colors";
import { RectButton } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

interface SlideProps {
  slide: Product;
  first: boolean;
}

const CARD_WIDTH = width * 0.45;

const Slide = ({ slide, first }: SlideProps) => {
  const { name, company, image } = slide;
  const navigation = useNavigation();
  return (
    <RectButton
      style={{ ...styles.container, marginLeft: first ? 30 : 0 }}
      onPress={() => navigation.navigate("ProductScreen", { item: slide })}
    >
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
    height: CARD_WIDTH * 1.8,
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
