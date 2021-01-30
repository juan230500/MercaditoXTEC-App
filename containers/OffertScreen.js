import React from "react";
import { StyleSheet, Text, View, Alert } from "react-native";

import { PRODUCT_TYPES } from "../store/constants";
import MyLayout from "../components/MyLayout";
import GenericForm from "../components/GenericForm";
import { useState } from "react";
import { ScrollView } from "react-native-gesture-handler";
import * as utils from "../store/utils";
import MyTextInput from "../components/UI/MyTextInput";
import MyButton from "../components/UI/MyButton";
import * as DocumentPicker from "expo-document-picker";

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
  const [file, setFile] = useState();
  const [file2, setFile2] = useState();

  const postProduct = async (product) => {
    console.log("[OFFERT]", product);
    await utils.request("/" + type, "POST", product);
    props.navigation.navigate("Market");
    Alert.alert("Alerta", "Publicación existosa");
  };

  const postPractice = async (practice) => {
    let json = await utils.upload(
      "/practice",
      file,
      "application/pdf",
      practice
    );
    console.log("[FILE UPLOAD 1]", json);
    const id = json.id || "";
    json = await utils.upload("/practice/" + id, file2, "application/pdf");
    console.log("[FILE UPLOAD 2]", json);
  };

  const selectType = (type) => {
    const newProductTypes = { ...PRODUCT_TYPES };
    if (type === "product") {
      newProductTypes.product.category.options = utils.getCategories();
      newProductTypes.product.category.value = utils.getCategories()[0];
    }
    setFormData(newProductTypes[type]);
    setType(type);
  };

  const loadDocument = async () => {
    const response = await DocumentPicker.getDocumentAsync({
      type: "application/pdf",
    });
    console.log("[FILE UPLOAD 1]", response);
    setFile(response);
  };

  const loadDocument2 = async () => {
    const response = await DocumentPicker.getDocumentAsync({
      type: "application/pdf",
    });
    console.log("[FILE UPLOAD 2]", response);
    setFile2(response);
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
          {type === "practice" && [
            <MyButton
              key="1"
              title="Subir archivo de práctica (PDF)"
              onPress={loadDocument}
            ></MyButton>,
            <MyButton
              key="2"
              title="Subir archivo de solución (PDF)"
              onPress={loadDocument2}
            ></MyButton>,
          ]}
          {type !== "" ? (
            <GenericForm
              onComplete={(r) =>
                Alert.alert("Alerta", "¿Está seguro de publicar esto?", [
                  { text: "Cancelar", style: "cancel" },
                  {
                    text: "Confirmar",
                    onPress: () =>
                      type === "practice" ? postPractice(r) : postProduct(r),
                  },
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
