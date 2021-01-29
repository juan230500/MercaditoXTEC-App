import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { connect } from "react-redux";

import MyDrawer from "../components/MyDrawer";
import ProfileScreen from "./ProfileScreen";
import DashboardScreen from "./DashboardScreen";
import LogInScreen from "./LogInScreen";
import SignUpScreen from "./SignUpScreen";
import StockScreen from "./StockScreen";
import StockDetailScreen from "./StockDetailScreen";
import MarketScreen from "./MarketScreen";
import OffertScreen from "./OffertScreen";
import DetailScreen from "./DetailScreen";
import HelpScreen from "./HelpScreen";
import ChatScreen from "./ChatScreen";

import * as utils from "../store/utils";

const Drawer = createDrawerNavigator();
const MainNavigator = (props) => {
  useEffect(() => {
    getCategories();
  }, []);

  const getCategories = async () => {
    let json = await utils.request("/categories", "GET");
    console.log("[CATEGORIES]", json);
    json && props.setCategories(json);
  };

  return (
    <NavigationContainer ref={utils.navigationRef}>
      <Drawer.Navigator
        screenOptions={{ gestureEnabled: true }} //props.token !== null
        initialRouteName={"Market"}
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
        <Drawer.Screen name="Offert" component={OffertScreen} />
        <Drawer.Screen name="Detail" component={DetailScreen} />
        <Drawer.Screen name="Chat" component={ChatScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

const mapStateToProps = (state) => {
  return {
    token: state.token,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setCategories: (categories) =>
      dispatch({ type: "SET_CATEGORIES", categories: categories }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainNavigator);
