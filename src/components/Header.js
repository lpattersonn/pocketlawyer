import react from "react";

export default function Header(props) {
  return (
    <header>
        <nav className="nav">
          <div className="title">
            <h1>
            <span class="multicolortext">Pocket Lawyer</span>
              </h1>
          </div>
          <div>
            <ul className="nav-list">
              <li>SOS</li>
              <li>Requests</li>
              <li>Find Advice</li>
            </ul>
          </div>
        </nav>
        
      </header>
  )
} 