import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";

import { COLORS } from "../store/constants";

const styles = StyleSheet.create({
  container: {
    padding: 4,
    backgroundColor: COLORS.white,
    flex: 1,
    justifyContent: "center",
  },
  text: { fontFamily: "Cabin", fontSize: 12, textAlign: "center" },
});

const CheckItem = (props) => {
  let extraStyle = {};
  if (props.selected) {
    extraStyle = {
      backgroundColor: COLORS.accent,
    };
  }
  const textColor = props.selected ? COLORS.black : COLORS.grey;
  return (
    <TouchableOpacity
      style={{ ...styles.container, ...extraStyle }}
      onPress={props.onPress}
    >
      <Icon
        style={{
          textAlign: "center",
          color: textColor,
        }}
        name={props.icon}
        color="black"
        size={16}
      ></Icon>
      <Text style={{ ...styles.text, color: textColor }}>{props.label}</Text>
    </TouchableOpacity>
  );
};

export default CheckItem;
