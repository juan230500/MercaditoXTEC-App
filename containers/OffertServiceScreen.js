import React from "react";
import { StyleSheet, Text, View, Alert } from "react-native";
import { connect } from "react-redux";

import { BASE_URL } from "../constants";
import MyLayout from "../components/MyLayout";
import GenericForm from "../components/GenericForm";
import { useState } from "react";
import { ScrollView } from "react-native-gesture-handler";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 32,
  },
});

const OffertServiceScreen = (props) => {
  const [formData, setFormData] = useState({
    name: { display: "Nombre", value: "", required: true },
    description: { display: "Descripción", value: "", required: true },
    price: { display: "Precio", value: "", required: true, number: true },
    deliveryInfo: {
      display: "Información para entregar",
      value: "",
      required: true,
    },
    paymentInfo: {
      display: "Información para recibir pago",
      value: "",
      required: true,
    },
  });

  const postService = async (service) => {
    try {
      let response = await fetch(BASE_URL + "/service", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: props.token,
        },
        body: JSON.stringify(service),
      });
      let json = await response.json();
      console.log("[NETWORK]", json);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <MyLayout title="Publicar servicio" drawer>
      <View style={styles.container}>
        <ScrollView>
          <GenericForm
            onComplete={(r) =>
              Alert.alert("Alerta", "Connformar la publicación", [
                { text: "Cancelar", style: "cancel" },
                { text: "Confirmar", onPress: () => postService(r) },
              ])
            }
            formData={formData}
            setFormData={setFormData}
          ></GenericForm>
        </ScrollView>
      </View>
    </MyLayout>
  );
};

const mapStateToProps = (state) => {
  return { token: state.token };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OffertServiceScreen);
