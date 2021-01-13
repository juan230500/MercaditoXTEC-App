import React from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";

import { COLORS, FONT_SIZES } from "../constants";

const styles = StyleSheet.create({
  container: {
    padding: 12,
    margin: 8,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: COLORS.grey,
    width: "90%",
  },
  input: {
    borderBottomWidth: 1,
    borderColor: COLORS.grey,
    padding: 0,
    margin: 0,
    fontSize: 20,
    fontFamily: "Cabin",
    textAlign: "center",
  },
  label: {
    fontSize: 12,
    fontFamily: "Cabin",
    color: COLORS.grey,
  },
});

const MyTextInput = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{props.label}:</Text>
      <TextInput
        value={props.value}
        style={styles.input}
        onChangeText={props.onChange}
        secureTextEntry={props.password}
      ></TextInput>
    </View>
  );
};

export default MyTextInput;
