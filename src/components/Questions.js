import react from "react";

import { useQuery } from 'react-query';

export default function Questions(props) {
    return (
      <section id="show-popup">
      <div onClick={() => {props.setQuestionsPopUp({
        question: "",
        answer: "",
        subject: "",
        style: "closePopUp"
      })}}>
        <img className="close-btn" src='https://icon-library.com/images/close-button-icon/close-button-icon-26.jpg' />
      </div> 

        <h1>Result for query</h1>
        <h3>{props.question}</h3>
        <h3>{props.answer}</h3>
        
        </section>
  );
    }