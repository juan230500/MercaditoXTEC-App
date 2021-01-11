import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { COLORS, FONT_SIZES } from "../constants";

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.accent,
    paddingVertical: 4,
    paddingHorizontal: 24,
  },
});

const MyButton = (props) => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View style={styles.container}>
        <Text style={{ fontSize: FONT_SIZES.medium, fontWeight: "bold" }}>
          {props.title.toUpperCase()}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default MyButton;
