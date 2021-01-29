import React, { useState } from "react";
import { StyleSheet, Text, View, Alert, ScrollView } from "react-native";

import MyLink from "../components/UI/MyLink";
import MyLayout from "../components/MyLayout";
import GenericForm from "../components/GenericForm";
import * as utils from "../store/utils";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});

const SignUpScreen = (props) => {
  const [formData, setFormData] = useState({
    name: { display: "Nombre Completo", value: "", required: true },
    phone: { display: "Teléfono", value: "", required: true },
    address: { display: "Dirección", value: "", required: true },
    email: { display: "Correo XTEC", value: "", required: true },
    password: { display: "Contraseña XTEC", value: "", required: true },
  });

  const postUser = async (user) => {
    const json = await utils.request("/users/signup", "POST", user);
    console.log("[SIGNUP]", json);
    if (json.token) {
      await utils.saveToken(json.token);
      props.navigation.navigate("Market");
    } else {
      Alert.alert("¡Ups!", "Ese correo ya se encuetra registrado");
    }
  };

  return (
    <MyLayout title="Registro">
      <View style={styles.container}>
        <ScrollView>
          <GenericForm
            onComplete={(result) => postUser(result)}
            formData={formData}
            setFormData={setFormData}
          ></GenericForm>
          <MyLink to="LogIn">Ya tengo una cuenta</MyLink>
        </ScrollView>
      </View>
    </MyLayout>
  );
};

export default SignUpScreen;
