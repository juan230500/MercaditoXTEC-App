import React, { useState } from "react";
import { StyleSheet, Text, View, Alert, ScrollView } from "react-native";
import { connect } from "react-redux";

import MyLink from "../components/UI/MyLink";
import MyLayout from "../components/MyLayout";
import GenericForm from "../components/GenericForm";
import { request } from "../store/utils";

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
    await request("/signup", "POST", user);
    props.navigation.navigate("Profile");
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
