import React from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import io from "socket.io-client";

import ChatMessage from "../components/ChatMessage";
import MyLayout from "../components/MyLayout";
import MyButton from "../components/UI/MyButton";
import MyTextInput from "../components/UI/MyTextInput";
import { BASE_URL, COLORS } from "../store/constants";
import * as utils from "../store/utils";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  chat: {
    flex: 1,
    borderRadius: 16,
    backgroundColor: COLORS.lightGrey,
  },
  input: { backgroundColor: "red" },
});

const MESSAGES = [
  {
    _id: "dasdas1",
    text: "holaaa1",
    mine: false,
  },
  {
    _id: "dasdas2",
    text: "holaaa2",
    mine: false,
  },
  {
    _id: "dasdas3",
    text: "holaaa3",
    mine: true,
  },
];

const ChatScreen = (props) => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [user, setUser] = useState("");
  const [chatId, setChatId] = useState(0);
  let socket = useRef(io(BASE_URL));

  useEffect(() => {
    getMessages();
  }, [props.route.params.productId]);

  useEffect(() => {
    socket.current.on("chat" + chatId, (msg) => {
      console.log("[MENSAJE]", msg);
      const newMessages = [...messages];
      newMessages.push(msg);
      setMessages(newMessages);
    });
    return () => {
      socket.current.off("chat" + chatId);
    };
  }, [messages, chatId]);

  const getMessages = async () => {
    let json = await utils.request(
      "/order/message/" + props.route.params.productId,
      "GET"
    );
    console.log("[CHAT GET]", json);
    json && setMessages(json.messages);
    json && setUser(json.user.email);
    json && setChatId(json.chat.id);
  };

  const postMessage = () => {
    socket.current.emit("message", {
      value: newMessage,
      id: chatId,
      createdBy: user,
    });
    setNewMessage("");
  };

  const items = messages.map((el) => (
    <ChatMessage key={Math.random()}>
      {el.createdBy}: {el.value}
    </ChatMessage>
  ));

  return (
    <MyLayout title="Chat" back>
      <View style={styles.container}>
        <View style={styles.chat}>
          <ScrollView>{items}</ScrollView>
        </View>
        <MyTextInput
          value={newMessage}
          onChange={setNewMessage}
          label="Mensaje"
        ></MyTextInput>
        <MyButton title="Enviar" onPress={postMessage}></MyButton>
      </View>
    </MyLayout>
  );
};

export default ChatScreen;
