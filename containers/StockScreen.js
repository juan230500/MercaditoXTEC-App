import React, { useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

import MyLayout from "../components/MyLayout";
import SearchBar from "../components/SearchBar";
import CheckList from "../components/CheckList";
import GenericItem from "../components/GenericItem";
import { useEffect } from "react";
import * as utils from "../store/utils";
import MyButton from "../components/UI/MyButton";

const ITEMS = [
  {
    id: "123",
    name: "producto1",
    type: "publication",
  },
  {
    id: "124",
    name: "producto2",
    type: "publication",
  },
  {
    id: "126",
    name: "producto3",
    type: "pending",
  },
  {
    id: "127",
    name: "producto4",
    type: "pending",
  },
  {
    id: "128",
    name: "producto7",
    type: "complete",
    value: "entregado el 17/11/20",
  },
  {
    id: "129",
    name: "producto8",
    type: "complete",
    value: "entregado el 17/10/20",
  },
];

const OPTIONS = [
  {
    display: "Completados",
    value: "complete",
    selected: true,
    icon: "truck-loading",
  },
  {
    display: "Pendientes",
    value: "pending",
    selected: false,
    icon: "hourglass-half",
  },
  {
    display: "Publicaciones",
    value: "publication",
    selected: false,
    icon: "boxes",
  },
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});

const StockScreen = (props) => {
  const [options, setOptions] = useState(OPTIONS);
  const [points, setPoints] = useState(0);
  const [loadedItems, setLoadedItems] = useState(ITEMS);
  const [searchFilter, setSearchFilter] = useState("");
  useEffect(() => {
    getItems();
  }, []);

  const getItems = async () => {
    await utils.request("/stock", "GET");
  };

  const chooseButtons = (type, id) => {
    let buttons = null;
    switch (type) {
      case "complete":
        buttons = [];
        break;
      case "publication":
        buttons = [
          {
            icon: "info",
            onPress: () =>
              utils.navigate("Detail", { productId: id, type: null }),
          },
          { icon: "edit", onPress: () => console.log("edit") },
          { icon: "trash", onPress: () => console.log("delete") },
        ];
        break;
      case "pending":
        buttons = [
          {
            icon: "check-square",
            onPress: () => utils.navigate("StockDetail", { productId: id }),
          },
          { icon: "comments-dollar", onPress: () => console.log("chat") },
        ];
        break;
    }
    return buttons;
  };

  const items = utils
    .filtered(loadedItems, options, searchFilter)
    .map((el) => (
      <GenericItem
        key={el.id}
        label={el.name}
        value={el.type === "complete" ? el.value : ""}
        buttons={chooseButtons(el.type, el.id)}
      ></GenericItem>
    ));

  return (
    <MyLayout title="Mi tienda" drawer>
      <View style={styles.container}>
        <SearchBar value={searchFilter} onChange={setSearchFilter}></SearchBar>
        <CheckList options={options} setOptions={setOptions} unique></CheckList>
        <ScrollView>{items}</ScrollView>
        <MyButton title={`Puntos acomulados: ${points}`}></MyButton>
      </View>
    </MyLayout>
  );
};

export default StockScreen;
