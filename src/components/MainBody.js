//  Imports
import axios from "axios";
import React, { useState } from "react";
import "../Styles/mainbody.css";
import Questions from "./Questions";

export default function MainBody(props) {
  const [searchInput, setSearchInput] = useState({
    search: "",
  });

  const [subject, setSubject] = useState({
    subject: "",
    style: "faq-body_disappear",
  });

  const { questions, setQuestions } = props;

  const [Faq, setFaq] = useState([]);

  const searchReturn = function () {
    const result = subject.subject.split(" ");

    for (let val of result) {
      const questionsArray = questions.map((question, key) => {
        const result1 = question.subject.split(" ");
       

        for (let valTwo of result1) {
          if (val.toLowerCase() === valTwo.toLowerCase()) {
            return (
              <article key={key} className="faq_popup-article">
                <h3>{question.question}</h3>
                <p>{question.answer}</p>
              </article>
            );
          }
        }
      });
      return questionsArray;
    }
  };

  const faq = () => {
    return (
      <div className="icons">
        <div>
          <img
            className="icon_area"
            src="https://github.com/lpattersonn/pocketlawyer/blob/main/public/Traffic.png?raw=true"
            onClick={() => {
              // alert("Trafic was Clicked")
              // setQuestions(questions)
              resetQuestion();
              setSubject({
                subject: "Traffic",
                style: "icon_area",
              });
            }}
          />
        </div>
        <div>
          <img
            className="icon_area"
            src="https://github.com/lpattersonn/pocketlawyer/blob/main/public/RealEstate.png?raw=true"
            onClick={() => {
              // alert("Realestate was Clicked")
              // setQuestions(questions)
              resetQuestion();
              setSubject({
                subject: "Real Estate",
                style: "icon_area",
              });
            }}
          />
        </div>
        <div>
          <img
            className="icon_area"
            src="https://github.com/lpattersonn/pocketlawyer/blob/main/public/Injury.png?raw=true"
            onClick={() => {
              // alert("Injury was Clicked")
              // setQuestions(questions)
              resetQuestion();
              setSubject({
                subject: "Injury",
                style: "icon_area",
              });
            }}
          />
        </div>
        <div>
          <img
            className="icon_area"
            src="https://github.com/lpattersonn/pocketlawyer/blob/main/public/contract-law.png?raw=true"
            onClick={() => {
              // alert("Contract was Clicked")
              // setQuestions(questions)
              resetQuestion();
              setSubject({
                subject: "Contract",
                style: "icon_area",
              });
            }}
          />
        </div>
        <div>
          <img
            className="icon_area"
            alt="Family"
            onClick={() => {
              // alert("Family was Clicked")
              // setQuestions(questions)
              resetQuestion();
              setSubject({
                subject: "Family",
                style: "icon_area",
              });
            }}
            src="https://github.com/lpattersonn/pocketlawyer/blob/main/public/family.jpeg?raw=true"
          />
        </div>
      </div>
    );
  };

  // Imput form submit
  const search = function (event) {
    axios
      .get("/searchResult", {
        params: {
          search: searchInput.search,
        },
      })
      .then((res) => {
        setFaq(res.data);
      });
  };

  const resetQuestion = function (event) {
    axios.get("/api/questions").then((res) => {
      // console.log(res.data)
      setQuestions(res.data);
    });
  };

  // Get event value
  const getInputVal = (event) => {
    setSearchInput({
      ...searchInput,
      [event.target.name]: event.target.value,
    });
  };

const boxData = props.box.map((data) => {
return(
<article>
  <div>
    <img src={data.urlToImage} />
  </div>
  </article>


)
})
//  console.log(props.box)


  return (
    <section className="mainbody">
      <div className="searchbar-div">
        <form
          className="searchbar"
          disable={searchInput.search.length < 1}
          onSubmit={(event) => {
            event.preventDefault();
            search(searchInput);
            setQuestions(Faq);
            setSubject({
              subject: searchInput.search,
              style: "icon_area",
            });
          }}
        >
          <h2>How can we help you?</h2>
          <input
            type="text"
            placeholder="Search..."
            name="search"
            value={searchInput.search}
            onChange={getInputVal}
          />
          {faq()}
        </form>

        <div className="box">
          <div>
            <h1>Div 1</h1>
            <img
              className="icon_area"
              alt="Family"
              src="https://github.com/lpattersonn/pocketlawyer/blob/main/public/family.jpeg?raw=true"
            />
          </div>
          <div>
            {/* {boxData} */}
          </div>
          <div>
            <h1>Div 1</h1>
          </div>
        </div>
      </div>

      <div id="faq-area" className={subject.style}>
        <img
          className="faq_close-btn"
          onClick={() => {
            setSubject({
              subject: "",
              style: "faq-body_disappear",
            });
          }}
          src="https://icon-library.com/images/close-button-icon/close-button-icon-26.jpg"
        />

        {searchReturn()}
      </div>
    </section>
  );
}
