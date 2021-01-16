import React from "react";
import { StyleSheet, Text, View, Alert } from "react-native";

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

const OffertServiceScreen = ({ navigation }) => {
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

  return (
    <MyLayout title="Publicar servicio">
      <View style={styles.container}>
        <ScrollView>
          <GenericForm
            onComplete={(r) => console.log(r)}
            formData={formData}
            setFormData={setFormData}
          ></GenericForm>
        </ScrollView>
      </View>
    </MyLayout>
  );
};

export default OffertServiceScreen;
