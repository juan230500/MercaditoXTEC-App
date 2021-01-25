import React from "react";
import { StyleSheet, Text, View, Alert } from "react-native";

import { PRODUCT_TYPES } from "../store/constants";
import MyLayout from "../components/MyLayout";
import GenericForm from "../components/GenericForm";
import { useState } from "react";
import { ScrollView } from "react-native-gesture-handler";
import * as utils from "../store/utils";
import MyTextInput from "../components/UI/MyTextInput";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});

const TYPE_OPTIONS = [
  { label: "", value: "" },
  { label: "Producto", value: "product" },
  { label: "Servicio", value: "service" },
  { label: "Práctica", value: "practice" },
  { label: "Tutoría", value: "tutorial" },
];

const OffertScreen = (props) => {
  const [type, setType] = useState("");
  const [formData, setFormData] = useState({});

  const postProduct = async (product) => {
    console.log("[PRODUCT]", product);
    await utils.request("/" + type, "POST", product);
    props.navigation.navigate("Market");
    Alert.alert("Alerta", "Publicación existosa");
  };

  const selectType = (type) => {
    setFormData(PRODUCT_TYPES[type]);
    setType(type);
  };

  return (
    <MyLayout title="Publicar" drawer>
      <View style={styles.container}>
        <ScrollView>
          <MyTextInput
            value={type}
            onChange={selectType}
            options={TYPE_OPTIONS}
            label="Tipo de publicación"
          ></MyTextInput>
          {type !== "" ? (
            <GenericForm
              onComplete={(r) =>
                Alert.alert("Alerta", "¿Está seguro de publicar esto?", [
                  { text: "Cancelar", style: "cancel" },
                  { text: "Confirmar", onPress: () => postProduct(r) },
                ])
              }
              formData={formData}
              setFormData={setFormData}
            ></GenericForm>
          ) : (
            <Text>Seleccione el tipo de publicación</Text>
          )}
        </ScrollView>
      </View>
    </MyLayout>
  );
};

export default OffertScreen;
