import React from "react";
import { StyleSheet, Text, View } from "react-native";

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
    name: { display: "Nombre completo", value: "" },
    phone: { display: "Teléfono", value: "" },
    address: { display: "Dirección", value: "" },
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
