import React, { useState, useEffect } from "react";
import Nav from "./Nav";
import axios from "axios";
import "../Styles/Register.css";
import { useNavigate } from 'react-router-dom';

export default function Register(props) {
  const [usernameReg, setusernameReg] = useState("");
  const [passwordReg, setpasswordReg] = useState("");

  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");

  const register = () => {
    axios
      .post("/register", {
        username: usernameReg,
        password: passwordReg,
      })
      .then((res) => {
        // console.log(res);
      });
  };
  const navigate = useNavigate();


  return (
    <div>
      <Nav />
      <section className="register">
        <form className="form">
          <div className="data">
          <p>Register</p>

          <div>
            <label>First Name:</label>
            <input />
          </div>

          <div>
            <label>Last Name:</label>
            <input />
          </div>

          <div>
            <label>Username:</label>
            <input
              type="text"
              onChange={(e) => {
                setusernameReg(e.target.value);
              }}
            />
          </div>

          <div>
            <label className="email">Email:</label>
            <input  />
          </div>

          <div>
            <label>Password:</label>
            <input
              type="text"
              onChange={(e) => {
                setpasswordReg(e.target.value);
              }}
            />
          </div>

          <div>
            <button type="button" class="btn btn-light" onClick={() => {
              {register()}
              navigate('/')
            }
            
            }>
              Register
            </button>
          </div>
          </div>
        </form>
      </section>
    </div>
  );
}
