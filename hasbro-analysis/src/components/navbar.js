import React from "react";
import { Link } from "react-router-dom"; // ✅ Import Link
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
        <li><Link to="/">Home</Link></li>           {/* ✅ Link to slash */}
        <li><Link to="/about">About Hasbro</Link></li>
        <li><Link to="/data">Data Analytics</Link></li>
        <li><Link to="/trending">Top Trending</Link></li>
        <li><Link to="/buy">Where to Buy</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;