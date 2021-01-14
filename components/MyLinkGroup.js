import React from "react";
import { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

import { COLORS } from "../constants";

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.grey,
    borderRadius: 8,
    padding: 8,
    marginVertical: 8,
    width: "100%",
  },
  title: {
    fontSize: 16,
    fontFamily: "Cabin",
  },
});

const MyLinkGroup = (props) => {
  const [drop, setDrop] = useState(false);
  return (
    <TouchableOpacity style={styles.container} onPress={() => setDrop(!drop)}>
      <Text style={styles.title}>{props.title}</Text>
      {drop ? props.children : null}
    </TouchableOpacity>
  );
};

export default MyLinkGroup;
