
import "./Styles/App.css";

import Header from "./components/Header";

import Lawyer from "./components/Lawyer";

import MainBody from "./components/MainBody";

import Chatbox from "./components/Chatbox";

import "./Styles/Chatbox.css";

function App() {
  return (
    <div className="App">
      {/* Header */}
      <Header />
      
      <div class="main">
      {/* Laywers online section*/}
      <Lawyer />

      {/* This is the main section */}
      <MainBody />
      </div>
      <div>
        <Chatbox />
      </div>
    </div> 
  );
}

export default App;
