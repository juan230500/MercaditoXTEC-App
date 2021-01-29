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
  client: "Negociando con Juan",
  status: "Pendiente de entregar",
};

const StockDetailScreen = (props) => {
  const [detail, setDetail] = useState(DETAIL);
  useEffect(() => {
    getDetail();
  }, []);

  const getDetail = async () => {
    await utils.request("/status/" + props.route.params.productId, "GET");
  };

  const items = Object.keys(detail).map((el) => (
    <GenericItem key={el} label={el} value={DETAIL[el]}></GenericItem>
  ));

  let buttons = null;
  switch (detail.status) {
    case "Pendiente de entregar":
      buttons = <MyButton title="Confirmar entrega"></MyButton>;
      break;
    default:
      break;
  }

  return (
    <MyLayout title="Estado" back>
      <ScrollView>
        <View style={styles.container}>
          {items}
          {buttons}
          <MyButton title="Chat"></MyButton>
        </View>
      </ScrollView>
    </MyLayout>
  );
};

export default StockDetailScreen;
