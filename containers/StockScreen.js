import React, { useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

import MyLayout from "../components/MyLayout";
import MyTextInput from "../components/UI/MyTextInput";
import GenericForm from "../components/GenericForm";
import GenericItem from "../components/GenericItem";
import MyButton from "../components/UI/MyButton";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff"
  },
});

const POINTS = [
  {
    qty: "puntos acumulados",
  }];
  

const ITEMS = [
  {
    name: "practica 1",
  },
  {
    name: "tutoria 1",
  },
  {
    name: "producto 1",
  },
  {
    name: "tutoria 2",
  },
  {
    name: "producto 2",
  },
  {
    name: "practica 2",
  },
];

const StockScreen = ({ navigation }) => {
  const [data, setData] = useState({
    order: {
      display: "Mostrar",
      options: [
        { label: "Completados", value: "complete" },
        { label: "Pendientes", value: "pending" },
        { label: "Publicaciones", value: "posts" },
      ],
    },
    search: {
      display: "Buscar por nombre",
      value: "",
    },
  });

  const [filter, setFilter] = useState(false);

  return (
    <MyLayout title="Mi tienda" drawer>
      <ScrollView>
        <View style={styles.container}>
          {filter ? (
            <GenericForm
              onComplete={(r) => {
                console.log(r);
                setFilter(false);
              }}
              formData={data}
              setFormData={setData}
            ></GenericForm>
          ) : (
            <MyButton
              title="Filtrar"
              onPress={() => setFilter(true)}
            ></MyButton>
          )}
          {ITEMS.map((el) => (
            <GenericItem
              key={el.name}
              label={el.name}
              value=""
              buttons={[
                { title: "detalles", onPress: () => console.log("detail") },
                { title: "eliminar", onPress: () => console.log("delete") },
                { title: "editar", onPress: () => console.log("edit") }
              ]}
            ></GenericItem>
          ))}
        </View>
        {POINTS.map((info) => (
            <GenericItem
              key={info.qty}
              label={info.qty}
              value=""
            ></GenericItem>
          ))}
      </ScrollView>
    </MyLayout>
  );
};

export default StockScreen;
