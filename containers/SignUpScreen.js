import React from "react";
import { StyleSheet, Text, View, Alert } from "react-native";

import MyTextInput from "../components/MyTextInput";
import MyButton from "../components/MyButton";
import MyLink from "../components/MyLink";
import MyLayout from "../components/MyLayout";
import { useState } from "react";
import { ScrollView } from "react-native-gesture-handler";

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    height: "90%",
  },
  inputContainer: {
    alignItems: "center",
    width: "80%",
  },
});

const SignUpScreen = ({ navigation }) => {
  const [formData, setFormData] = useState({
    name: {
      display: "Nombre completo",
      value: "",
      required: true,
      alert: false,
    },
    phone: { display: "Teléfono", value: "", required: true, alert: false },
    address: { display: "Dirección", value: "", required: true, alert: false },
    email: { display: "Correo XTEC", value: "", required: true, alert: false },
    password: {
      display: "Contraseña XTEC",
      value: "",
      required: true,
      alert: false,
    },
  });

  const verifyData = () => {
    const results = {};
    const incompleteFields = [];
    for (let key in formData) {
      if (formData[key].required && formData[key].value === "") {
        incompleteFields.push(key);
      }
      results[key] = formData[key].value;
    }
    console.log(results);
    if (incompleteFields.length > 0) {
      activeAlerts(incompleteFields);
    } else {
      resetData();
      navigation.navigate("Profile");
    }
  };

  const resetData = () => {
    const newFormData = { ...formData };
    for (let key in newFormData) {
      const newFormElement = { ...newFormData[key] };
      newFormElement.alert = false;
      newFormElement.value = "";
      newFormData[key] = newFormElement;
    }
    setFormData(newFormData);
  };

  const inputChangeHandler = (value, key) => {
    const newFormData = { ...formData };
    const newFormElement = { ...newFormData[key] };
    newFormElement.value = value;
    newFormData[key] = newFormElement;
    setFormData(newFormData);
  };

  const activeAlerts = (keys) => {
    const newFormData = { ...formData };
    for (let key of keys) {
      const newFormElement = { ...newFormData[key] };
      newFormElement.alert = true;
      newFormData[key] = newFormElement;
    }
    Alert.alert("¡Ups!", `Hay ${keys.length} campos obligatorios sin llenar`);
    setFormData(newFormData);
  };

  const inputs = Object.keys(formData).map((el) => (
    <MyTextInput
      key={el}
      label={formData[el].display}
      value={formData[el].value}
      onChange={(text) => inputChangeHandler(text, el)}
      password={el === "password"}
      required={formData[el].alert}
    ></MyTextInput>
  ));

  return (
    <MyLayout title="Registro">
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.inputContainer}>
            {inputs}
            <MyButton title="Registrarse" onPress={verifyData}></MyButton>
          </View>

          <MyLink
            onPress={() => {
              navigation.navigate("LogIn");
            }}
          >
            Ya tengo una cuenta
          </MyLink>
        </View>
      </ScrollView>
    </MyLayout>
  );
};

export default SignUpScreen;
