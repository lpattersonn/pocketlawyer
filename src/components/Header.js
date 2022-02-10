import react from "react";

export default function Header(props) {
  return (
    <header>
        <nav className="nav">
          <div>
            <h1>Pocket Lawyer</h1>
          </div>
          <div>
            <ul className="nav-list">
              <li>SOS</li>
              <li>Requests</li>
              <li>Find Advce</li>
            </ul>
          </div>
        </nav>
        
      </header>
  )
} 