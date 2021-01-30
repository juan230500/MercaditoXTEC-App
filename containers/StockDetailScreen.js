import React from "react";
import { Linking, ScrollView, StyleSheet, Text, View } from "react-native";

import MyLayout from "../components/MyLayout";
import MyButton from "../components/UI/MyButton";
import GenericItem from "../components/GenericItem";
import { useState } from "react";
import { useEffect } from "react";
import * as utils from "../store/utils";
import * as DocumentPicker from "expo-document-picker";
import { BASE_URL } from "../store/constants";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 8,
  },
});

const StockDetailScreen = (props) => {
  const [detail, setDetail] = useState({});
  useEffect(() => {
    getDetail();
  }, [props.route.params.productId]);

  const getDetail = async () => {
    let json = await utils.request(
      "/order/" + props.route.params.productId,
      "GET"
    );
    console.log("[STOCK DETAIL]", json);
    json && setDetail(json);
  };

  const putStatus = async (status) => {
    let json = await utils.request(
      "/order/" + props.route.params.productId,
      "PUT",
      { status: status }
    );
    console.log("[PUT DETAIL]", json);
  };

  const items = Object.keys(detail).map((el) => (
    <GenericItem key={el} label={el} value={detail[el]}></GenericItem>
  ));

  let buttons = null;
  switch (detail.status) {
    case "Pendiente pago":
      buttons = props.route.params.client ? (
        <MyButton
          title="Confirmar pago"
          onPress={() => putStatus("Pendiente entrega")}
        ></MyButton>
      ) : null;
      break;
    case "Pendiente entrega":
      buttons = props.route.params.client ? null : (
        <MyButton
          title="Confirmar entregado"
          onPress={() => putStatus("Pendiente recibido")}
        ></MyButton>
      );
      break;
    case "Pendiente recibido":
      buttons = props.route.params.client ? (
        <MyButton
          title="Confirmar recibido"
          onPress={() => {
            putStatus("Listo");
            props.navigation.navigate("Eval", {
              itemId: detail.itemId,
              type: detail.type,
            });
          }}
        ></MyButton>
      ) : null;
      break;
    default:
      break;
  }

  if (detail.type === "practice" && detail.status === "Pendiente recibido") {
    buttons = (
      <MyButton
        title="Descargar práctica"
        onPress={async () => {
          console.log("[PRACTICA]");
          Linking.openURL(BASE_URL + "/practice/answer/" + detail.itemId);
        }}
      ></MyButton>
    );
  }

  return (
    <MyLayout title="Estado" back>
      <ScrollView>
        <View style={styles.container}>
          <MyButton title="Actualizar" onPress={() => getDetail()}></MyButton>
          {items}
          {buttons}
        </View>
      </ScrollView>
    </MyLayout>
  );
};

export default StockDetailScreen;
