import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

import { COLORS } from "../../store/constants";
import * as utils from "../../store/utils";

const styles = StyleSheet.create({
  link: {
    color: COLORS.accent,
    textDecorationLine: "underline",
    margin: 0,
    fontSize: 16,
    fontFamily: "Cabin",
    textAlign: "center",
  },
  container: {
    backgroundColor: COLORS.lightGrey,
    borderRadius: 8,
    padding: 8,
    marginVertical: 8,
  },
});

const MyLink = (props) => {
  const pressed = async () => {
    props.logout && (await utils.saveToken(null));
    utils.navigate(props.to);
  };
  return (
    <TouchableOpacity style={styles.container} onPress={pressed}>
      <Text style={styles.link}>{props.children}</Text>
    </TouchableOpacity>
  );
};

export default MyLink;
