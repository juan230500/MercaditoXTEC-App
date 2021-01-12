import React from "react";
import { StyleSheet, Text, View } from "react-native";

import MyTextInput from "../components/MyTextInput";
import MyButton from "../components/MyButton";
import MyLink from "../components/MyLink";
import { useState } from "react";

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "space-between",
    height: "90%",
  },
  inputContainer: {
    alignItems: "center",
    width: "80%",
  },
});

const LogInScreen = ({ navigation }) => {
  const [formData, setFormData] = useState({
    email: { display: "Correo XTEC", value: "" },
    password: { display: "Contraseña XTEC", value: "" },
  });

  const verifyData = () => {
    const results = {};
    for (let key in formData) {
      results[key] = formData[key].value;
    }
    console.log(results);
    //navigation.navigate("Profile");
  };

  const inputChangeHandler = (value, key) => {
    const newFormData = { ...formData };
    const newFormElement = { ...newFormData[key] };
    newFormElement.value = value;
    newFormData[key] = newFormElement;
    setFormData(newFormData);
  };

  const inputs = Object.keys(formData).map((el) => (
    <MyTextInput
      key={el}
      label={formData[el].display}
      value={formData[el].value}
      onChange={(text) => inputChangeHandler(text, el)}
      password={el === "password"}
    ></MyTextInput>
  ));

  return (
    <View style={{ flex: 1, justifyContent: "center" }}>
      <View style={styles.container}>
        <Text style={{ fontSize: 32, textAlign: "center" }}>Ingreso</Text>

        <View style={styles.inputContainer}>
          {inputs}
          <MyButton title="Ingresar" onPress={verifyData}></MyButton>
        </View>

        <MyLink
          onPress={() => {
            navigation.navigate("SignUp");
          }}
        >
          No tengo una cuenta
        </MyLink>
      </View>
    </View>
  );
};

export default LogInScreen;
