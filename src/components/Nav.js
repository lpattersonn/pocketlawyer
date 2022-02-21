// Imports
import React from "react";
import "../Styles/nav.css";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav id="nav">
      <div id="title">
      <a href="/">
        <img
          className="logo"
          src="https://github.com/lpattersonn/pocketlawyer/blob/main/public/pocketlawyer.png?raw=true"
        />
        </a>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/sos">SOS</Link>
          </li>
        </ul>
      </div>
      <div className="loginArea">
        <ul id="login">
          <li>Login</li>
          <li><img className="userlogin" src="https://tse4.mm.bing.net/th?id=OIP.I0rRw6lUEdvIGZ7sE54jMQHaDt&pid=Api&P=0&w=365&h=182" alt="userlogin"/></li>
        </ul>
        
      </div>
    </nav>
  );
}
