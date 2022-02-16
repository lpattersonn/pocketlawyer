
import "./Styles/App.css";

import Header from "./components/Header";

import Lawyer from "./components/Lawyer";

import MainBody from "./components/MainBody";

import Chatbox from "./components/Chatbox";

import "./Styles/Chatbox.css";

import "./Styles/message.css";

import "./Styles/user-input.css";

import "./Styles/chat-window.css";


import ChatWindow from './components/ChatWindow';

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
        <ChatWindow />
      </div>
    </div> 
  );
}

export default App;
