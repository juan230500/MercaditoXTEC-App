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
    id: "126",
    name: "producto3",
  },
  {
    id: "127",
    name: "producto4",
  },
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});

const PurchasesScreen = (props) => {
  const [points, setPoints] = useState(0);
  const [loadedItems, setLoadedItems] = useState(ITEMS);
  const [searchFilter, setSearchFilter] = useState("");
  useEffect(() => {
    getItems();
  }, []);

  const getItems = async () => {
    let json = await utils.request("/purchase", "GET");
    console.log("[PURCHASES]", json);
    setLoadedItems(json);
  };

  const items = loadedItems.map((el) => (
    <GenericItem
      key={el.id}
      label={el.seller}
      buttons={[
        {
          icon: "check-square",
          onPress: () =>
            utils.navigate("StockDetail", { productId: el.id, client: true }),
        },
        {
          icon: "comments-dollar",
          onPress: () =>
            props.navigation.navigate("Chat", {
              productId: el.id,
            }),
        },
      ]}
    ></GenericItem>
  ));

  return (
    <MyLayout title="Mis compras" drawer>
      <View style={styles.container}>
        <MyButton title="Actualizar" onPress={() => getItems()}></MyButton>
        <SearchBar value={searchFilter} onChange={setSearchFilter}></SearchBar>
        <ScrollView>{items}</ScrollView>
        <MyButton title={`Puntos acomulados: ${points}`}></MyButton>
      </View>
    </MyLayout>
  );
};

export default PurchasesScreen;
