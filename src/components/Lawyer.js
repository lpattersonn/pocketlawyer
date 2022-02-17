import "../Styles/lawyer.css"

export default function Lawyer(props) {

 const lawyerCount = props.lawyers.length
  
 //console.log(props.lawyers)

  const lawyerList = props.lawyers.map((lawyer) => {
  //  console.log(lawyer.name)
    
    function popup(value) {
      console.log(value)
      document.getElementById("List").style.display ="none";
    };

    return (
      <div>
        <div id={lawyer.name}>
      </div>
      <div className="lawyers-list"  onClick={() => {props.setLawyerPopUp({
        name: lawyer.name,
        img: lawyer.img,
        description: "This will be the location for the lawyer list.",
        style: "temp"
      })}} >
        <img src={lawyer.img} alt={lawyer.name} class="lawyerImg"/>
      
    </div>
   
    </div>
  )
  })  

  //console.log(lawyerList)
  
 
  return (
    <section id="side-bar">
      <h4> {lawyerCount} Lawyers Online</h4>
      
     {lawyerList}
     
      </section>
  )
}