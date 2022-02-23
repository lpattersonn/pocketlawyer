import { useState } from "react";
import axios from "axios";
import "../Styles/loginform.css";
import "../Styles/Login.css";

const projectID = "3c0dd3f9-55c8-417c-b8ae-63797659eaa8";

export default function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const authObject = {
      "Project-ID": projectID,
      "User-Name": username,
      "User-Secret": password,
    };

    try {
      await axios.get("https://api.chatengine.io/chats", {
        headers: authObject,
      });

      localStorage.setItem("username", username);
      localStorage.setItem("password", password);

      window.location.reload();
      setError("");
    } catch (err) {
      setError("Oops, incorrect credentials.");
    }
  };

  return (
    <div className="wrapper">
      <img
          className="login_logo"
          src="https://github.com/lpattersonn/pocketlawyer/blob/main/public/pocketlawyer.png?raw=true"
        />
      <div className="form_div">
        <form className="loginForm" onSubmit={handleSubmit}>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="login_input"
            placeholder="Username"
            required
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="login_input"
            placeholder="Password"
            required
          />
          <div align="center">
            {/* <button type="submit" className="button_login">
              Login
            </button> */}
            <div className="logreg">
                <div>
                  <button type="submit" className="button_login">Login</button>
                </div>
                <div>
                  <button className="button_login"><a href="/register">Signup</a></button>
                </div>
              </div>
          </div>
        </form>
        <h1>{error}</h1>
      </div>
    </div>
  );
}
