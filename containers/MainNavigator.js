import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import {} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { connect } from "react-redux";

import { BASE_URL } from "../store/constants";
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
import HelpScreen from "./HelpScreen";

import { navigationRef } from "../store/utils";
import { request } from "../store/utils";

const Drawer = createDrawerNavigator();
const MainNavigator = (props) => {
  useEffect(() => {
    getCategories();
  }, []);

  const getCategories = async () => {
    await request("/category", "GET");
  };

  return (
    <NavigationContainer ref={navigationRef}>
      <Drawer.Navigator
        screenOptions={{ gestureEnabled: props.logged }}
        initialRouteName={props.logged ? "Market" : "LogIn"}
        drawerContent={MyDrawer}
      >
        <Drawer.Screen name="Help" component={HelpScreen} />
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
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setCategories: (categories) =>
      dispatch({ type: "SET_CATEGORIES", categories: categories }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainNavigator);
