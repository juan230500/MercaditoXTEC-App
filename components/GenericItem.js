import React from "react";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { COLORS } from "../store/constants";
import MyButton from "./UI/MyButton";
import SmallButton from "./UI/SmallButton";

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.lightGrey,
    marginVertical: 8,
    borderRadius: 8,
    flexDirection: "row",
    overflow: "hidden",
  },
  titleContainer: {
    width: "30%",
    padding: 8,
    backgroundColor: COLORS.primary,
  },
  textContainer: {
    padding: 8,
    flex: 1,
    flexDirection: "row",
  },
  text: {
    textAlign: "center",
    fontSize: 16,
    fontFamily: "Cabin",
  },
  buttonContainer: {
    padding: 8,
    flexDirection: "row",
  },
});

const GenericItem = (props) => {
  const buttons = props.buttons
    ? props.buttons.map((el) => (
        <SmallButton
          key={el.icon}
          icon={el.icon}
          onPress={el.onPress}
        ></SmallButton>
      ))
    : null;
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={{ ...styles.text, color: COLORS.white }}>
          {props.label}
        </Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>{props.value}</Text>
      </View>
      <View style={styles.buttonContainer}>{buttons}</View>
    </View>
  );
};

export default GenericItem;
