import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { COLORS, FONT_SIZES } from "../../store/constants";
import Icon from "react-native-vector-icons/FontAwesome5";

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.accent,
    padding: 4,
    width: 40,
    justifyContent: "center",
  },
});

const SmallButton = (props) => {
  return (
    <TouchableOpacity style={styles.container} onPress={props.onPress}>
      <Icon
        style={{
          textAlign: "center",
        }}
        name={props.icon}
        color="black"
        size={16}
      ></Icon>
    </TouchableOpacity>
  );
};

export default SmallButton;
