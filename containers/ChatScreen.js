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
import { COLORS } from "../store/constants";
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
  let socket = useRef(io("http://192.168.100.111:3000"));

  useEffect(() => {
    getMessages();
  }, []);

  useEffect(() => {
    socket.current.on("chat message", (msg) => {
      const newMessages = [...messages];
      newMessages.push(msg);
      setMessages(newMessages);
    });
    return () => {
      socket.current.off("chat message");
    };
  }, [messages]);

  const getMessages = async () => {
    let json = await utils.request("/chat", "GET");
    console.log("[CHAT GET]", json);
    json ? setMessages(json) : setMessages(MESSAGES);
  };

  const postMessage = () => {
    socket.current.emit("chat message", newMessage);
    setNewMessage("");
  };

  const items = messages.map((el) => (
    <ChatMessage key={el._id} right={el.mine} left={!el.mine}>
      {el.text}
    </ChatMessage>
  ));

  return (
    <MyLayout title="Chat" back>
      <View style={styles.container}>
        <View style={styles.chat}>
          <ScrollView
            contentContainerStyle={{
              flex: 1,
              justifyContent: "flex-end",
            }}
          >
            {items}
          </ScrollView>
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
