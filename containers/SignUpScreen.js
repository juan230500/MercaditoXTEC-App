import React, { useState } from "react";
import { StyleSheet, Text, View, Alert, ScrollView } from "react-native";
import { connect } from "react-redux";

import MyLink from "../components/UI/MyLink";
import MyLayout from "../components/MyLayout";
import HelpModal from "../components/HelpModal";
import GenericForm from "../components/GenericForm";
import { BASE_URL } from "../constants";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 32,
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
    try {
      let response = await fetch(BASE_URL + "/signup", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      let json = await response.json();
      console.log("[NETWORK]", json);
      if (json.auth) {
        props.setLogged(true, json.auth);
        props.navigation.navigate("Market");
        console.log("[NETWORK]", "AUTHORIZED");
      }
    } catch (error) {
      console.error(error);
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
        </ScrollView>

        <MyLink
          onPress={() => {
            props.navigation.navigate("LogIn");
          }}
        >
          Ya tengo una cuenta
        </MyLink>
      </View>
    </MyLayout>
  );
};

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    setLogged: (logged, token) =>
      dispatch({ type: "SET_LOGGED", logged: logged, token: token }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUpScreen);
