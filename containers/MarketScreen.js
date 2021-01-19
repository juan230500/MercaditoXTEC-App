import React, { useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { connect } from "react-redux";

import { BASE_URL } from "../constants";
import MyLayout from "../components/MyLayout";
import MyTextInput from "../components/UI/MyTextInput";
import GenericForm from "../components/GenericForm";
import GenericItem from "../components/GenericItem";
import MyButton from "../components/UI/MyButton";
import { useEffect } from "react";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});

const MarketScreen = (props) => {
  const [loading, setLoading] = useState(false);
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
        { label: "Ambos", value: "both" },
      ],
    },
    search: {
      display: "Buscar por nombre",
      value: "",
    },
  });

  const [filter, setFilter] = useState(false);

  const [loadedItems, setLoadedItems] = useState([
    {
      id: "123",
      name: "shampoo",
      price: 123,
      type: "product",
      eval: 3,
    },
    {
      id: "1234",
      name: "shampoo2",
      price: 321,
      type: "service",
      eval: 4.5,
    },
    {
      id: "12345",
      name: "shampoo2",
      price: 1,
      type: "service",
      eval: 5,
    },
  ]);

  const [filteredItems, setFilteredItems] = useState([]);

  useEffect(() => {
    getItems();
  }, []);

  const applyFilters = () => {
    let newItems = [...loadedItems];
    newItems = newItems.filter((el) =>
      el.name.toLowerCase().includes(data.search.value.toLowerCase())
    );
    if (data.product.value !== "both") {
      newItems = newItems.filter((el) => el.type === data.product.value);
    }
    switch (data.order.value) {
      case "price":
        newItems = newItems.sort((a, b) => a.price - b.price);
        break;
      case "eval":
        newItems = newItems.sort((a, b) => b.eval - a.eval);
        break;

      default:
        break;
    }

    setFilteredItems(newItems);
  };

  const getItems = async () => {
    setLoading(true);
    try {
      let response = await fetch(BASE_URL + "/market", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: props.token,
        },
      });
      let json = await response.json();
      console.log("[NETWORK]", json);
      setLoadedItems(json);
      setFilteredItems(json);
    } catch (error) {
      console.error(error);
    }

    setLoading(false);
  };

  const items = filteredItems.map((el) => (
    <GenericItem
      key={el.id}
      label={el.name}
      value={`${el.eval}★ ${el.price}₡`}
      buttons={[
        {
          title: "detalles",
          onPress: () =>
            props.navigation.navigate("ProductDetail", {
              productId: el.id,
            }),
        },
        { title: "chat", onPress: () => console.log("chat") },
      ]}
    ></GenericItem>
  ));

  return (
    <MyLayout title="Mercado" drawer loading={loading}>
      <ScrollView>
        <View style={styles.container}>
          {filter ? (
            <GenericForm
              onComplete={(r) => {
                applyFilters();
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
          {items}
        </View>
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

export default connect(mapStateToProps, mapDispatchToProps)(MarketScreen);
