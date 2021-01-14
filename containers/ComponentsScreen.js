import React, { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

import MyLink from "../components/MyLink";
import MyLinkGroup from "../components/MyLinkGroup";

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
  return (
    <View style={styles.container}>
      <MyLinkGroup title="lol">
        <MyLink onPress={() => navigation.navigate("LogIn")}>
          Cerrar sesión
        </MyLink>
        <MyLink onPress={() => navigation.navigate("Profile")}>Perfil</MyLink>
        <MyLink onPress={() => navigation.navigate("StockScreen")}>
          Mi tienda
        </MyLink>
        <MyLink onPress={() => navigation.navigate("StockDetailScreen")}>
          Mi tienda detalles (TEMPORAL)
        </MyLink>
        <MyLink onPress={() => navigation.navigate("Dashboard")}>
          Estadísticas
        </MyLink>
      </MyLinkGroup>
    </View>
  );
};

export default ComponentsScreen;
