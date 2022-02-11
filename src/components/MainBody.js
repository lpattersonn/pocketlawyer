import react from "react";

export default function MainBody(props) {
  return (
    <section className="mainbody">
        <div className="searchbar-div">
          <form className="searchbar">
            <h2>How can we help you?</h2>
            <input placeholder="Search..."></input>
          </form>
        </div>
        <div>
          <body></body>
        </div>
      </section>
  )
}