//  Imports
import axios from "axios";
import React, {useState} from "react";
import "../Styles/mainbody.css"
import Questions from "./Questions";


export default function MainBody(props) {
const[searchInput, setSearchInput] = useState({
  search: ""
});

  const [subject, setSubject] = useState({
    subject:"",
    style: "faq-body_disappear"})

  const {questions, setQuestions} = props

  const [Faq, setFaq] = useState([])

  

  console.log('THIS IS FAQ RESULT', Faq)
  // console.log('This is QUESTION DATA', questions)

  // setQuestion(Faq)
  // setSubject()
  // Get Questions Subject
 const questionsArray = questions.map((question) => { if (question.subject == subject.subject) {
  return (
    <article className="faq_popup-article">
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
     <img className='icon_area' src='https://i.dlpng.com/static/png/7363099_preview.png' onClick={() => {
        // alert("Trafic was Clicked")
        setSubject({
          subject:"Traffic",
          style: "icon_area"})
       }}  />
    </div>   
    <div>
      <img className='icon_area' src='https://cdn-icons-png.flaticon.com/512/69/69954.png'
      onClick={() => {
        // alert("Realestate was Clicked")
        setSubject({
          subject:"Real Estate",
          style: "icon_area"})
       }} />
    </div>
    <div>
      <img className='icon_area'  src='http://nowinnofeepersonalinjurylawyers.com.au/wp-content/uploads/2017/07/Injured-person-icon-for-no-win-no-fee-personal-injury-lawyer-post-296x300.png' onClick={() => {
      // alert("Injury was Clicked")
      setSubject({
        subject:"Injury",
        style: "icon_area"})
     }} />
    </div>
    <div>
      <img className='icon_area' src='https://cdn.iconscout.com/icon/premium/png-256-thumb/contract-law-956798.png' onClick={() => {
      // alert("Contract was Clicked")
      setSubject({
        subject:"Contract",
        style: "icon_area"})
     }} />
    </div>
    <div>
      <img className='icon_area' alt="Family"  onClick={() => {
      // alert("Family was Clicked")
      setSubject({
        subject:"Family",
        style: "icon_area"})
     }}
      src='https://static.vecteezy.com/system/resources/thumbnails/004/329/268/small/family-court-glyph-icon-silhouette-symbol-child-custody-family-law-proceedings-divorce-mediation-legal-separation-negative-space-isolated-illustration-vector.jpg' />
    </div>
  </div>
 )
}

// Imput form submit
const search = function(event) {
  
  axios.get('/searchResult',  {
    params: {
    search: searchInput.search
  }
})
  .then((res) => {
  setFaq(res.data)  
  })
}

// Get event value
const getInputVal = (event) => {
  setSearchInput({
    ...searchInput, 
    [event.target.name]: event.target.value
  });
};
  return (
    <section className="mainbody">
        <div className="searchbar-div">
          <form className="searchbar" disable={searchInput.search.length < 1} onSubmit={(event) => {
            event.preventDefault();
            search(searchInput)
            setQuestions(Faq)
            setSubject({
              subject: searchInput.search,
              style: 'icon_area'
            })
          }}>
            <h2>How can we help you?</h2>
            <input type="text" placeholder="Search..." name="search" value={searchInput.search} onChange={getInputVal} />
            {faq()}
          </form>
          
          </div>
          <div id="faq-area" className={subject.style}>
             <img className="faq_close-btn" onClick={() => {
               
             setSubject({
              subject: "",
              style: "faq-body_disappear"
            })
          }
        } src='https://icon-library.com/images/close-button-icon/close-button-icon-26.jpg' />
        
            {questionsArray}
          </div>

          
      </section>
  )
}