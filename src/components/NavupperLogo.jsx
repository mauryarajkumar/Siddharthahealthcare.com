import React from "react";
import "./NavupperLogo.css";
import headerimg from "../components/images/Header.jpeg"
import { FaFacebookF, FaWhatsapp, FaPhoneAlt } from "react-icons/fa";

function NavupperLogo() {
  return (
    <header className="navbar-top">
      <div className="navbar-container">
        
        {/* Logo */}
        <div className="navbar-logo">
          <img
            src={headerimg}
            alt="Siddhartha Health & Multicare"
          />
        </div>

        {/* Social Links */}
        <div className="navbar-social">
          <a
            href="https://www.facebook.com/siddharthamulticare"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <FaFacebookF />
          </a>

          <a
            href="https://wa.me/+9779766714481"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
          >
            <FaWhatsapp />
          </a>

          <a href="tel:+9779821558535" aria-label="Call">
            <FaPhoneAlt />
          </a>
        </div>
      </div>
    </header>
  );
}

export default NavupperLogo;
