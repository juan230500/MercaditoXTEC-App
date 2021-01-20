import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { connect } from "react-redux";

import MyLayout from "../components/MyLayout";
import MyButton from "../components/UI/MyButton";
import GenericItem from "../components/GenericItem";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
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

const ProductDetailScreen = ({ navigation, route }) => {
  console.log(route);
  const items = Object.keys(DETAIL).map((el) => (
    <GenericItem key={el} label={el} value={DETAIL[el]}></GenericItem>
  ));

  return (
    <MyLayout title="Detalle" drawer>
      <ScrollView>
        {items}
        <MyButton title="Chat con el vendedor"></MyButton>
        <MyButton title="Solicitar producto"></MyButton>
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductDetailScreen);
