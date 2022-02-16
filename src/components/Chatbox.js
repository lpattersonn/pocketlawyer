import react from "react";



export default function Chatbox(props) {
  return (
  <section className="chatbox">
<div className="coontainer">
  {/* <img src="/w3images/bandmember.jpg" alt="Avatar" style="width:100%;" /> */}
  <p>Hello. How are you today?</p>
  <span className="time-right">11:00</span>
</div>

<div className="coontainer darker">
  {/* <img src="/w3images/avatar_g2.jpg" alt="Avatar" className="right" style="width:100%;" /> */}
  <p>Hey! I'm fine. Thanks for asking!</p>
  <span className="time-left">11:01</span>
</div>

<div className="coontainer">
  {/* <img src="/w3images/bandmember.jpg" alt="Avatar" style="width:100%;" /> */}
  <p>Sweet! So, what do you wanna do today?</p>
  <span className="time-right">11:02</span>
</div>

<div className="coontainer darker">
  {/* <img src="/w3images/avatar_g2.jpg" alt="Avatar" className="right" style="width:100%;" /> */}
  <p>Nah, I dunno. Play soccer.. or learn more coding perhaps?</p>
  <span className="time-left">11:05</span>
</div>


  </section>
   
  )

}