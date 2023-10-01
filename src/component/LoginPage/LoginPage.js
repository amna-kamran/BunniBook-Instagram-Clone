import React from "react";
import "./LoginPage.css";
import { TextField } from "@mui/material";
import myImage from "../../assets/bunnibook.png";
import LoginTextField from "./components/TextField";

function LoginPage() {
  return (
    <div className="login-container">
      <div className="column">
        <img src={myImage} className="logo" />
        <LoginTextField placeholder="Enter Username" />
        <LoginTextField placeholder="Enter Password" type="password" />
        <button className="login-button">Login</button>
        <p className="register-link">
          Create a new account <a href="">here</a>
        </p>
      </div>
    </div>
  );
}

export default LoginPage;
