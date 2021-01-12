import React from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";

import { COLORS, FONT_SIZES } from "../constants";

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.grey,
    padding: 16,
    margin: 8,
    borderRadius: 8,
    width: "80%",
  },
  input: {
    borderBottomWidth: 1,
    padding: 0,
    margin: 0,
    fontSize: FONT_SIZES.medium,
    textAlign: "center",
  },
});

const MyTextInput = (props) => {
  return (
    <View style={styles.container}>
      <TextInput
        value={props.value}
        placeholder={props.label}
        style={styles.input}
        onChangeText={props.onChange}
        secureTextEntry={props.password}
      ></TextInput>
    </View>
  );
};

export default MyTextInput;
