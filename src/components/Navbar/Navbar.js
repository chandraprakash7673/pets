import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo.png";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">

      <div className="navbar-logo">
        <Link to="/">
          <img src={Logo} alt="logo" />
        </Link>
      </div>
      <ul className="navbar">
        <li>
          <Link to="/pet-services">Pet Services</Link>
        </li>
        <li>
          <Link to="/pet-essentials">Pet Essentials</Link>
        </li>
        <li>
          <Link to="/pet-health">Pet Health</Link>
        </li>
        <li>
          <Link to="/about-us">About Us</Link>
        </li>
        <li>
          <Link to="/join">Join Us</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
