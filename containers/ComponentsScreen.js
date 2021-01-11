import React, { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

import MyTextInput from "../components/MyTextInput";
import MyButton from "../components/MyButton";

const styles = StyleSheet.create({
  container: {
    width: 300,
    height: 500,
    margin: 32,
    borderWidth: 1,
    alignItems: "center",
  },
});

const ComponentsScreen = ({ navigation }) => {
  const [myData, setMyData] = useState({
    name: "",
    age: "",
    address: "",
  });

  return (
    <View style={styles.container}>
      <MyTextInput label="name"></MyTextInput>
      <MyTextInput label="age"></MyTextInput>
      <MyTextInput label="address"></MyTextInput>
      <MyButton
        title="lol"
        onPress={() => {
          console.log(myData);
          navigation.toggleDrawer();
          navigation.openDrawer();
        }}
      ></MyButton>
    </View>
  );
};

export default ComponentsScreen;
