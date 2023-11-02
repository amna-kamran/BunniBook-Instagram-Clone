import React from "react";
import "./LoginPage.css";
import myImage from "../../assets/bunnibook.png";
import BunniTextField from "../components/js/TextField";
import { Link } from "react-router-dom";

function LoginPage() {
  return (
    <div className="login-container">
      <div className="column">
        <img src={myImage} className="logo" alt="Logo" />
        <BunniTextField placeholder="Enter username" />
        <BunniTextField placeholder="Enter password" type="password" />
        <Link Link to="/dumpy">
          <button className="login-button">Login</button>
        </Link>

        <p className="register-link">
          Create a new account <Link to="/signup">here</Link>
        </p>
      </div>
    </div>
  );
}

export default LoginPage;
