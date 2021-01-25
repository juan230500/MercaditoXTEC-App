import React, { useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { connect } from "react-redux";

import MyLayout from "../components/MyLayout";
import MyTextInput from "../components/UI/MyTextInput";
import SearchBar from "../components/SearchBar";
import SmallInput from "../components/UI/SmallInput";
import CheckList from "../components/CheckList";
import GenericItem from "../components/GenericItem";
import { useEffect } from "react";
import { request } from "../store/utils";
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});

const MarketScreen = (props) => {
  const [options, setOptions] = useState([
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
  ]);

  const [loadedItems, setLoadedItems] = useState(ITEMS);

  const [searchFilter, setSearchFilter] = useState("");

  useEffect(() => {
    getItems();
  }, []);

  const getItems = async () => {
    await request("/market", "GET");
  };

  const filtered = (items) => {
    const validOptions = options
      .filter((el) => el.selected)
      .map((el) => el.value);
    let newItems = [...items];
    newItems = newItems.filter((el) => validOptions.includes(el.type));
    newItems = newItems.filter((el) =>
      el.name.toLowerCase().includes(searchFilter.toLowerCase())
    );

    return newItems;
  };

  const items = filtered(loadedItems).map((el) => (
    <GenericItem
      key={el.id}
      label={el.name}
      value={`${el.eval}★ ${el.price}₡`}
      buttons={[
        {
          icon: "info",
          onPress: () =>
            props.navigation.navigate("Detail", {
              productId: el.id,
              type: el.type,
            }),
        },
        { icon: "comments-dollar", onPress: () => console.log("chat") },
      ]}
    ></GenericItem>
  ));

  return (
    <MyLayout title="Mercado" drawer>
      <View style={styles.container}>
        <SearchBar value={searchFilter} onChange={setSearchFilter}></SearchBar>
        <CheckList options={options} setOptions={setOptions}></CheckList>

        <ScrollView>{items}</ScrollView>
      </View>
    </MyLayout>
  );
};

const mapStateToProps = (state) => {
  return { categories: state.categories };
};
export default connect(mapStateToProps)(MarketScreen);
