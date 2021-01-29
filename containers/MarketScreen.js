import React, { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  RefreshControl,
} from "react-native";

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
    name: "abc",
    price: 123,
    type: "product",
    eval: 3,
    category: "c1",
  },
  {
    id: "1234",
    name: "efg",
    price: 321,
    type: "service",
    eval: 4.5,
    category: "c2",
  },
  {
    id: "12345",
    name: "hij",
    price: 1,
    type: "service",
    eval: 5,
    category: "c1",
  },
  {
    id: "123457",
    name: "hij",
    price: 1,
    type: "job",
    eval: 5,
    category: "c1",
  },
  {
    id: "123456",
    name: "hij",
    price: 1,
    type: "tutorial",
    eval: 5,
    category: "c1",
  },
];

const OPTIONS = [
  {
    display: "Productos",
    value: "product",
    selected: true,
    icon: "shopping-bag",
  },
  { display: "Servicios", value: "service", selected: true, icon: "tools" },
  {
    display: "Tutorías",
    value: "tutorial",
    selected: false,
    icon: "chalkboard-teacher",
  },
  {
    display: "Prácticas",
    value: "practice",
    selected: false,
    icon: "book-open",
  },
  {
    display: "Ofertas de empleo",
    value: "job",
    selected: false,
    icon: "user-graduate",
  },
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});

const MarketScreen = (props) => {
  const [refreshing, setRefreshing] = useState(false);
  const [options, setOptions] = useState(OPTIONS);
  const [loadedItems, setLoadedItems] = useState([]);
  const [searchFilter, setSearchFilter] = useState("");
  useEffect(() => {
    getItems();
  }, []);

  const getItems = async () => {
    const json = await utils.request("/market", "GET");
    console.log("[MARKET]", json);
    json ? setLoadedItems(json) : setLoadedItems(ITEMS);
  };

  const items = utils.filtered(loadedItems, options, searchFilter).map((el) => (
    <GenericItem
      key={el._id}
      label={el.name ? el.name : el.curse}
      value={`${el.eval}★ ${el.price ? el.price + "₡" : ""}`}
      buttons={[
        {
          icon: "info",
          onPress: () =>
            props.navigation.navigate("Detail", {
              productId: el._id,
              type: el.type,
            }),
        },
        {
          icon: "comments-dollar",
          onPress: () =>
            props.navigation.navigate("Chat", { productId: el._id }),
        },
      ]}
    ></GenericItem>
  ));

  return (
    <MyLayout title="Mercado" drawer>
      <View style={styles.container}>
        <SearchBar value={searchFilter} onChange={setSearchFilter}></SearchBar>
        <CheckList options={options} setOptions={setOptions}></CheckList>
        <ScrollView
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={getItems}
            ></RefreshControl>
          }
        >
          {items}
        </ScrollView>
      </View>
    </MyLayout>
  );
};

export default MarketScreen;
