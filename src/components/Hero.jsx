import React from 'react'
import "./Hero.css"
export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="container hero-grid">
        <div className="hero-text">
          <h1>
            Your Health, <span className="highlight">Our Priority</span>
          </h1>
          <p className="hero-subtitle">
            Siddhartha Health And Multicare Pvt. Ltd. is a modern healthcare
            center in Bhairahawa dedicated to reliable, compassionate, and
            high-quality medical care.
          </p>
          <div className="hero-cta">
            <a href="#contact" className="btn-primary">
              Book an Appointment
            </a>
            <a href="#services" className="btn-secondary">
              View Services
            </a>
          </div>
          <div className="hero-contact">
            <p>
              📍 Siddharthnagar-7, New Road, Bhairahawa
              <br />
              📞 <a href="tel:+9779821558535">+977 9821558535</a>
            </p>
          </div>
        </div>
        <div className="hero-image">
          <div className="doctor-card">
            <div className="doctor-illustration">
              <div className="doctor-circle" />
              <div className="doctor-body" />
              <div className="stethoscope" />
            </div>
            <div className="doctor-text">
              <h3>Experienced Doctors</h3>
              <p>Patient-centered care with advanced diagnostics and treatment.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
