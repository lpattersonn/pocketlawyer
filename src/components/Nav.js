// Imports
import React from "react";
import "../Styles/nav.css";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav id="nav">
      <div id="title">
        <img
          className="logo"
          src="https://github.com/lpattersonn/pocketlawyer/blob/main/public/pocketlawyer.png?raw=true"
        />
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/sos">SOS</Link>
          </li>
        </ul>
      </div>
      <div>
        <ul id="login">
          <li>Login</li>
          <li>Register</li>
        </ul>
      </div>
    </nav>
  );
}
