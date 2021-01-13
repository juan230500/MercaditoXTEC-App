import React from "react";
import { StyleSheet, Text, View } from "react-native";

import MyLink from "./MyLink";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
});

const MyDrawer = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <MyLink onPress={() => navigation.navigate("LogIn")}>
        Cerrar sesión
      </MyLink>
      <MyLink onPress={() => navigation.navigate("Profile")}>Perfil</MyLink>
      <MyLink onPress={() => navigation.navigate("Dashboard")}>
        Estadísticas
      </MyLink>
    </View>
  );
};

export default MyDrawer;
