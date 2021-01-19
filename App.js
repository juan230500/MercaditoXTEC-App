import { StatusBar } from "expo-status-bar";
import React, { useRef, useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { useFonts } from "expo-font";
import { createStore } from "redux";
import { Provider, connect } from "react-redux";
import reducer from "./store/reducer";

import MainNavigator from "./containers/MainNavigator";

const store = createStore(reducer);

const App = () => {
  const [fontsLoaded] = useFonts({
    Roboto: require("./assets/fonts/RobotoCondensed-Bold.ttf"),
    Cabin: require("./assets/fonts/Cabin-Regular.ttf"),
  });

  if (!fontsLoaded) return <Text>Loading..</Text>;

  return (
    <Provider store={store}>
      <MainNavigator></MainNavigator>
    </Provider>
  );
};

export default App;
