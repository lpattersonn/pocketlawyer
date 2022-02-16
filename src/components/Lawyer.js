import "../Styles/lawyer.css"

export default function Lawyer(props) {
  
 console.log(props.lawyers)

  const lawyerList = props.lawyers.map((lawyer) => {
    console.log(lawyer.name)
    return (
    <div >
      <img src={lawyer.img} alt={lawyer.name} class="lawyerImg"/>
    </div>
  )
  })  

  
 
  return (
    <section id="side-bar">
      <h1>Lawyer List</h1>
      
     {lawyerList}
     
      </section>
  )
}