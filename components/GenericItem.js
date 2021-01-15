import React from "react";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { COLORS } from "../constants";

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.lightGrey,
    margin: 8,
    marginTop: 16,
    borderRadius: 8,
    flexDirection: "row",
    overflow: "hidden",
  },
  titleContainer: {
    width: "30%",
    padding: 16,
    backgroundColor: COLORS.primary,
  },
  textContainer: {
    padding: 16,
    justifyContent: "center",
    flex: 1,
  },
  text: {
    fontFamily: "Cabin",
  },
});

const GenericItem = (props) => {
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
    </View>
  );
};

export default GenericItem;
