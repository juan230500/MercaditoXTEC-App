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

const StockScreen = ({ navigation }) => {
  return (
    <MyLayout title="Mi tienda" onPressDrawer={navigation.openDrawer}>
      <View style={styles.container}>
        <Text>StockScreen</Text>
      </View>
    </MyLayout>
  );
};

export default StockScreen;
