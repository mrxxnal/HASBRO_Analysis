import React from "react";
import "../styles/style.css";
import hasbroLogo from "../assets/hasbro_logo.png"; // Ensure correct path

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo-container">
        <img src={hasbroLogo} alt="Hasbro Logo" className="logo-img" />
        <span className="logo">Hasbro Analysis</span>
      </div>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About Hasbro</a></li>
        <li><a href="/data">Data Analytics</a></li>
        <li><a href="/trending">Top Trending</a></li>
        <li><a href="/buy">Where to Buy</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;