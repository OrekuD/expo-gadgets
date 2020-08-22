import React from "react";
import { Text, View, StyleSheet, ScrollView } from "react-native";
import { width } from "../constants/Layout";
import { darkgrey } from "../constants/Colors";
import { slides } from "../data/slides";
import Slide from "./Slide";
import { Ionicons } from "@expo/vector-icons";

const Slides = () => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.text1}>Top Picks</Text>
        <View style={{ flexDirection: "row" }}>
          <Text style={styles.text2}>See all</Text>
          <Ionicons name="md-arrow-round-forward" color={darkgrey} size={18} />
        </View>
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ marginTop: 30 }}
      >
        {slides.map((slide, index) => (
          <Slide key={index} slide={slide} first={index === 0} />
        ))}
      </ScrollView>
    </View>
  );
};

export default Slides;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: width,
    paddingTop: 50,
  },
  row: {
    width: "100%",
    flexDirection: "row",
    paddingHorizontal: 30,
    alignItems: "center",
    justifyContent: "space-between",
  },
  text1: {
    fontFamily: "Rubik-Regular",
    fontSize: 24,
    color: darkgrey,
  },
  text2: {
    fontFamily: "Rubik-Medium",
    fontSize: 18,
    color: darkgrey,
    marginRight: 5,
  },
});
