import React, { useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

import MyLayout from "../components/MyLayout";
import MyTextInput from "../components/UI/MyTextInput";
import GenericForm from "../components/GenericForm";
import GenericItem from "../components/GenericItem";
import MyButton from "../components/UI/MyButton";
import MyProduct from "../components/MyProduct";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff"
  },
});

const CX = [
  {
    name: "Pedrito",
      
  }];
  

const ITEMS = [
  {
    name: "practica 1",
    status: "entregado"
  }
];

const StockDetailScreen = ({ navigation }) => {
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
    <MyLayout title="Producto 1" drawer>
      <View style={styles.container}>
        <MyProduct></MyProduct>
      </View>
    </MyLayout>
  );

};

export default StockDetailScreen;
