import "./App.css";

function App() {
  return (
    <div className="App">
      {/* Header */}
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

      {/* Laywers online section*/}
      <section id="sidebar">
        
        <p>The area is for showing lawyers online</p>

        {/* user first inital */}
        <article>{/* laywer image */}</article>
      </section>

      {/* This is the main section */}
      <section className="mainbody">
        <div>
          <form>
            <p>This area is for the main body</p>
            <input></input>
          </form>
        </div>
        <div>
          <body></body>
        </div>
      </section>
    </div>
  );
}

export default App;
