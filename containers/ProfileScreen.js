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
    email: { display: "Correo XTEC", value: "4", required: true, hide: true },
    password: {
      display: "Contraseña XTEC",
      value: "5",
      required: true,
      hide: true,
    },
  });

  useEffect(() => {
    getUser();
  }, []);

  const getUser = async () => {
    let json = await request("/users/me", "GET");
    console.log("[PROFILE GET]", json);
    const newData = { ...data };
    for (let key in data) {
      const newItem = { ...newData[key] };
      newItem.value = json[key];
      newData[key] = newItem;
    }
    setData(newData);
  };

  const putUser = async (user) => {
    const { email, password, ...newUser } = user;
    let json = await request("/users", "PUT", newUser);
    console.log("[PROFILE PUT]", json);
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
