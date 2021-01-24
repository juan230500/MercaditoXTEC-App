import React from "react";
import { useState } from "react";
import { StyleSheet, Text, View, Modal, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";

import { COLORS } from "../../store/constants";
import MyTextInput from "./MyTextInput";

const styles = StyleSheet.create({
  modalBg: {
    backgroundColor: "rgba(0,0,0,0.3)",
    width: "100%",
    height: "100%",
    justifyContent: "center",
  },
  container: {
    width: 40,
    height: 40,
    backgroundColor: COLORS.white,
    borderRadius: 64,
    alignContent: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: COLORS.accent,
  },
  active: {
    backgroundColor: COLORS.accent,
    borderWidth: 0,
  },
});

const SmallInput = (props) => {
  const [opened, setOpened] = useState(false);

  let finalStyle = styles.container;
  if (props.value && props.value !== "") {
    finalStyle = { ...finalStyle, ...styles.active };
  }

  return (
    <View style={finalStyle}>
      <Modal transparent visible={opened}>
        <TouchableOpacity
          style={styles.modalBg}
          onPress={() => setOpened(false)}
        >
          <View
            style={{ backgroundColor: "white", margin: 16, borderRadius: 8 }}
          >
            <MyTextInput
              value={props.value}
              onChange={props.onChange}
              options={props.options}
              label={props.label}
            ></MyTextInput>
          </View>
        </TouchableOpacity>
      </Modal>
      <TouchableOpacity onPress={() => setOpened(true)}>
        <Icon
          style={{ textAlign: "center" }}
          name={props.icon}
          size={18}
        ></Icon>
      </TouchableOpacity>
    </View>
  );
};

export default SmallInput;
