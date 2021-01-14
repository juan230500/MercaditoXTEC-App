import React from "react";
import { StyleSheet, Text, View, Alert } from "react-native";

import MyLink from "../components/UI/MyLink";
import MyLayout from "../components/MyLayout";
import GenericForm from "../components/GenericForm";
import { useState } from "react";
import { ScrollView } from "react-native-gesture-handler";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 32,
  },
});

const SignUpScreen = ({ navigation }) => {
  const [formData, setFormData] = useState({
    name: { display: "Nombre Completo", value: "", required: true },
    phone: { display: "Teléfono", value: "", required: true },
    address: { display: "Dirección", value: "", required: true },
    email: { display: "Correo XTEC", value: "", required: true },
    password: { display: "Contraseña XTEC", value: "", required: true },
  });

  return (
    <MyLayout title="Registro">
      <View style={styles.container}>
        <ScrollView>
          <GenericForm
            onComplete={(r) => console.log(r)}
            formData={formData}
            setFormData={setFormData}
          ></GenericForm>
        </ScrollView>

        <MyLink
          onPress={() => {
            navigation.navigate("LogIn");
          }}
        >
          Ya tengo una cuenta
        </MyLink>
      </View>
    </MyLayout>
  );
};

export default SignUpScreen;
