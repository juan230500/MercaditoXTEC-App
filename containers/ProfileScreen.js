import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import MyLayout from "../components/MyLayout";
import MyButton from "../components/MyButton";
import ProfileItem from "../components/ProfileItem";
import { ScrollView } from "react-native-gesture-handler";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  buttonContainer: {},
});

const ProfileScreen = ({ navigation }) => {
  const [data, setData] = useState({
    name: {
      display: "Nombre completo",
      value: "test",
    },
    phone: { display: "Teléfono", value: "test" },
    address: { display: "Dirección", value: "test" },
    email: { display: "Correo XTEC", value: "test" },
    password: {
      display: "Contraseña XTEC",
      value: "test",
    },
  });

  const [edit, setEdit] = useState(false);

  const inputChangeHandler = (value, key) => {
    const newData = { ...data };
    const newElement = { ...newData[key] };
    newElement.value = value;
    newData[key] = newElement;
    setData(newData);
  };

  const verifyData = () => {
    const results = {};
    for (let key in data) {
      results[key] = data[key].value;
    }
    console.log(results);
  };

  const items = Object.keys(data).map((key) => (
    <ProfileItem
      key={key}
      label={data[key].display}
      value={data[key].value}
      onChange={(text) => inputChangeHandler(text, key)}
      edit={edit}
    ></ProfileItem>
  ));

  return (
    <MyLayout title="Configuración" onPressDrawer={navigation.openDrawer}>
      <ScrollView>
        <View style={styles.container}>
          {items}
          <View style={styles.buttonContainer}>
            {edit ? (
              [
                <MyButton
                  key="1"
                  title="Cancelar"
                  onPress={() => {
                    console.log("dasdsa");
                    setEdit(false);
                  }}
                ></MyButton>,
                <MyButton
                  key="2"
                  title="Confirmar"
                  onPress={() => {
                    verifyData();
                    setEdit(false);
                  }}
                ></MyButton>,
              ]
            ) : (
              <MyButton onPress={() => setEdit(true)} title="Editar"></MyButton>
            )}
          </View>
        </View>
      </ScrollView>
    </MyLayout>
  );
};

export default ProfileScreen;
