import { BASE_URL } from "./constants";
import store from "./store";
import { createRef } from "react";

export const navigationRef = createRef();

export const navigate = (name, params) => {
  navigationRef.current?.navigate(name, params);
};

export const request = async (route, method, data) => {
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
