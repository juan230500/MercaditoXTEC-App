import { BASE_URL } from "./constants";
import store from "./store";
import { createRef } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const navigationRef = createRef();

export const navigate = (name, params) => {
  navigationRef.current?.navigate(name, params);
};

export const request = async (route, method, data = null) => {
  const token = store.getState().token;
  store.dispatch({ type: "SET_LOADING", loading: true });
  try {
    let response = await fetch(BASE_URL + route, {
      method: method,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: token,
      },
      ...(method !== "GET" && { body: JSON.stringify(data) }),
    });
    let json = await response.json();
    console.log("[NETWORK]", json);
    return json;
  } catch (error) {
    console.error(error);
  }
  store.dispatch({ type: "SET_LOADING", loading: false });
};

export const saveToken = async (token) => {
  store.dispatch({ type: "SET_TOKEN", token: token });
  store.dispatch({ type: "SET_LOADING", loading: true });
  try {
    await AsyncStorage.setItem("token", token || "");
  } catch (e) {
    // saving error
  }
  store.dispatch({ type: "SET_LOADING", loading: false });
};

export const fetchToken = async () => {
  store.dispatch({ type: "SET_LOADING", loading: true });
  let value = null;
  try {
    value = await AsyncStorage.getItem("token");
    value && store.dispatch({ type: "SET_TOKEN", token: value });
  } catch (e) {
    // error reading value
  }
  store.dispatch({ type: "SET_LOADING", loading: false });
  return value;
};
