import React, { useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { connect } from "react-redux";

import { BASE_URL } from "../constants";
import MyLayout from "../components/MyLayout";
import SmallInput from "../components/UI/SmallInput";
import GenericItem from "../components/GenericItem";
import MyButton from "../components/UI/MyButton";
import { useEffect } from "react";
import { set } from "react-native-reanimated";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
});

const TutorialsScreen = (props) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({
    search: {
      display: "Buscar por nombre",
      value: "",
      icon: "search",
    },
    order: {
      display: "Ordernar por...",
      value: "alpha",
      icon: "sort",
      options: [
        { label: "Precio", value: "price" },
        { label: "Calificación", value: "eval" },
        { label: "Alfabético", value: "alpha" },
      ],
    },
    product: {
      display: "Tutoría/Práctica",
      value: "",
      icon: "shopping-bag",
      options: [
        { label: "Tutoría", value: "tutorial" },
        { label: "Práctica", value: "practice" },
        { label: "Ambos", value: "" },
      ],
    },
    category: {
      display: "Cursos",
      value: "",
      icon: "tag",
      options: props.courses,
    },
  });

  const [loadedItems, setLoadedItems] = useState([
    {
      id: "123",
      name: "abc",
      type: "practice",
      price: 123,
      eval: 3,
      category: "c1",
    },
    {
      id: "1234",
      name: "efg",
      type: "tutorial",
      eval: 4.5,
      category: "c2",
    },
    {
      id: "12345",
      name: "hij",
      type: "tutorial",
      eval: 5,
      category: "c1",
    },
  ]);

  const [filteredItems, setFilteredItems] = useState([]);

  useEffect(() => {
    setFilteredItems(loadedItems);
    getItems();
  }, []);

  const setFilter = (value, key) => {
    let newItems = [...loadedItems];
    let newFilters = { ...data };
    let newFilter = { ...newFilters[key] };
    newFilter.value = value;
    newFilters[key] = newFilter;
    setData(newFilters);
    switch (key) {
      case "order":
        switch (value) {
          case "price":
            newItems = newItems.sort((a, b) => a.price - b.price);
            break;
          case "eval":
            newItems = newItems.sort((a, b) => -a.eval + b.eval);
            break;
          case "alpha":
            newItems = newItems.sort((a, b) => {
              if (a.name < b.name) {
                return -1;
              }
              if (a.name > b.name) {
                return 1;
              }
              return 0;
            });
            break;

          default:
            break;
        }
        break;
      case "search":
        newItems = newItems.filter((el) =>
          el.name.toLowerCase().includes(value.toLowerCase())
        );
        break;

      case "product":
        newItems =
          value !== "" ? newItems.filter((el) => el.type === value) : newItems;
        break;
      case "category":
        newItems =
          value !== ""
            ? newItems.filter((el) => el.category === value)
            : newItems;
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
      value={`${el.eval}★ ${el.price ? el.price : "0"}₡`}
      buttons={[
        {
          icon: "info",
          onPress: () =>
            props.navigation.navigate("ProductDetail", {
              productId: el.id,
              type: el.type,
            }),
        },
        { icon: "comments-dollar", onPress: () => console.log("chat") },
      ]}
    ></GenericItem>
  ));

  const inputs = Object.keys(data).map((el) => (
    <SmallInput
      key={el}
      title={el}
      icon={data[el].icon}
      unset={data[el].value === ""}
      label={data[el].display}
      onChange={(text) => setFilter(text, el)}
      {...data[el]}
    ></SmallInput>
  ));

  return (
    <MyLayout title="Mercado" drawer loading={loading}>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.inputContainer}>{inputs}</View>
          {items}
        </View>
      </ScrollView>
    </MyLayout>
  );
};

const mapStateToProps = (state) => {
  return { token: state.token, courses: state.courses };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(TutorialsScreen);
