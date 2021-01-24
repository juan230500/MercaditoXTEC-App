import React from "react";
import { StyleSheet, Text, View, Modal, TouchableOpacity } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";

import MyButton from "../components/UI/MyButton";
import { COLORS } from "../store/constants";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primary,
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    width: "90%",
    height: "90%",
    padding: 16,
    borderRadius: 16,
    backgroundColor: COLORS.white,
    elevation: 10,
  },
  title: {
    fontFamily: "Roboto",
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
  },
  text: {
    fontFamily: "Cabin",
    fontSize: 20,
    textAlign: "justify",
  },
});

const HelpScreen = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>¡Bienvenido al MercaditoTEC!</Text>
        <Text style={styles.text}>
          En esta aplicación puedes acceder a 3 funcionalidades principales:
        </Text>
        <Text style={styles.text}>
          • Compra y venta de productos, servicios y prácticas
        </Text>
        <Text style={styles.text}>• Acceso a tutorías</Text>
        <Text style={styles.text}>• Acceso a ofertas de trabajo</Text>
        <Text style={{ ...styles.text }}>
          IMPORTANTE: Con cada compra realizada deberás evaluar al vendedor y
          ganarás puntos que puedes canjear en la libraría usando el app.
        </Text>
        <MyButton
          title="Ok"
          onPress={() => props.navigation.goBack()}
        ></MyButton>
      </View>
    </View>
  );
};

export default HelpScreen;
