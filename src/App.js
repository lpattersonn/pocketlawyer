// Imports
import { BrowserRouter as Router, Routes, Route, Switch, Link } from "react-router-dom";

import "./Styles/App.css";

import Chat from "./components/Chat";

import Home from "./components/Home";

import Register from "./components/Register";

import Login from "./components/Login";

function App() {
  return ( 
    // Routes
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sos" element={<Chat />} />
          {/* <Route path="/login" element={<login />} /> */}
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
  )
}

export default App;
