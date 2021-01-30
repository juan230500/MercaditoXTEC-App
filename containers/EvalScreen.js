import React, { useState } from "react";
import { Alert, ScrollView, StyleSheet, Text, View } from "react-native";

import MyLayout from "../components/MyLayout";
import SearchBar from "../components/SearchBar";
import CheckList from "../components/CheckList";
import GenericForm from "../components/GenericForm";
import { useEffect } from "react";
import * as utils from "../store/utils";
import MyButton from "../components/UI/MyButton";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});

const EvalScreen = (props) => {
  const [formData, setFormData] = useState({
    eval: {
      display: "Evaluación 1-5",
      value: "",
      required: true,
      number: true,
    },
    comments: { display: "Comentarios", value: "", required: true },
  });

  const putEval = async (value) => {
    let json = await utils.request(
      "/" + props.route.params.type + "/" + props.route.params.itemId,
      "PUT",
      { eval: value }
    );
    console.log("[PUT EVAL]", json);
    props.navigation.navigate("Purchases");
    Alert.alert("", "Muchas gracias!");
  };

  return (
    <MyLayout title="Evaluación" drawer>
      <View style={styles.container}>
        <GenericForm
          formData={formData}
          setFormData={setFormData}
          onComplete={(r) => putEval(r.eval)}
        ></GenericForm>
      </View>
    </MyLayout>
  );
};

export default EvalScreen;
