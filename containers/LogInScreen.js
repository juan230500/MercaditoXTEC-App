import React, { useState } from "react";
import { StyleSheet, Text, View, Alert, ScrollView } from "react-native";

import MyTextInput from "../components/UI/MyTextInput";
import MyButton from "../components/UI/MyButton";
import MyLink from "../components/UI/MyLink";
import MyLayout from "../components/MyLayout";
import GenericForm from "../components/GenericForm";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 32,
  },
});

const LogInScreen = ({ navigation }) => {
  const [formData, setFormData] = useState({
    email: { display: "Correo XTEC", value: "", required: true },
    password: { display: "Contraseña XTEC", value: "", required: true },
  });

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
      <View style={styles.container}>
        <ScrollView>
          <GenericForm
            actions={[
              {
                title: "Cancelar",
                onPress: () => console.log("###"),
              },
            ]}
            onComplete={(r) => console.log(r)}
            formData={formData}
            setFormData={setFormData}
          ></GenericForm>
        </ScrollView>

        <MyLink
          onPress={() => {
            navigation.navigate("SignUp");
          }}
        >
          Ya tengo una cuenta
        </MyLink>
      </View>
    </MyLayout>
  );
};

export default LogInScreen;
