import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

import MyLayout from "../components/MyLayout";
import MyButton from "../components/UI/MyButton";
import GenericItem from "../components/GenericItem";
import { useState } from "react";
import { useEffect } from "react";
import * as utils from "../store/utils";
import * as DocumentPicker from "expo-document-picker";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 8,
  },
});
const DETAIL = {
  name: "qwe",
  description: "Dasds",
  price: "dsadas",
  category: "Dasdsa",
  deliveryInfo:
    "dasdaddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd dasdaddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd",
  paymentInfo:
    "dasdaddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd dasdaddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd dasdaddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd",
  eval: "sdsad",
};

const DetailScreen = (props) => {
  const [detail, setDetail] = useState(DETAIL);
  useEffect(() => {
    getDetail();
  }, []);

  const getDetail = async () => {
    await utils.request("/product/" + props.route.params.productId, "GET");
  };

  const updaloadCV = async () => {
    const response = await DocumentPicker.getDocumentAsync();
    console.log("[FILE UPLOAD]", response);
  };

  const items = Object.keys(detail).map((el) => (
    <GenericItem key={el} label={el} value={DETAIL[el]}></GenericItem>
  ));

  let buttons = null;
  switch (props.route.params.type) {
    case "practice":
      buttons = <MyButton title="Ya realicé el pago de la práctica"></MyButton>;
      break;
    case "tutorial":
      buttons = <MyButton title="Chat con el tutor"></MyButton>;
      break;
    case "job":
      buttons = (
        <MyButton title="Subir curriculum" onPress={updaloadCV}></MyButton>
      );
      break;
    case "product":
    case "service":
      buttons = <MyButton title="Chat con el vendedor"></MyButton>;
      break;
    default:
      break;
  }

  return (
    <MyLayout title="Detalle" back>
      <ScrollView>
        <View style={styles.container}>
          {items}
          {buttons}
        </View>
      </ScrollView>
    </MyLayout>
  );
};

export default DetailScreen;
