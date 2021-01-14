import React from "react";
import { useState } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";

import { COLORS, FONT_SIZES } from "../../constants";

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
  alert: {
    color: "red",
  },
});

const MyTextInput = (props) => {
  const requiredStyle =
    props.required && !props.value
      ? {
          borderColor: "red",
          borderWidth: 2,
        }
      : null;

  return (
    <View
      style={{
        ...styles.container,
        ...requiredStyle,
      }}
    >
      <Text style={styles.label}>{props.label}:</Text>
      <TextInput
        value={props.value}
        style={styles.input}
        onChangeText={props.onChange}
        secureTextEntry={props.password}
      ></TextInput>
      {requiredStyle ? <Text style={styles.alert}>*Debe llenarse</Text> : null}
    </View>
  );
};

export default MyTextInput;
