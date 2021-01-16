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

const MyDrawer = ({ navigation }) => {
  return (
    <ScrollView>
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
          <MyLink onPress={() => navigation.navigate("Stock")}>
            Mi tienda
          </MyLink>
          <MyLink onPress={() => navigation.navigate("StockDetail")}>
            Mi tienda detalles (TEMPORAL)
          </MyLink>
          <MyLink>Mis compras</MyLink>
          <MyLink>Mis evaluaciones</MyLink>
        </MyLinkGroup>
        <MyLinkGroup title="Publicar">
          <MyLink onPress={() => navigation.navigate("OffertProduct")}>
            Vender producto
          </MyLink>
          <MyLink onPress={() => navigation.navigate("OffertService")}>
            Vender servicio
          </MyLink>
          <MyLink>Publicar tutoría</MyLink>
          <MyLink>Vender práctica</MyLink>
        </MyLinkGroup>
        <MyLink onPress={() => navigation.navigate("Market")}>Mercado</MyLink>
        <MyLink>Tutorías</MyLink>
        <MyLink>Ofertas de empleo</MyLink>
      </View>
    </ScrollView>
  );
};

export default MyDrawer;
