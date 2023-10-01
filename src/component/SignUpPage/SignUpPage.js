import React from "react";
import "./SignUpPage.css";
import myImage from "../../assets/bunnibook1.png";
import BunniTextField from "../components/TextField";
import { Link } from "react-router-dom";
function SignUpPage() {
  return (
    <div className="login-container">
      <div className="column">
        <img src={myImage} className="signuplogo" alt="Logo" />
        <BunniTextField placeholder="Enter name" />
        <BunniTextField placeholder="Enter email" type="email" />
        <BunniTextField placeholder="Enter password" type="password" />
        <Link Link to="/dumpy">
          <button className="login-button">Sign Up</button>
        </Link>

        <p className="register-link">
          Already have an account?
          <center>
            <Link to="/">Login</Link>
          </center>
        </p>
      </div>
    </div>
  );
}
export default SignUpPage;
