import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { COLORS, FONT_SIZES } from "../../constants";

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.accent,
    padding: 4,
    margin: 2,
  },
});

const SmallButton = (props) => {
  return (
    <TouchableOpacity style={{ flex: 1 }} onPress={props.onPress}>
      <View style={styles.container}>
        <Text
          style={{
            fontSize: 8,
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

export default SmallButton;
