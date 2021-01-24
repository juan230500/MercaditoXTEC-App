import React, { useState, useEffect } from "react";
import { ScrollView, StyleSheet, View } from "react-native";

import MyLayout from "../components/MyLayout";
import MyButton from "../components/UI/MyButton";
import GenericItem from "../components/GenericItem";
import GenericForm from "../components/GenericForm";
import { request } from "../store/utils";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});

const ProfileScreen = (props) => {
  const [isEditing, setIsEditing] = useState(false);
  const [data, setData] = useState({
    name: { display: "Nombre completo", value: "1", required: true },
    phone: { display: "Teléfono", value: "2", required: true },
    address: { display: "Dirección", value: "3", required: true },
    email: { display: "Correo XTEC", value: "4", required: true },
    password: { display: "Contraseña XTEC", value: "5", required: true },
  });

  useEffect(() => {
    getUser();
  }, []);

  const getUser = async () => {
    await request("/student", "GET");
  };

  const putUser = async (user) => {
    await request("/student", "PUT", user);
  };

  let content = isEditing ? (
    <GenericForm
      onComplete={(result) => {
        putUser(result);
        setIsEditing(false);
      }}
      formData={data}
      setFormData={setData}
    ></GenericForm>
  ) : (
    Object.keys(data).map((key) => (
      <GenericItem
        key={key}
        label={data[key].display}
        value={data[key].value}
      ></GenericItem>
    ))
  );

  return (
    <MyLayout title="Configuración" drawer>
      <View style={styles.container}>
        <ScrollView>
          {content}
          {!isEditing && (
            <MyButton
              key="1"
              onPress={() => setIsEditing(true)}
              title="Editar"
            ></MyButton>
          )}
        </ScrollView>
      </View>
    </MyLayout>
  );
};

export default ProfileScreen;
