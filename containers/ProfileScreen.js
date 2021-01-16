import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import MyLayout from "../components/MyLayout";
import MyButton from "../components/UI/MyButton";
import GenericItem from "../components/GenericItem";
import GenericForm from "../components/GenericForm";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});

const ProfileScreen = ({ navigation }) => {
  const [data, setData] = useState({
    name: {
      display: "Nombre completo",
      value: "test",
      required: true,
    },
    phone: { display: "Teléfono", value: "test", required: true },
    address: { display: "Dirección", value: "test", required: true },
    email: { display: "Correo XTEC", value: "test", required: true },
    password: {
      display: "Contraseña XTEC",
      value: "test",
      required: true,
    },
  });

  const [isEditing, setIsEditing] = useState(false);

  let content = null;
  if (isEditing) {
    content = (
      <GenericForm
        onComplete={(r) => {
          console.log(r);
          setIsEditing(false);
        }}
        formData={data}
        setFormData={setData}
      ></GenericForm>
    );
  } else {
    const items = Object.keys(data).map((key) => (
      <GenericItem
        key={key}
        label={data[key].display}
        value={data[key].value}
      ></GenericItem>
    ));

    content = [
      ...items,
      <MyButton
        key="1"
        onPress={() => setIsEditing(true)}
        title="Editar"
      ></MyButton>,
    ];
  }

  return (
    <MyLayout title="Configuración" drawer>
      <View style={styles.container}>{content}</View>
    </MyLayout>
  );
};

export default ProfileScreen;
