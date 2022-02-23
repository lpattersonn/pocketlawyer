// Imports
import React, { useState, useEffect } from "react";
import "../Styles/nav.css";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Nav() {
  // const [username, setusername] = useState("");
  // const [password, setpassword] = useState("");
  // const [loginStatus, setloginStatus] = useState([]);

  //   const [userNameShow, setUserNameShow] = useState("")

  //   const login = () => {
  //     axios.post('/login', {
  //        username: username,
  //        password: password,
  //     })
  //     .then((res) => {
  // // console.log(res.data)
  // setloginStatus(res.data)
  //     })
  //   }
  // function getUser() {
  //   return loginStatus.map((arr, key) => {
  //     return (
  //       key={key},
  // <p>{arr.username}</p>
  //     )
  //   })
  // }

  const [user, setUser] = useState({
    username: "",
    image: "",
  });

  useEffect(() => {
    axios.get("/api/users").then((res) => {
      console.log(res.data);
      for (let firstUser of res.data) {
        console.log("THIS", firstUser);
        if (localStorage.getItem("username") === firstUser.username) {
          setUser({
            username: firstUser.username,
            image: firstUser.img,
          });
        }
      }
    });
  });

  const logout = function () {
    localStorage.setItem("username", "");
    window.location.reload();
  };

  if (localStorage.getItem("username")) {
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
            <li onClick={logout}>
              <a href="#">Logout</a>
              <Link to="/sos">SOS</Link>
            </li>
          </ul>
        </div>
        <div className="loginArea">
          <p>Hello, {user.username}</p>
          <div className="loginDiv">
            <img src={user.image} />
          </div>
        </div>
      </nav>
    );
  }
}
