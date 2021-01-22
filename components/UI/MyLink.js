import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { connect } from "react-redux";

import { COLORS } from "../../store/constants";

const styles = StyleSheet.create({
  link: {
    color: COLORS.accent,
    textDecorationLine: "underline",
    margin: 0,
    fontSize: 16,
    fontFamily: "Cabin",
    textAlign: "center",
  },
  container: {
    backgroundColor: COLORS.lightGrey,
    borderRadius: 8,
    padding: 8,
    marginVertical: 8,
  },
});

const MyLink = (props) => {
  let pressed = props.onPress;
  if (props.logout) {
    pressed = () => {
      props.onPress();
      props.setLogged(false, "");
    };
  }
  return (
    <TouchableOpacity style={styles.container} onPress={pressed}>
      <Text style={styles.link}>{props.children}</Text>
    </TouchableOpacity>
  );
};

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    setLogged: (logged, token) =>
      dispatch({ type: "SET_LOGGED", logged: logged, token: token }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MyLink);
