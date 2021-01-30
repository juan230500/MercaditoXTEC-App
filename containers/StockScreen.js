import React, { useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

import MyLayout from "../components/MyLayout";
import SearchBar from "../components/SearchBar";
import CheckList from "../components/CheckList";
import GenericItem from "../components/GenericItem";
import { useEffect } from "react";
import * as utils from "../store/utils";
import MyButton from "../components/UI/MyButton";

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
  const [points, setPoints] = useState(0);
  const [loadedItems, setLoadedItems] = useState([]);
  const [searchFilter, setSearchFilter] = useState("");
  useEffect(() => {
    getItems();
  }, []);

  const getItems = async () => {
    let json = await utils.request("/stock", "GET");
    console.log("[STOCK]", json);
    json && setLoadedItems(json);
  };

  const items = loadedItems.map((el) => (
    <GenericItem
      key={el.id}
      label={el.seller}
      value={el.status}
      buttons={[
        {
          icon: "check-square",
          onPress: () =>
            utils.navigate("StockDetail", { productId: el.id, client: false }),
        },
        { icon: "comments-dollar", onPress: () => console.log("chat") },
      ]}
    ></GenericItem>
  ));

  return (
    <MyLayout title="Mi tienda" drawer>
      <View style={styles.container}>
        <MyButton title="Actualizar" onPress={() => getItems()}></MyButton>
        <SearchBar value={searchFilter} onChange={setSearchFilter}></SearchBar>
        <ScrollView>{items}</ScrollView>
        <MyButton title={`Puntos acomulados: ${points}`}></MyButton>
      </View>
    </MyLayout>
  );
};

export default StockScreen;
