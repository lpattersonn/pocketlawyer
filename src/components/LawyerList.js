import react from "react";

export default function LawyerList(props) {
console.log(props);
  return (
    <div>
      <span class="popuptext" id="myPopup">{props.name}</span>
      <span class="popuptext" id="myPopup">{props.img}</span>
    </div>
  )


}