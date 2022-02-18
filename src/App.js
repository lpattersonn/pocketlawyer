import React, { useState, useEffect } from "react";

import { useQuery } from "react-query";

import "./Styles/App.css";

import Header from "./components/Header";

import Lawyer from "./components/Lawyer";

import MainBody from "./components/MainBody";

import ChatWindow from "./components/ChatWindow";

import Nav from "./components/Nav";

import axios from "axios";

// import PopChat from "./components/PopChat";

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
    axios.get("/api/questions").then((res) => {
      // console.log(res.data)
      setQuestions(res.data);
    });
  }, []);

  function question(subject) {
    return axios.get("/api/questions").then((res) => {
      for (let data of res.data) {
        // console.log(data);
        if (subject === data.subject) {
          console.log(data);
        }
      }
    });
  }

  question('Traffic');

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
        <MainBody questions={questions} setQuestionsPopUp={setQuestionsPopUp} />
        {/* <div className="message-body">
        
      </div> */}
      </div>

      <div className={questionsPopUp.style}>
        <Questions
          key={questionsPopUp.subject}
          id={questionsPopUp.id}
          question={questionsPopUp.question}
          answer={questionsPopUp.answer}
          subject={questionsPopUp.subject}
          setQuestionsPopUp={setQuestionsPopUp}
        />
      </div>

      <div>
        {/* <ChatWindow /> */}
        {/* <PopChat messages={msgs} getMessage={getMessage} /> */}
      </div>
    </div>
  );
}

export default App;
