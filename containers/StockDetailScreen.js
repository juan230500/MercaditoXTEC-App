import React from "react";
import { StyleSheet, Text, View } from "react-native";

import MyLayout from "../components/MyLayout";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

const StockDetailScreen = ({ navigation }) => {
  return (
    <MyLayout title="Detalles">
      <View style={styles.container}>
        <Text>StockDetailScreen</Text>
      </View>
    </MyLayout>
  );
};

export default StockDetailScreen;
