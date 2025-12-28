

import React, { useState, useEffect } from "react";

import "./Navbar.css";


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
          <span className="logo-main">Siddhartha</span>
          <span className="logo-sub">Health &amp; Multicare Pvt. Ltd.</span>
        </div>

        {/* Desktop Links */}
        <nav className="nav-links desktop">
          <a href="#hero">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
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
        <a onClick={closeMenu} href="#hero">Home</a>
        <a onClick={closeMenu} href="#about">About</a>
        <a onClick={closeMenu} href="#services">Services</a>
        <a onClick={closeMenu} href="#contact">Contact</a>
      </nav>
    </header>



  );
}
