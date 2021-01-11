import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";

import ComponentsScreen from "./containers/ComponentsScreen";
import ProfileScreen from "./containers/ProfileScreen";
import DashboardScreen from "./containers/DashboardScreen";

const styles = StyleSheet.create({
  container: {},
});

const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{ gestureEnabled: true }}
        initialRouteName="Test"
      >
        <Drawer.Screen name="Test" component={ComponentsScreen} />
        <Drawer.Screen name="Profile" component={ProfileScreen} />
        <Drawer.Screen name="Dashboard" component={DashboardScreen} />
      </Drawer.Navigator>
      <Text>{Drawer.Navigator.arguments}</Text>
    </NavigationContainer>
  );
};

export default App;
