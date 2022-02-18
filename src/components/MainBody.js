//  Imports
import React, {useState} from "react";
import "../Styles/mainbody.css"
import Questions from "./Questions";


export default function MainBody(props) {

  const [subject, setSubject] = useState({
    subject:"",
    style: "faq-body_disappear"})

  const {questions, setQuestion} = props

  // Get Questions Subject
 const questionsArray = questions.map((question) => { if (question.subject === subject.subject) {
  return (
    <article>

      <h3>{question.question}</h3>
      <p>{question.answer}</p>
    </article>
 )
}
 })

const faq = () => {
return (
  <div className="icons">
    <div>
     <img className='Trafic' src='https://i.dlpng.com/static/png/7363099_preview.png' onClick={() => {
        alert("Trafic was Clicked")
        setSubject({
          subject:"Traffic",
          style: "Trafic"})
       }}  />
    </div>   
    <div>
      <img className='Realestate' src='https://cdn-icons-png.flaticon.com/512/69/69954.png'
      onClick={() => {
        alert("Realestate was Clicked")
        setSubject({
          subject:"Realestate",
          style: "Realestate"})
       }} />
    </div>
    <div>
      <img className='Injury'  src='http://nowinnofeepersonalinjurylawyers.com.au/wp-content/uploads/2017/07/Injured-person-icon-for-no-win-no-fee-personal-injury-lawyer-post-296x300.png' onClick={() => {
      alert("Injury was Clicked")
      setSubject({
        subject:"Injury",
        style: "Injury"})
     }} />
    </div>
    <div>
      <img className='Contract' src='https://cdn.iconscout.com/icon/premium/png-256-thumb/contract-law-956798.png' onClick={() => {
      alert("Contract was Clicked")
      setSubject({
        subject:"Contract",
        style: "Contract"})
     }} />
    </div>
    <div>
      <img className='Family' alt="Family"  onClick={() => {
      alert("Family was Clicked")
      setSubject({
        subject:"Family",
        style: "Family"})
     }}
      src='https://static.vecteezy.com/system/resources/thumbnails/004/329/268/small/family-court-glyph-icon-silhouette-symbol-child-custody-family-law-proceedings-divorce-mediation-legal-separation-negative-space-isolated-illustration-vector.jpg' />
    </div>
  </div>
 )
}

  return (
    <section className="mainbody">
        <div className="searchbar-div">
          <form className="searchbar">
            <h2>How can we help you?</h2>
            <input placeholder="Search..."></input>
            {faq()}
          </form>
          
          </div>
          <div id="faq-area" className={subject.style}>
          
          {questionsArray}
          </div>
          
      </section>
  )
}