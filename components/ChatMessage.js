import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { COLORS } from "../store/constants";

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.primary,
    padding: 8,
    margin: 8,
    borderRadius: 8,
  },
  message: { color: "white", fontFamily: "Cabin" },
});

const ChatMessage = (props) => {
  let extraStyle = {};
  if (props.left) {
    extraStyle = { marginRight: "30%" };
  }
  if (props.right) {
    extraStyle = { marginLeft: "30%" };
  }
  return (
    <View style={{ ...styles.container, ...extraStyle }}>
      <Text style={styles.message}>{props.children}</Text>
    </View>
  );
};

export default ChatMessage;
