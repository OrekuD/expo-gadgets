import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import { width } from "../constants/Layout";
import { SlideObj } from "../types";
import { black } from "../constants/Colors";

interface SlideProps {
  slide: SlideObj;
}

const IMAGE_SIZE = width * 0.8;

const Slide = ({ slide }: SlideProps) => {
  const { title, subtitle, image } = slide;
  return (
    <View style={styles.container}>
      <Image source={image} resizeMode="contain" style={styles.image} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
    </View>
  );
};

export default Slide;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: width,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: IMAGE_SIZE,
    height: IMAGE_SIZE,
    marginTop: 60,
  },
  title: {
    fontFamily: "Poppins-Bold",
    fontSize: 32,
    color: black,
    marginVertical: 10,
  },
  subtitle: {
    fontFamily: "Poppins-Light",
    fontSize: 20,
    color: black,
    marginVertical: 10,
    width: "65%",
    textAlign: "center",
  },
});
