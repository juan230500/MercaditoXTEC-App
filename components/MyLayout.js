import { useNavigation } from "@react-navigation/native";
import React from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import { connect } from "react-redux";

import { COLORS } from "../store/constants";

const styles = StyleSheet.create({
  header: {
    padding: 12,
    paddingTop: 32,
    backgroundColor: COLORS.primary,
  },
  text: {
    color: COLORS.white,
    fontSize: 32,
    fontWeight: "bold",
    marginHorizontal: 32,
    textAlign: "center",
  },
  container1: {
    flex: 1,
    backgroundColor: COLORS.primary,
  },
  container2: {
    flex: 1,
    borderTopRightRadius: 32,
    borderTopLeftRadius: 32,
    overflow: "hidden",
    backgroundColor: COLORS.white,
  },
});

const MyLayout = (props) => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <View style={styles.header}>
        {props.drawer ? (
          <Icon
            onPress={navigation.openDrawer}
            name="bars"
            color="white"
            size={32}
            style={{ position: "absolute", top: 32, left: 16 }}
          ></Icon>
        ) : null}
        {props.back ? (
          <Icon
            onPress={navigation.goBack}
            name="arrow-left"
            color="white"
            size={32}
            style={{ position: "absolute", top: 32, left: 16 }}
          ></Icon>
        ) : null}
        <Text style={styles.text}>{props.title}</Text>
      </View>
      <View style={styles.container1}>
        <View style={styles.container2}>
          {props.load ? (
            <View style={{ flex: 1, justifyContent: "center" }}>
              <ActivityIndicator
                size="large"
                color={COLORS.primary}
              ></ActivityIndicator>
            </View>
          ) : (
            props.children
          )}
        </View>
      </View>
    </View>
  );
};

const mapStateToProps = (state) => {
  return { load: state.loading };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(MyLayout);
