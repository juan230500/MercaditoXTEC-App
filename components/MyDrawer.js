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
        <MyLink
          onPress={() => {
            props.navigation.navigate("LogIn");
          }}
          logout
        >
          Cerrar sesión
        </MyLink>
        <MyLinkGroup title="Mi perfil">
          <MyLink onPress={() => props.navigation.navigate("Profile")}>
            Configuración
          </MyLink>
          <MyLink onPress={() => props.navigation.navigate("Dashboard")}>
            Estadísticas
          </MyLink>
          <MyLink onPress={() => props.navigation.navigate("Stock")}>
            Mi tienda
          </MyLink>
          <MyLink onPress={() => props.navigation.navigate("StockDetail")}>
            Mi tienda detalles (TEMPORAL)
          </MyLink>
          <MyLink>Mis compras</MyLink>
          <MyLink>Mis evaluaciones</MyLink>
        </MyLinkGroup>
        <MyLinkGroup title="Publicar">
          <MyLink onPress={() => props.navigation.navigate("OffertProduct")}>
            Vender producto
          </MyLink>
          <MyLink onPress={() => props.navigation.navigate("OffertService")}>
            Vender servicio
          </MyLink>
          <MyLink>Publicar tutoría</MyLink>
          <MyLink>Vender práctica</MyLink>
        </MyLinkGroup>
        <MyLink onPress={() => props.navigation.navigate("Market")}>
          Mercado
        </MyLink>
        <MyLink onPress={() => props.navigation.navigate("Tutorials")}>
          Tutorías
        </MyLink>
        <MyLink>Ofertas de empleo</MyLink>
      </View>
    </ScrollView>
  );
};

export default MyDrawer;
