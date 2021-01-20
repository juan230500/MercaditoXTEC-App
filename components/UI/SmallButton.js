import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { COLORS, FONT_SIZES } from "../../constants";
import Icon from "react-native-vector-icons/FontAwesome5";

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.accent,
    padding: 4,
    margin: 2,
  },
});

const SmallButton = (props) => {
  return (
    <TouchableOpacity style={{ flex: 1 }} onPress={props.onPress}>
      <View style={styles.container}>
        <Icon
          style={{
            textAlign: "center",
          }}
          name={props.icon}
          color="black"
          size={16}
        ></Icon>
      </View>
    </TouchableOpacity>
  );
};

export default SmallButton;
