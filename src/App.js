import React, { useState, useEffect } from "react";

import { useQuery } from "react-query";

import "./Styles/App.css";

import Header from "./components/Header";

import Lawyer from "./components/Lawyer";

import MainBody from "./components/MainBody";

import ChatWindow from "./components/ChatWindow";

import Nav from "./components/Nav";

import axios from "axios";

import PopChat from "./components/PopChat";

import LawyerPop from "./components/LawyerPop";

import Questions from "./components/Questions";

function App() {
  const [lawyers, setLawyers] = useState([]);

  const [questions, setQuestions] = useState([]);

  const [questionsPopUp, setQuestionsPopUp] = useState({
    id: "",
    question: "",
    answer: "",
    subject: "",
    style: "closePopUp",
  });

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
    axios.get("/api/questions")
    .then((res) => {
      console.log(res.data)
      setQuestions(res.data);
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
        <MainBody questions={questions} setQuestions={setQuestions} />
        {/* <div className="message-body">
        
      </div> */}
      </div>

      {/* <div className={questionsPopUp.style}>
        <Questions
          questionsPopUp={questionsPopUp}
          setQuestionsPopUp={setQuestionsPopUp}
          getQuestion={getQuestion}
        />
      </div> */}

      <div>
        {/* <ChatWindow /> */}
        <PopChat messages={msgs} getMessage={getMessage} />
      </div>
    </div>
  );
}

export default App;
