// Imports
import React from "react";
import Nav from "./Nav";
import { ChatEngine } from "react-chat-engine";
import "../Styles/chat.css";

export default function Chat(props) {
  return (
    <div>
      <Nav />
      <ChatEngine
        height="100vh"
        projectID="3c0dd3f9-55c8-417c-b8ae-63797659eaa8"
        userName="Walter"
        userSecret="1234"
      />
    </div>
  );
}
