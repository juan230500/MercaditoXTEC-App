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
import PurchasesScreen from "./PurchasesScreen";
import EvalScreen from "./EvalScreen";

import * as utils from "../store/utils";

const Drawer = createDrawerNavigator();
const MainNavigator = (props) => {
  return (
    <NavigationContainer ref={utils.navigationRef}>
      <Drawer.Navigator
        screenOptions={{ gestureEnabled: props.token !== null }} //props.token !== null
        initialRouteName={"LogIn"}
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
        <Drawer.Screen name="Purchases" component={PurchasesScreen} />
        <Drawer.Screen name="Eval" component={EvalScreen} />
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
