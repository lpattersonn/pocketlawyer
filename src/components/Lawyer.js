import "../Styles/lawyer.css"

import LawyerList from "./LawyerList"

export default function Lawyer(props) {

 const lawyerCount = props.lawyers.length
  
 console.log(props.lawyers)

  const lawyerList = props.lawyers.map((lawyer) => {
    console.log(lawyer.name)
    // const popup = () => {
    //   return (
    //     <div>
    //       <span class="popuptext" id="myPopup">{lawyer.name}</span>
    //     </div>
    //   )
    // }
    return (
      <div>
      <div className="lawyers-list"  onClick={() => {
      <LawyerList />
        // {popup}
      }}>
      <img src={lawyer.img} alt={lawyer.name} class="lawyerImg"/>
    </div>
    <LawyerList
        id={lawyer.id}
        name={lawyer.name}
        img={lawyer.img}
    />
    </div>
  )
  })  

  console.log(lawyerList)
  
 
  return (
    <section id="side-bar">
      <h4> {lawyerCount} Lawyers Online</h4>
      
     {lawyerList}
     
      </section>
  )
}