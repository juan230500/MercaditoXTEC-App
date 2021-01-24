import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { COLORS, FONT_SIZES } from "../../store/constants";

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.accent,
    paddingVertical: 4,
    paddingHorizontal: 16,
    borderRadius: 64,
    marginVertical: 8,
  },
});

const MyButton = (props) => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View style={styles.container}>
        <Text
          style={{
            fontSize: 18,
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          {props.title.toUpperCase()}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default MyButton;
