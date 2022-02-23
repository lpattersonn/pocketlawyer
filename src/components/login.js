import React, { useState, useEffect } from "react";
import Nav from "./Nav";
import axios from "axios";
import "../Styles/Login.css";


export default function Login(props) {
  

 


  return (
    <div>
      {/* <Nav /> */}
      <div className="logo">
        
      </div>
      <div className="mainPage">
      
      <section className="loginMain">
      <div className="logo">
        <img src="https://github.com/lpattersonn/pocketlawyer/blob/main/public/pocketlawyer.png?raw=true" />
        </div>
        <form className="form">
          <div className="data">
          <p>Login</p>

          

          <div>
            <label>Username:</label>
            <input />
          </div>

                   <div>
            <label>Password:</label>
            <input
              
            />
          </div>

          <div>
            <button type="button" class="btn btn-light" >
              Login
            </button>
          </div>
          </div>
        </form>
      </section>
      </div>
    </div>
  );
}
