// Navbar.js
import React from "react";
import { Link } from "react-router-dom";
import "../components/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1 className="navbar-title">ToonTown Vibes</h1>
      <ul className="navbar-links">
        <li>
          <Link to="/">Home</Link> {/* Link to Home */}
        </li>
        <li>
          <Link to="/about">About</Link> {/* Link to About */}
        </li>
        <li>
          <Link to="/features">Features</Link> {/* Link to Features */}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
