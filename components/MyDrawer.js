import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";

import MyLink from "./UI/MyLink";
import MyLinkGroup from "./UI/MyLinkGroup";

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: "white",
  },
});

const MyDrawer = (props) => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <MyLink to="LogIn" logout>
          Cerrar sesión
        </MyLink>
        <MyLink to="Profile">Configuración</MyLink>
        <MyLink to="Market">Mercado</MyLink>
        <MyLink to="Offert">Publicar</MyLink>
        <MyLink to="Stock">Mi tienda</MyLink>
        <MyLink>Mis compras</MyLink>
        <MyLink to="Dashboard">Estadísticas</MyLink>
        <MyLink>Mis evaluaciones</MyLink>
      </View>
    </ScrollView>
  );
};

export default MyDrawer;
