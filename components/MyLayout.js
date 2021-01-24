import { useNavigation } from "@react-navigation/native";
import React from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import { connect } from "react-redux";

import { COLORS } from "../store/constants";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primary,
  },
  header: {
    padding: 0,
    height: 75,
    paddingTop: 32,
    paddingBottom: 16,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: COLORS.white,
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
    width: "70%",
  },
  icon: {
    width: "10%",
  },
  card: {
    flex: 1,
    backgroundColor: COLORS.white,
    elevation: 10,
    borderTopRightRadius: 24,
    borderTopLeftRadius: 24,
    overflow: "hidden",
  },
});

const MyLayout = (props) => {
  const navigation = useNavigation();

  const loading = (
    <View style={{ flex: 1, justifyContent: "center" }}>
      <ActivityIndicator
        size="large"
        color={COLORS.primary}
      ></ActivityIndicator>
    </View>
  );
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.icon}>
          {props.drawer ? (
            <Icon
              onPress={navigation.openDrawer}
              name="bars"
              color="white"
              size={32}
            ></Icon>
          ) : null}
          {props.back ? (
            <Icon
              onPress={navigation.goBack}
              name="arrow-left"
              color="white"
              size={32}
            ></Icon>
          ) : null}
        </View>
        <Text style={styles.text}>{props.title}</Text>
        <View style={styles.icon}>
          <Icon
            onPress={() => navigation.navigate("Help")}
            name="question-circle"
            color="white"
            size={32}
          ></Icon>
        </View>
      </View>
      <View style={styles.card}>{props.load ? loading : props.children}</View>
    </View>
  );
};

const mapStateToProps = (state) => {
  return { load: state.loading };
};

export default connect(mapStateToProps)(MyLayout);
