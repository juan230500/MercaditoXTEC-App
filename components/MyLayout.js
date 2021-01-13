import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";

import { COLORS } from "../constants";

const styles = StyleSheet.create({
  header: {
    padding: 16,
    paddingTop: 48,
    backgroundColor: COLORS.primary,
    flexDirection: "row",
  },
  text: {
    color: COLORS.white,
    fontSize: 32,
    fontWeight: "bold",
    marginHorizontal: 32,
  },
  container1: {
    flex: 1,
    backgroundColor: COLORS.primary,
  },
  container2: {
    flex: 1,
    borderTopRightRadius: 32,
    borderTopLeftRadius: 32,
    overflow: "hidden",
    backgroundColor: COLORS.white,
  },
});

const MyLayout = (props) => (
  <View
    style={{
      flex: 1,
    }}
  >
    <View style={styles.header}>
      {props.onPressDrawer ? (
        <Icon
          onPress={props.onPressDrawer}
          name="bars"
          color="white"
          size={32}
        ></Icon>
      ) : null}
      <Text style={styles.text}>{props.title}</Text>
    </View>
    <View style={styles.container1}>
      <View style={styles.container2}>{props.children}</View>
    </View>
  </View>
);
export default MyLayout;
