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
        <MyLinkGroup title="Mi perfil">
          <MyLink to="Profile">Configuración</MyLink>
          <MyLink to="Dashboard">Estadísticas</MyLink>
          <MyLink to="Stock">Mi tienda</MyLink>
          <MyLink to="StockDetail">Mi tienda detalles (TEMPORAL)</MyLink>
          <MyLink>Mis compras</MyLink>
          <MyLink>Mis evaluaciones</MyLink>
        </MyLinkGroup>
        <MyLinkGroup title="Publicar">
          <MyLink to="OffertProduct">Vender producto</MyLink>
          <MyLink to="OffertService">Vender servicio</MyLink>
          <MyLink>Publicar tutoría</MyLink>
          <MyLink>Vender práctica</MyLink>
        </MyLinkGroup>
        <MyLink to="Market">Mercado</MyLink>
        <MyLink to="Tutorials">Tutorías</MyLink>
        <MyLink>Ofertas de empleo</MyLink>
      </View>
    </ScrollView>
  );
};

export default MyDrawer;
