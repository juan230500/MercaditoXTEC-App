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

const ProfileScreen = ({ navigation }) => {
  return (
    <MyLayout title="Perfil" onPressDrawer={navigation.openDrawer}>
      <View style={styles.container}>
        <Text>ProfileScreen</Text>
      </View>
    </MyLayout>
  );
};

export default ProfileScreen;
