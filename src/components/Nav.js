// Imports
import React, { useState, useEffect } from "react";
import "../Styles/nav.css";
import { Link } from "react-router-dom";
import axios from "axios";


export default function Nav() {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [loginStatus, setloginStatus] = useState("");

  const login = () => {
    axios.post('/login', {
       username: username,
       password: password,
    })
    .then((res) => {
console.log(res.data)
setloginStatus(res.data.message)
    })
  }

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
          <div>
            <form>
            <li className="login">
           
           <div> <input   className="myInput" type="text" placeholder="Username.." 
           onChange={(e) => {
            setusername(e.target.value);
          }}
           /> </div>
           <div> <input className="myInput" type="password" placeholder="Password.." 
           onChange={(e) => {
            setpassword(e.target.value);
          }}
           /></div>
           <div><button type="button" class="btn btn-light" 
           onClick={() => {
             {login()}
             document.getElementsByClassName(
              'myInput').value = ''
            }}
            >Login</button>  </div>
            </li>
            </form>
            </div>
          
          <li>
          <Link to="/register">Register</Link>
            </li>
        </ul>

        <h1>{loginStatus}</h1>
        
      </div>
    </nav>
  );
}
