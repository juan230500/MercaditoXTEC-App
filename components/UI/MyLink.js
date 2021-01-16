import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { COLORS } from "../../constants";

const styles = StyleSheet.create({
  link: {
    color: COLORS.primary,
    textDecorationLine: "underline",
    margin: 0,
    fontSize: 16,
    fontFamily: "Cabin",
  },
  container: {
    backgroundColor: COLORS.lightGrey,
    borderRadius: 8,
    padding: 8,
    marginVertical: 8,
  },
});

const MyLink = (props) => {
  return (
    <TouchableOpacity style={styles.container} onPress={props.onPress}>
      <Text style={styles.link}>{props.children}</Text>
    </TouchableOpacity>
  );
};

export default MyLink;
