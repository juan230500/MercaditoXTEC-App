import React, { useState } from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import { connect } from "react-redux";

import MyLink from "../components/UI/MyLink";
import MyLayout from "../components/MyLayout";
import GenericForm from "../components/GenericForm";
import * as utils from "../store/utils";
import MyButton from "../components/UI/MyButton";
import { useEffect } from "react";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});

const LogInScreen = (props) => {
  const [formData, setFormData] = useState({
    email: { display: "Correo XTEC", value: "", required: true },
    password: { display: "Contraseña XTEC", value: "", required: true },
  });

  useEffect(() => {
    const fetch = async () => {
      const token = await utils.fetchToken();
      console.log("[LOGIN]", token);
      token && props.navigation.navigate("Profile");
    };
    fetch();
  }, []);

  const postUser = async (user) => {
    await utils.request("/login", "POST", user);
    await utils.saveToken("abc");
    props.navigation.navigate("Profile");
  };

  return (
    <MyLayout title="Ingreso">
      <View style={styles.container}>
        <ScrollView>
          <GenericForm
            onComplete={(result) => postUser(result)}
            formData={formData}
            setFormData={setFormData}
          ></GenericForm>
          <MyLink to="SignUp">No tengo una cuenta</MyLink>
        </ScrollView>
      </View>
    </MyLayout>
  );
};

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(LogInScreen);
