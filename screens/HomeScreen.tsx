import React from "react";
import { Text, View, StyleSheet, ScrollView } from "react-native";
import { palewhite, lightgrey } from "../constants/Colors";
import { StackScreenProps } from "@react-navigation/stack";
import { HomeStackParamList } from "../types";
import { Header, Slides } from "../components";

const HomeScreen = ({
  navigation,
}: StackScreenProps<HomeStackParamList, "HomeScreen">) => {
  return (
    <ScrollView style={{ backgroundColor: palewhite }}>
      <View style={styles.container}>
        <Header />
        <View style={styles.content}>
          <Text style={styles.subTitle}>Welcome back, victor!</Text>
          <Text style={styles.mainTitle}>
            Let me show you what's trending today
          </Text>
        </View>
        <Slides />
      </View>
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    paddingHorizontal: 30,
  },
  subTitle: {
    fontFamily: "Rubik-Regular",
    fontSize: 18,
    color: lightgrey,
    textTransform: "uppercase",
    marginTop: 40,
    marginBottom: 15,
    letterSpacing: 1.4,
  },
  mainTitle: {
    fontFamily: "Rubik-Light",
    fontSize: 55,
    width: "90%",
  },
});
