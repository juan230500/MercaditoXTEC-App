import { StatusBar } from "expo-status-bar";
import React, { useRef, useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { useFonts } from "expo-font";

import MyDrawer from "./components/MyDrawer";
import ComponentsScreen from "./containers/ComponentsScreen";
import ProfileScreen from "./containers/ProfileScreen";
import DashboardScreen from "./containers/DashboardScreen";
import LogInScreen from "./containers/LogInScreen";
import SignUpScreen from "./containers/SignUpScreen";
import StockScreen from "./containers/StockScreen";
import StockDetailScreen from "./containers/StockDetailScreen";

const Drawer = createDrawerNavigator();
const App = () => {
  const [isLogged, setIsLogged] = useState(true);

  const [fontsLoaded] = useFonts({
    Roboto: require("./assets/fonts/RobotoCondensed-Bold.ttf"),
    Cabin: require("./assets/fonts/Cabin-Regular.ttf"),
  });

  if (!fontsLoaded) return <Text>Loading..</Text>;

  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{ gestureEnabled: true }}
        initialRouteName={isLogged ? "Test" : "LogIn"}
        drawerContent={MyDrawer}
      >
        <Drawer.Screen name="LogIn" component={LogInScreen} />
        <Drawer.Screen name="SignUp" component={SignUpScreen} />
        <Drawer.Screen name="Test" component={ComponentsScreen} />
        <Drawer.Screen name="Profile" component={ProfileScreen} />
        <Drawer.Screen name="Dashboard" component={DashboardScreen} />
        <Drawer.Screen name="StockScreen" component={StockScreen} />
        <Drawer.Screen name="StockDetailScreen" component={StockDetailScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;
