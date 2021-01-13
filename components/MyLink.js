import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { COLORS } from "../constants";

const styles = StyleSheet.create({
  link: {
    color: COLORS.primary,
    textDecorationLine: "underline",
    marginVertical: 16,
    fontSize: 16,
    fontFamily: "Cabin",
  },
});

const MyLink = (props) => {
  return (
    <Text style={styles.link} onPress={props.onPress}>
      {props.children}
    </Text>
  );
};

export default MyLink;
