import React, { useState } from "react";
import { StyleSheet, View, ScrollView, Alert } from "react-native";

import MyLink from "../components/UI/MyLink";
import MyLayout from "../components/MyLayout";
import GenericForm from "../components/GenericForm";
import * as utils from "../store/utils";
import { useEffect } from "react";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});

const LogInScreen = (props) => {
  const [formData, setFormData] = useState({
    email: { display: "Correo XTEC", value: "", required: true },
    password: { display: "Contraseña XTEC", value: "", required: true },
  });

  useEffect(() => {
    const fetch = async () => {
      const token = await utils.fetchToken();
      console.log("[LOGIN FETCH]", token);
      token && props.navigation.navigate("Market");
    };
    fetch();
  }, []);

  const postUser = async (user) => {
    const json = await utils.request("/users/login", "POST", user);
    console.log("[LOGIN]", json, json.token);
    if (json.token) {
      await utils.saveToken(json.token);
      props.navigation.navigate("Market");
    } else {
      Alert.alert("¡Ups!", "La contresaña o el correo son incorrectos");
    }
  };

  return (
    <MyLayout title="Ingreso">
      <View style={styles.container}>
        <ScrollView>
          <GenericForm
            onComplete={(result) => postUser(result)}
            formData={formData}
            setFormData={setFormData}
          ></GenericForm>
          <MyLink to="SignUp">No tengo una cuenta</MyLink>
        </ScrollView>
      </View>
    </MyLayout>
  );
};

export default LogInScreen;
