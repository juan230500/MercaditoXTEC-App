import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";

import { COLORS } from "../store/constants";
import * as utils from "../store/utils";

const styles = StyleSheet.create({
  link: {
    color: COLORS.primary,
    margin: 0,
    fontSize: 16,
    fontFamily: "Cabin",
  },
  container: {
    backgroundColor: COLORS.lightGrey,
    flexDirection: "row",
    padding: 16,
    marginVertical: 0,
  },
});

const DrawerItem = (props) => {
  const pressed = async () => {
    props.logout && (await utils.saveToken(null));
    utils.navigate(props.to);
  };
  return (
    <TouchableOpacity style={styles.container} onPress={pressed}>
      <Icon
        name={props.icon || "home"}
        color={COLORS.primary}
        size={24}
        style={{ width: "20%" }}
      ></Icon>
      <Text style={styles.link}>{props.children}</Text>
    </TouchableOpacity>
  );
};

export default DrawerItem;
