// Imports

import React, { useState, useEffect } from "react";

import "../Styles/App.css";

import Header from "./Header";

import Lawyer from "./Lawyer";

import MainBody from "./MainBody";

import ChatWindow from "./ChatWindow";

import Nav from "./Nav";

import axios from "axios";

import PopChat from "./PopChat";

import LawyerPop from "./LawyerPop";

import Questions from "./Questions";


function App() {
  // State
  const [lawyers, setLawyers] = useState([]);

  const [questions, setQuestions] = useState([]);

  const [box, setBox] = useState([]);

  const [lawyerPopUp, setLawyerPopUp] = useState({
    name: "",
    img: "",
    description: "",
    focus: "",
    style: "closePopUp",
  });

  useEffect(() => {
    axios.get("/api/lawyers").then((res) => {
      //  console.log(res.data)
      setLawyers(res.data);
    });
  }, []);

  useEffect(() => {
    axios.get("/api/questions").then((res) => {
     // console.log(res.data);
      setQuestions(res.data);
    });
  }, []);


  useEffect(() => {
    axios.get("https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=5c0d974942ec4e319ec0c5ac727587ad").then((res) => {
      //console.log(res.data.articles);
      setBox(res.data.articles);
    });
  }, []);

  


  const msgs = [
    "hey, whatsup!",
    "how are you?",
    "how is the weather today?",
    "what is day today",
  ];

  //function to retrive the message to be sent
  const getMessage = (msg) => {
    console.log(msg);
  };

  return (
    <div className="App">

      <Nav />
      <div class="main">
        {/* Laywers online section*/}
        <Lawyer lawyers={lawyers} setLawyerPopUp={setLawyerPopUp} />

        <div className={lawyerPopUp.style}>
          <LawyerPop
            key={lawyerPopUp.name}
            name={lawyerPopUp.name}
            img={lawyerPopUp.img}
            focus={lawyerPopUp.focus}
            description={lawyerPopUp.description}
            setLawyerPopUp={setLawyerPopUp}
          />
        </div>

        {/* This is the main section */}
        <MainBody questions={questions} setQuestions={setQuestions} box={box}/>
        {/* <div className="message-body">
        
      </div> */}
      </div>

      <div>
        {/* <ChatWindow /> */}
        {/* <PopChat messages={msgs} getMessage={getMessage} /> */}
      </div>
    </div>
  );
}

export default App;