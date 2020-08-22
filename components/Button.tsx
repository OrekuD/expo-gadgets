import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { width } from "../constants/Layout";
import { white, blue } from "../constants/Colors";

interface ButtonProps {
  label: string;
  onPress: () => void;
}

const HEIGHT = 58;

const Button = ({ label, onPress }: ButtonProps) => {
  return (
    <RectButton style={styles.button} onPress={onPress}>
      <Text style={styles.label}>{label}</Text>
    </RectButton>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    width: width * 0.7,
    height: HEIGHT,
    borderRadius: HEIGHT / 2,
    alignItems: "center",
    justifyContent: "center",
    elevation: 0.5,
    backgroundColor: blue,
    alignSelf: "center",
    paddingTop: 5,
  },
  label: {
    fontSize: 26,
    fontFamily: "Poppins-Regular",
    color: white,
  },
});
