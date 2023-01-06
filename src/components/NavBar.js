import React from "react";
import logo from "../assets/logo.png";

import "../styles/NavBar.css";

function NavBar() {
  return (
    <div className="navbar">
      <img className="navbar-logo" src={logo} alt="logo" />
      <h2>NavBar</h2>
    </div>
  );
}

export default NavBar;
