import "../Styles/lawyer.css"

export default function Lawyer(props) {

 const lawyerCount = props.lawyers.length

// Individual Lawyers
  const lawyerList = props.lawyers.map((lawyer) => {

    return (
      <div>
        {/* <div id={lawyer.name}>
      </div> */}
      <div className="lawyers-list"  onClick={() => {props.setLawyerPopUp({
        name: lawyer.name,
        img: lawyer.img,
        focus: lawyer.focus,
        description: lawyer.description,
        style: "temp"
      })}} >
        <img src={lawyer.img} alt={lawyer.name} class="lawyerImg"/>
        <p>
          {lawyer.focus}
        </p>
      
    </div>
   
    </div>
  )
  })

// Lawyer list Section 
  return (
    <section id="side-bar">
      <h4> {lawyerCount} Lawyers Online <br />
      Choose A Lawyer
      </h4>
      
     {lawyerList}
     
      </section>
  )
}