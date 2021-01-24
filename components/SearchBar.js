import React, { useState } from "react";
import {
  Button,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";

import { COLORS } from "../store/constants";

const ITEMS = [
  { display: "lol1", value: "l1" },
  { display: "lol2", value: "l2" },
  { display: "lol3", value: "l3" },
];

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    height: 40,
    padding: 4,
    backgroundColor: COLORS.white,
    borderWidth: 1,
    borderColor: COLORS.lightGrey,
    borderRadius: 64,
    zIndex: 2,
    position: "relative",
  },
  input: {
    flex: 1,
    margin: 0,
    padding: 0,
    fontFamily: "Cabin",
  },
  icon: { textAlign: "center", color: COLORS.grey, marginHorizontal: 8 },
  menu: {
    maxHeight: 240,
    paddingTop: 20,
    backgroundColor: COLORS.white,
    borderWidth: 1,
    borderColor: COLORS.lightGrey,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    position: "absolute",
    top: 20,
    left: 0,
    right: 0,
    zIndex: 1,
  },
});

const SearchBar = (props) => {
  const [focused, setFocused] = useState(false);

  const items = ITEMS.map((el) => (
    <TouchableOpacity
      style={{ padding: 8 }}
      onPress={() => console.log(el.value)}
    >
      <Text key={el.value}>{el.display}</Text>
    </TouchableOpacity>
  ));

  return (
    <View>
      <View style={styles.container}>
        <Icon
          onPress={() => setFocused(true)}
          style={styles.icon}
          name="search"
          size={20}
        ></Icon>
        <TextInput
          onFocus={() => setFocused(true)}
          onEndEditing={() => setFocused(false)}
          onChangeText={props.onChange}
          value={props.value}
          style={styles.input}
          placeholder="buscar ..."
          selectTextOnFocus
        ></TextInput>
        <Icon
          onPress={() => setFocused(false)}
          style={styles.icon}
          name="times"
          size={20}
        ></Icon>
      </View>
      {focused && (
        <View style={styles.menu}>
          <ScrollView keyboardShouldPersistTaps="handled">{items}</ScrollView>
        </View>
      )}
    </View>
  );
};

export default SearchBar;
