import React, { useState, useEffect } from "react";
import {
  ActivityIndicator,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { connect } from "react-redux";

import { BASE_URL } from "../constants";
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

const ProfileScreen = (props) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({
    name: {
      display: "Nombre completo",
      value: "1",
      required: true,
    },
    phone: { display: "Teléfono", value: "2", required: true },
    address: { display: "Dirección", value: "3", required: true },
    email: { display: "Correo XTEC", value: "4", required: true },
    password: {
      display: "Contraseña XTEC",
      value: "5",
      required: true,
    },
  });

  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    getUser();
  }, []);

  const getUser = async () => {
    setLoading(true);
    try {
      let response = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: props.token,
        },
      });
      let json = await response.json();
      console.log("[NETWORK]", json);
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  };

  const putUser = async (user) => {
    setLoading(true);
    try {
      let response = await fetch(BASE_URL + "/student", {
        method: "PUT",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: props.token,
        },
        body: user,
      });
      let json = await response.json();
      console.log("[NETWORK]", json);
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  };

  let content = null;
  if (isEditing) {
    content = (
      <GenericForm
        onComplete={(result) => {
          putUser(result);
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
    <MyLayout title="Configuración" drawer loading={loading}>
      <ScrollView>
        <View style={styles.container}>{content}</View>
      </ScrollView>
    </MyLayout>
  );
};

const mapStateToProps = (state) => {
  return { token: state.token };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileScreen);
