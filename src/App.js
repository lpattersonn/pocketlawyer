import React, {useState, useEffect} from "react";

import "./Styles/App.css";

import Header from "./components/Header";

import Lawyer from "./components/Lawyer";

import MainBody from "./components/MainBody";

import ChatWindow from './components/ChatWindow';

import Nav from "./components/Nav";

import axios from 'axios'


function App() {

  const [lawyers, setLawyers] = useState([])
  
  useEffect(() => {
   axios.get("/api/lawyers")
   .then((res) => {
     console.log(res.data)
     setLawyers(res.data)
   })}, [])
   console.log(lawyers, "THIS ONE")
   
  return (
    <div className="App">
      <Nav />
      <div class="main">
      {/* Laywers online section*/}
      <Lawyer lawyers={lawyers} />

      {/* This is the main section */}
      <MainBody />
      </div>
      <div>
        <ChatWindow />
      </div>
    </div> 
  );
}

export default App;
