import React from "react";
import { View, StyleSheet, Image } from "react-native";
import { width } from "../constants/Layout";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { darkgrey, red } from "../constants/Colors";
import { BorderlessButton } from "react-native-gesture-handler";

interface HeaderProps {}

const Header = (props: HeaderProps) => {
  const { top: paddingTop } = useSafeAreaInsets();
  return (
    <View style={{ ...styles.container, paddingTop }}>
      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/images/profile.png")}
          style={styles.image}
        />
        <View style={styles.dot} />
      </View>
      <BorderlessButton>
        <Ionicons name="ios-search" color={darkgrey} size={30} />
      </BorderlessButton>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    height: 120,
    width: width,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 30,
    marginTop: 15,
  },
  imageContainer: {
    width: 60,
    height: 60,
    borderRadius: 30,
    position: "relative",
  },
  image: {
    height: "100%",
    width: "100%",
  },
  dot: {
    position: "absolute",
    right: 6,
    top: 4,
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: red,
  },
});
