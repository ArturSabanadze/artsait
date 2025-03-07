import React from "react";
import "./Navigation.css"; // Import the CSS file
import logo from "../../assets/logo.jpg"; // Import the logo image

const Navigation = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="Website Logo" />
      </div>
      <ul className="nav-menu">
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Contact</a></li>
      </ul>

      {/* Login / Register Buttons (to be created as a separate component later) */}
      <div className="auth-buttons">
        <button className="btn">Login</button>
        <button className="btn">Register</button>
      </div>
    </nav>
  );
};

export default Navigation;
