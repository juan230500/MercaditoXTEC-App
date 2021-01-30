import { BASE_URL } from "./constants";
import store from "./store";
import { createRef } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const navigationRef = createRef();

export const navigate = (name, params) => {
  navigationRef.current?.navigate(name, params);
};

export const getCategories = () => {
  const categories = store.getState().categories;
  return categories;
};

export const request = async (route, method, data = null) => {
  const token = store.getState().token;
  store.dispatch({ type: "SET_LOADING", loading: true });
  let json = null;
  let response = null;
  console.log("[NETWORK]", route, method, data);
  try {
    response = await fetch(BASE_URL + route, {
      method: method,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: token,
      },

      ...(method !== "GET" && { body: JSON.stringify(data) }),
    });
    json = await response.json();
  } catch (error) {
    console.error(error);
  }
  store.dispatch({ type: "SET_LOADING", loading: false });
  return json;
};

export const upload = async (route, file, type, data = {}) => {
  const token = store.getState().token;
  store.dispatch({ type: "SET_LOADING", loading: true });
  let json = null;
  let response = null;
  console.log("[UPLOAD]", route, file);
  var form = new FormData();
  file.type = type;
  form.append("file", file);
  for (let key in data) {
    form.append(key, data[key]);
  }
  console.log("[FORM]", route, form);
  try {
    response = await fetch(BASE_URL + route, {
      method: "POST",
      headers: { "Content-Type": "multipart/form-data", Authorization: token },
      body: form,
    });
    json = await response.json();
  } catch (error) {
    console.error(error);
  }
  store.dispatch({ type: "SET_LOADING", loading: false });
  return json;
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

export const filtered = (items, options, searchFilter) => {
  const validOptions = options
    .filter((el) => el.selected)
    .map((el) => el.value);
  let newItems = [...items];
  newItems = newItems.filter((el) => validOptions.includes(el.type));
  newItems = newItems.filter((el) => {
    if (el.name) {
      return el.name.toLowerCase().includes(searchFilter.toLowerCase());
    }
    if (el.curse) {
      return el.curse.toLowerCase().includes(searchFilter.toLowerCase());
    }
  });

  return newItems;
};
