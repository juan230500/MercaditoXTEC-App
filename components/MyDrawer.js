import React from "react";
import { StyleSheet, Text, View, ScrollView, Image } from "react-native";

import { COLORS } from "../store/constants";
import MyLink from "./UI/MyLink";
import DrawerItem from "./DrawerItem";

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.primary,
    flex: 1,
  },
});

const MyDrawer = (props) => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.primary,
        height: "100%",
      }}
    >
      <Image
        source={require("../assets/icon.png")}
        style={{ height: "30%", aspectRatio: 1, alignSelf: "center" }}
      />
      <ScrollView
        contentContainerStyle={{
          backgroundColor: COLORS.primary,
        }}
      >
        <DrawerItem to="LogIn" logout icon="sign-out-alt">
          Cerrar sesión
        </DrawerItem>
        <DrawerItem to="Profile" icon="sliders-h">
          Configuración
        </DrawerItem>
        <DrawerItem to="Market" icon="store">
          Mercado
        </DrawerItem>
        <DrawerItem to="Offert" icon="lightbulb">
          Publicar
        </DrawerItem>
        <DrawerItem to="Stock" icon="boxes">
          Mi tienda
        </DrawerItem>
        <DrawerItem icon="shopping-bag" to="Purchases">
          Mis compras
        </DrawerItem>
        <DrawerItem to="Dashboard" icon="chart-bar">
          Estadísticas
        </DrawerItem>
        <DrawerItem icon="star">Mis evaluaciones</DrawerItem>
      </ScrollView>
    </View>
  );
};

export default MyDrawer;
