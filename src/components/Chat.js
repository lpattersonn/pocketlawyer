// Imports
import React from "react";
import Nav from "./Nav";
import { ChatEngine } from "react-chat-engine";
import "../Styles/chat.css";

export default function Chat(porps) {
  return (
    <div>
      <Nav />
      <ChatEngine height="100vh" projectID="" userName="" userSecret="" />
    </div>
  );
}
