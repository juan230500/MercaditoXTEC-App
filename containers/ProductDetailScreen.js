import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { connect } from "react-redux";

import { BASE_URL } from "../store/constants";
import MyLayout from "../components/MyLayout";
import MyButton from "../components/UI/MyButton";
import GenericItem from "../components/GenericItem";
import { useState } from "react";
import { useEffect } from "react";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 8,
  },
});
const DETAIL = {
  name: "qwe",
  description: "Dasds",
  price: "dsadas",
  category: "Dasdsa",
  deliveryInfo:
    "dasdaddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd dasdaddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd",
  paymentInfo:
    "dasdaddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd dasdaddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd dasdaddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd",
  eval: "sdsad",
};

const ProductDetailScreen = (props) => {
  const [detail, setDetail] = useState(DETAIL);
  useEffect(() => {
    getDetail();
  }, []);

  const getDetail = async () => {
    try {
      let response = await fetch(
        BASE_URL + "/product/" + props.route.params.productId,
        {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: props.token,
          },
        }
      );
      let json = await response.json();
      console.log("[NETWORK]", json);
    } catch (error) {
      console.error(error);
    }
  };

  const items = Object.keys(detail).map((el) => (
    <GenericItem key={el} label={el} value={DETAIL[el]}></GenericItem>
  ));

  let buttons = null;
  console.log(props);
  if (props.route.params.type == "practice") {
    buttons = <MyButton title="Ya realicé el pago de la práctica"></MyButton>;
  } else if (props.route.params.type == "tutorial") {
    buttons = <MyButton title="Chat con el vendedor"></MyButton>;
  } else {
    buttons = [
      <MyButton key="1" title="Chat con el vendedor"></MyButton>,
      <MyButton key="2" title="Solicitar producto"></MyButton>,
    ];
  }

  return (
    <MyLayout title="Detalle" back>
      <View style={styles.container}>
        <ScrollView>
          {items}
          {buttons}
        </ScrollView>
      </View>
    </MyLayout>
  );
};

const mapStateToProps = (state) => {
  return { token: state.token };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductDetailScreen);
