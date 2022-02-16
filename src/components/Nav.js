import React from "react";

import "../Styles/nav.css"

export default function Nav() {
  return (
    <nav id="nav">
      <div id="title">
        <h1>Pocket Lawyer</h1>
        <ul>
          <li>SOS</li>
          <li>Find Answers</li>
          <li>Conversations</li>
        </ul>
      </div>
      <div>
        <ul id="login">
          <li>Login</li>
          <li>Register</li>
        </ul>
      </div>
    </nav>
  )
};