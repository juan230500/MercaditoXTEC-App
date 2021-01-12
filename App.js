import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";

import ComponentsScreen from "./containers/ComponentsScreen";
import ProfileScreen from "./containers/ProfileScreen";
import DashboardScreen from "./containers/DashboardScreen";
import LogInScreen from "./containers/LogInScreen";
import SignUpScreen from "./containers/SignUpScreen";

const styles = StyleSheet.create({
  container: {},
});

const Drawer = createDrawerNavigator();

const App = () => {
  const [isLogged, setIsLogged] = useState(false);

  const logged = () => {
    setIsLogged(true);
  };

  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{ gestureEnabled: true }}
        initialRouteName={isLogged ? "Profile" : "LogIn"}
      >
        <Drawer.Screen name="Test" component={ComponentsScreen} />
        <Drawer.Screen name="LogIn" component={LogInScreen} />
        <Drawer.Screen name="SignUp" component={SignUpScreen} />
        <Drawer.Screen name="Profile" component={ProfileScreen} />
        <Drawer.Screen name="Dashboard" component={DashboardScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;
