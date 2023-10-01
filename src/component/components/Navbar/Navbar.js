// src/components/Navbar.js

import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import bunnibook from "../../../assets/bunnibook1.png";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <AppBar position="static" className="appbar">
      <Toolbar className="toolbar">
        <Link Link to="/">
          <img className="navbar-logo" src={bunnibook} alt="logo"></img>
        </Link>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
