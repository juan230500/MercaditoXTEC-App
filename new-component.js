const fs = require("fs");

const path = process.argv[2]; //"./src/components/UI";
const file = process.argv[3]; //"Head";
const jsText = `
import React from "react";
import { StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

const ${file} = (props) => {
  return (
    <View style={styles.container}>
      <Text>${file}</Text>
    </View>
  );
};

export default ${file};
`;

fs.mkdir(`${path}/`, { recursive: true }, function (err) {
  if (err) {
    return console.log(err);
  }
  fs.writeFile(`${path}/${file}.js`, jsText, (err) => {});
  console.log("The file was saved!");
});
