import React, { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  RefreshControl,
  Alert,
} from "react-native";
import * as DocumentPicker from "expo-document-picker";
import { connect } from "react-redux";

import MyLayout from "../components/MyLayout";
import SearchBar from "../components/SearchBar";
import CheckList from "../components/CheckList";
import GenericItem from "../components/GenericItem";
import { useEffect } from "react";
import * as utils from "../store/utils";
import MyButton from "../components/UI/MyButton";

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
    getCategories();
  }, []);

  const getItems = async () => {
    const json = await utils.request("/market", "GET");
    console.log("[MARKET]", json);
    json && setLoadedItems(json);
  };

  const getCategories = async () => {
    let json = await utils.request("/categories", "GET");
    console.log("[CATEGORIES]", json);
    json && props.setCategories(json.categories);
  };

  const postChat = async (type, productId) => {
    let jsonPrev = await utils.request(`/${type}/${productId}`, "GET");
    console.log("[DETAIL]", jsonPrev);

    let json = await utils.request("/order", "POST", {
      itemId: productId,
      type: type,
      date: new Date(),
      status: "Pendiente pago",
      seller: jsonPrev.userEmail,
    });
    console.log("[CHAT POST]", json);
  };

  const items = utils.filtered(loadedItems, options, searchFilter).map((el) => (
    <GenericItem
      key={[el.type, el.id].join("-")}
      label={el.name ? el.name : el.curse}
      value={`${el.eval}★ ${el.price ? el.price + "₡" : ""}`}
      buttons={[
        {
          icon: "info",
          onPress: () =>
            props.navigation.navigate("Detail", {
              productId: el.id,
              type: el.type,
            }),
        },
        {
          icon: "shopping-bag",
          onPress: () =>
            Alert.alert(
              "",
              "Puede revisar más detalles con el botón de información ¿Está interesado en el producto?",
              [
                {
                  text: "Sí",
                  onPress: () => {
                    postChat(el.type, el.id);
                    Alert.alert(
                      "",
                      "El producto se agregó a tus compras para que puedas chatear y darle seguimiento"
                    );
                    props.navigation.navigate("Purchases");
                  },
                },
              ]
            ),
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

const mapStateToProps = (state) => {
  return {
    token: state.token,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setCategories: (categories) =>
      dispatch({ type: "SET_CATEGORIES", categories: categories }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MarketScreen);
