import React from "react";
import { useState } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import { Picker } from "@react-native-picker/picker";

import { COLORS, FONT_SIZES } from "../../store/constants";

const styles = StyleSheet.create({
  container: {
    padding: 8,
    margin: 8,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: COLORS.grey,
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

  let input = props.options ? (
    <Picker
      selectedValue={props.value}
      onValueChange={(itemValue, itemIndex) => props.onChange(itemValue)}
    >
      {props.options.map((el) => (
        <Picker.Item key={el.value} label={el.label} value={el.value} />
      ))}
    </Picker>
  ) : (
    <TextInput
      value={props.value}
      style={styles.input}
      onChangeText={props.onChange}
      secureTextEntry={props.password}
      keyboardType={props.number ? "numeric" : null}
    ></TextInput>
  );

  return (
    <View
      style={{
        ...styles.container,
        ...requiredStyle,
      }}
    >
      <Text style={styles.label}>{props.label}:</Text>
      {input}
      {requiredStyle ? <Text style={styles.alert}>*Debe llenarse</Text> : null}
    </View>
  );
};

export default MyTextInput;
