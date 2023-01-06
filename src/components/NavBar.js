import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

import "../styles/NavBar.css";

function NavBar() {
  return (
    <div className="navbar">
      <img className="navbar-logo" src={logo} alt="logo" />
      <ul className="navbar-links">
        <li className="navbar-links-item">
          <Link className="navbar-links-link" to="/">
            Properties
          </Link>
        </li>
        <li className="navbar-links-item">
          <Link className="navbar-links-link" to="/add-property">
            Add Property
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
