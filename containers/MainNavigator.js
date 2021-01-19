import { StatusBar } from "expo-status-bar";
import React, { useRef, useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { COLORS } from "../constants";
import { connect } from "react-redux";

import MyDrawer from "../components/MyDrawer";
import ProfileScreen from "./ProfileScreen";
import DashboardScreen from "./DashboardScreen";
import LogInScreen from "./LogInScreen";
import SignUpScreen from "./SignUpScreen";
import StockScreen from "./StockScreen";
import StockDetailScreen from "./StockDetailScreen";
import MarketScreen from "./MarketScreen";
import OffertServiceScreen from "./OffertServiceScreen";
import OffertProductScreen from "./OffertProductScreen";
import ProductDetailScreen from "./ProductDetailScreen";
import { Colors } from "react-native/Libraries/NewAppScreen";

const Drawer = createDrawerNavigator();
const MainNavigator = (props) => {
  if (props.loading) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          backgroundColor: COLORS.primary,
        }}
      >
        <ActivityIndicator size={50} color={COLORS.accent}></ActivityIndicator>
      </View>
    );
  }
  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{ gestureEnabled: props.logged }}
        initialRouteName={props.logged ? "Profile" : "LogIn"}
        drawerContent={MyDrawer}
      >
        <Drawer.Screen name="LogIn" component={LogInScreen} />
        <Drawer.Screen name="SignUp" component={SignUpScreen} />
        <Drawer.Screen name="Profile" component={ProfileScreen} />
        <Drawer.Screen name="Dashboard" component={DashboardScreen} />
        <Drawer.Screen name="Stock" component={StockScreen} />
        <Drawer.Screen name="StockDetail" component={StockDetailScreen} />
        <Drawer.Screen name="Market" component={MarketScreen} />
        <Drawer.Screen name="OffertService" component={OffertServiceScreen} />
        <Drawer.Screen name="OffertProduct" component={OffertProductScreen} />
        <Drawer.Screen name="ProductDetail" component={ProductDetailScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

const mapStateToProps = (state) => {
  return {
    logged: state.logged,
    loading: state.loading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(MainNavigator);
