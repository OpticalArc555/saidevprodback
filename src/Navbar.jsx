import React, { useState } from "react";
import "./Navbar.css";
import logo from "./assets/Logo.png"; 
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
 
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
 
  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);
 
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="Logo" className="logo" />
        <div className="slogan">
          <h1 className="srdt">
            <span className="s">S</span>
            <span className="r">R</span>
            <span className="d">D</span>
            <span className="t">T</span>
          </h1>
          <p className="tagline">--- A Step Towards Social Change ---</p>
        </div>
      </div>
 
      <div className="menu-icon" onClick={toggleMenu}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>
 
      <ul className={`navbar-links ${menuOpen ? "active" : ""}`}>
        <li><Link to="/" onClick={closeMenu}>Home</Link></li>
        <li><Link to="/about" onClick={closeMenu}>About</Link></li>
        <li><Link to="/projects" onClick={closeMenu}>Projects</Link></li>
        <li><Link to="/gallary" onClick={closeMenu}>Gallery</Link></li>
        <li><Link to="/blog" onClick={closeMenu}>Blog</Link></li>
        <li><Link to="/donate" onClick={closeMenu}>Donate</Link></li>
        <li><Link to="/contact" onClick={closeMenu}>Contact</Link></li>
      </ul>
    </nav>
  );
};
 
export default Navbar;
