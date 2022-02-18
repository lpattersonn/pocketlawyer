import react from "react";

import "../Styles/lawyerpop.css"

export default function LawyerList(props) {
  
  return (
    <section id="show-popup">
      <div className='close' onClick={() => {props.setLawyerPopUp({
    name: "",
    img: "",
    description: "",
    style: "closePopUp"
  })}}>
      <img className="close-btn" src='https://icon-library.com/images/close-button-icon/close-button-icon-26.jpg' />
      </div>
      <div>
        <img className='lawyer-pic' src={props.img} />
        <h3>{props.name}</h3>
      </div>
      <div className="desCription">
       <p>{props.description}</p>
      </div>
      <div class="btn-primary">
      <button type="button" class="popup-btn">Contact Now</button>
      </div>
      
    </section>
  );
}
