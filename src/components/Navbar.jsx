

import React, { useState, useEffect } from "react";

import "./Navbar.css";
import logo from "../components/images/logo-removebg-preview.png"

export default function Navbar() {


  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const closeMenu = () => setMenuOpen(false);

// auto hide the menu when the navlist clicked
useEffect(() => {
  document.body.style.overflow = menuOpen ? "hidden" : "auto";
}, [menuOpen]);

  return (
    
    <header className="navbar">
      <div className="container nav-content">

        {/* Logo */}
       <div className="logo">
  <img
    src={logo}
    alt="Siddhartha Health & Multicare"
    className="logo-img"
  />

  <div className="logo-text">
    <span className="logo-main">Siddhartha</span>
    <span className="logo-sub">Health &amp; Multicare Pvt. Ltd.</span>
  </div>
</div>


        {/* Desktop Links */}
        <nav className="nav-links desktop">
          <a href="#">Home</a>
           <a href="#doctorsit">Doctor's</a>
            <a href="#services">Services</a>
          <a href="#about">About</a>
         
          <a href="#contact">Contact</a>
           <a href="#googlemap">Google Map</a>
        </nav>

        {/* Hamburger Button */}
        <button
          className={`menu-btn ${menuOpen ? "open" : ""}`}
          onClick={toggleMenu}
          aria-label="Menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <nav className={`mobile-menu ${menuOpen ? "show" : ""}`}>
        <a onClick={closeMenu} href="#">Home</a>
      
        <a onClick={closeMenu} href="#doctorsit">Doctor's</a>
         <a onClick={closeMenu} href="#services">Services</a>
        <a onClick={closeMenu} href="#about">About</a>
       
        <a onClick={closeMenu} href="#contact">Contact</a>
         <a onClick={closeMenu} href="#googlemap">Google Map</a>
      </nav>
    </header>



  );
}
