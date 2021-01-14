import React from "react";
import { StyleSheet, Text, View } from "react-native";

import MyLink from "./MyLink";
import MyLinkGroup from "../components/MyLinkGroup";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});

const MyDrawer = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <MyLink onPress={() => navigation.navigate("LogIn")}>
        Cerrar sesión
      </MyLink>
      <MyLinkGroup title="Mi perfil">
        <MyLink onPress={() => navigation.navigate("Profile")}>
          Configuración
        </MyLink>
        <MyLink onPress={() => navigation.navigate("Dashboard")}>
          Estadísticas
        </MyLink>
        <MyLink onPress={() => navigation.navigate("StockScreen")}>
          Mi tienda
        </MyLink>
        <MyLink onPress={() => navigation.navigate("StockDetailScreen")}>
          Mi tienda detalles (TEMPORAL)
        </MyLink>
        <MyLink>Mis compras</MyLink>
        <MyLink>Mis evaluaciones</MyLink>
      </MyLinkGroup>
      <MyLinkGroup title="Publicar">
        <MyLink>Vender producto</MyLink>
        <MyLink>Vender servcio</MyLink>
        <MyLink>Publicar tutoría</MyLink>
        <MyLink>Vender práctica</MyLink>
      </MyLinkGroup>
      <MyLink>Mercado</MyLink>
      <MyLink>Tutorías</MyLink>
      <MyLink>Ofertas de empleo</MyLink>
    </View>
  );
};

export default MyDrawer;
