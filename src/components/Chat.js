// Imports
import React from "react";
import Nav from "./Nav";
import { ChatEngine } from "react-chat-engine";
import "../Styles/chat.css";

const projectID = '3c0dd3f9-55c8-417c-b8ae-63797659eaa8';

export default function Chat(props) {
  return (
    <div>
      <Nav />
      <ChatEngine
      height="100vh"
      projectID={projectID}
      userName={localStorage.getItem('username')}
      userSecret={localStorage.getItem('password')}
      />
    </div>
  );
}
