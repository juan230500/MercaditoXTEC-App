import React from "react";
import { StyleSheet, Text, View, Modal, TouchableOpacity } from "react-native";

import MyButton from "./UI/MyButton";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    width: "90%",
    height: "90%",
    backgroundColor: "white",
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontFamily: "Cabin",
    fontSize: 24,
  },
  text: {
    fontFamily: "Cabin",
    fontSize: 24,
  },
});

const HelpModal = (props) => {
  return (
    <Modal
      transparent
      animationType="slide"
      visible={props.visible}
      onRequestClose={() => {
        Alert.alert("Modal has been closed.");
      }}
    >
      <View style={styles.container}>
        <View style={styles.card}>
          <Text style={styles.title}>¡Bienvenido al MercaditoTEC!</Text>
          <Text style={styles.text}>
            En esta aplicación puedes acceder a 3 funcionalidades principales:
          </Text>
          <Text style={styles.text}>
            Compra y venta de productos, servicios y prácticas
          </Text>
          <Text style={styles.text}>Acceso a tutorías</Text>
          <Text style={styles.text}>Acceso a ofertas de trabajo</Text>
          <Text style={styles.text}>
            Con cada compra realizada deberás evaluar al vendedor y ganarás
            puntos que puedes canjear en la libraría usando el app.
          </Text>
          <MyButton title="Ok" onPress={props.onClose}></MyButton>
        </View>
      </View>
    </Modal>
  );
};

export default HelpModal;
