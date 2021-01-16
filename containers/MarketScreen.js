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
  },
});

const ITEMS = [
  {
    name: "producto1",
  },
  {
    name: "producto2",
  },
  {
    name: "producto3",
  },
  {
    name: "producto4",
  },
  {
    name: "producto5",
  },
  {
    name: "producto6",
  },
];

const MarketScreen = ({ navigation }) => {
  const [data, setData] = useState({
    order: {
      display: "Ordernar por...",
      value: "price",
      options: [
        { label: "Precio", value: "price" },
        { label: "Calificación", value: "eval" },
      ],
    },
    product: {
      display: "Producto/Servicio",
      value: "product",
      options: [
        { label: "Producto", value: "product" },
        { label: "Servicio", value: "service" },
      ],
    },
    search: {
      display: "Buscar por nombre",
      value: "",
    },
  });

  const [filter, setFilter] = useState(false);

  return (
    <MyLayout title="Mercado" drawer>
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
              value="★"
              buttons={[
                { title: "detalles", onPress: () => console.log("detalles") },
                { title: "chat", onPress: () => console.log("chat") },
              ]}
            ></GenericItem>
          ))}
        </View>
      </ScrollView>
    </MyLayout>
  );
};

export default MarketScreen;
