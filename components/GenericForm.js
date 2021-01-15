import React from "react";
import { StyleSheet, Text, View, ScrollView, Alert } from "react-native";

import MyTextInput from "./UI/MyTextInput";
import MyButton from "./UI/MyButton";
import MyLink from "./UI/MyLink";
import { useState } from "react";

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
});

const GenericForm = (props) => {
  const [missingFields, setMissingFlieds] = useState([]);

  const verifyData = () => {
    const results = {};
    const incompleteFields = [];
    for (let key in props.formData) {
      if (props.formData[key].required && props.formData[key].value === "") {
        incompleteFields.push(key);
      }
      results[key] = props.formData[key].value;
    }

    if (incompleteFields.length > 0) {
      setMissingFlieds(incompleteFields);
      Alert.alert(
        "¡Ups!",
        `Hay ${incompleteFields.length} campos obligatorios sin llenar`
      );
    } else {
      if (props.reset) resetData();
      props.onComplete(results);
    }
  };

  const resetData = () => {
    const newFormData = { ...props.formData };
    for (let key in newFormData) {
      const newFormElement = { ...newFormData[key] };
      newFormElement.alert = false;
      newFormElement.value = "";
      newFormData[key] = newFormElement;
    }
    props.setFormData(newFormData);
    setMissingFlieds([]);
  };

  const inputChangeHandler = (value, key) => {
    const newFormData = { ...props.formData };
    const newFormElement = { ...newFormData[key] };
    newFormElement.value = value;
    newFormData[key] = newFormElement;
    props.setFormData(newFormData);
  };

  const inputs = Object.keys(props.formData).map((el) => (
    <MyTextInput
      key={el}
      label={props.formData[el].display}
      value={props.formData[el].value}
      onChange={(text) => inputChangeHandler(text, el)}
      password={el === "password"}
      required={missingFields.includes(el)}
    ></MyTextInput>
  ));

  const buttons = props.actions
    ? props.actions.map((el) => (
        <MyButton
          key={el.title}
          title={el.title}
          onPress={el.onPress}
        ></MyButton>
      ))
    : null;

  return (
    <View style={styles.container}>
      {inputs}
      {buttons}
      <MyButton title="Confirmar" onPress={verifyData}></MyButton>
    </View>
  );
};

export default GenericForm;
