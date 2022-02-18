import react from "react";

import "../Styles/mainbody.css"
import Questions from "./Questions";

export default function MainBody(props) {

  // function result(subject) {
  //   for (let result of props.questions) {
  //     if 
  //   }

  // }

  const faq = props.questions.map((result) => {

return (
  <div>
    {/* <div id={lawyer.name}>
  </div> */}
  <div className="lawyers-list"  onClick={() => {props.setLawyerPopUp({
   question: props.question,
   answer: props.answer,
   subject: props.subject,
   style: "temp"
  })}} >

   {result.subject == 'Traffic' ?  
   <Questions
   question={result.question}
   answer={result.answer}
   />
     : null}
   
</div>

</div>
)
})

  return (
    <section className="mainbody">
        <div className="searchbar-div">
          <form className="searchbar">
            <h2>How can we help you?</h2>
            <input placeholder="Search..."></input>
            <div className="icons">
            <div>
              {/* <p>"circle 1"</p> */}
              {/* <img className='trafic'  src='https://i.dlpng.com/static/png/7363099_preview.png' onClick={() => {result('Traffic', props.questions)}}/> */}
            </div>
            <div>
            <img className='realestate'  src='https://cdn-icons-png.flaticon.com/512/69/69954.png' />
            </div>
            <div>
            <img className='injury'  src='http://nowinnofeepersonalinjurylawyers.com.au/wp-content/uploads/2017/07/Injured-person-icon-for-no-win-no-fee-personal-injury-lawyer-post-296x300.png' />
            </div>
            <div>
            <img className='contract'  src='https://cdn.iconscout.com/icon/premium/png-256-thumb/contract-law-956798.png' />
            </div>
            <div>
            <img className='family'  src='https://static.vecteezy.com/system/resources/thumbnails/004/329/268/small/family-court-glyph-icon-silhouette-symbol-child-custody-family-law-proceedings-divorce-mediation-legal-separation-negative-space-isolated-illustration-vector.jpg' />
            </div>
            </div>
          </form>
        </div>
         
      </section>
  )
}