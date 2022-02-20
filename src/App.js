// Imports
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import "./Styles/App.css";

import Chat from "./components/Chat";

import Home from "./components/Home";

function App() {
  return ( 
    // Routes
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sos" element={<Chat />} />
        </Routes>
      </Router>
  )
}

export default App;
