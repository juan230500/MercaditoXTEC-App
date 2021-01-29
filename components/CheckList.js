import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { COLORS } from "../store/constants";
import CheckItem from "./CheckItem";

const styles = StyleSheet.create({
  container: {
    borderColor: COLORS.lightGrey,
    borderWidth: 1,
    borderRadius: 8,
    flexDirection: "row",
    overflow: "hidden",
    marginVertical: 8,
  },
});

const CheckList = (props) => {
  const select = (index) => {
    let newOptions = [...props.options];
    if (props.unique) {
      for (let option of newOptions) {
        option.selected = false;
      }
    }
    let newItem = { ...newOptions[index] };
    newItem.selected = !newItem.selected;
    newOptions[index] = newItem;
    props.setOptions(newOptions);
  };

  const items = props.options.map((el, index) => (
    <CheckItem
      key={index}
      label={el.display}
      onPress={() => select(index)}
      selected={el.selected}
      icon={el.icon}
    ></CheckItem>
  ));

  return <View style={styles.container}>{items}</View>;
};

export default CheckList;
