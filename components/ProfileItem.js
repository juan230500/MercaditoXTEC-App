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
  input: {
    fontFamily: "Cabin",
    borderBottomWidth: 1,
  },
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
    padding: 16,
  },
});

const ProfileItem = (props) => {
  const [edit, setEdit] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={{ ...styles.text, color: COLORS.white }}>
          {props.label}
        </Text>
      </View>
      {props.edit ? (
        <View style={styles.inputContainer}>
          <TextInput
            onChangeText={props.onChange}
            value={props.value}
            style={styles.input}
          ></TextInput>
        </View>
      ) : (
        <View style={styles.textContainer}>
          <Text style={styles.text}>{props.value}</Text>
        </View>
      )}
    </View>
  );
};

export default ProfileItem;
