
import React, { useState, useEffect } from "react";
import "./Hero.css";

/* 🔹 IMPORT IMAGES */
import pediImg from "../components/images/Specailization/Pedi.png";
import gynoImg from "../components/images/Specailization/Gyno.png";
import entImg from "../components/images/Specailization/Ent.png";
import dermaImg from "../components/images/Specailization/Derma.png";
import orthoImg from "../components/images/Specailization/ortho.png";

export default function Hero() {
  // 🔹 Doctor data
  const doctors = [
    {
      image: pediImg,
      name: "Dr. Dinesh Chaudhary",
      specialty: "👶 बाल रोग विशेषज्ञ (Pediatrician Consultant)",
    },
    {
      image: gynoImg,
      name: "Dr. Sandhya Maharjan",
      specialty: "स्त्री तथा प्रसूति रोग विशेषज्ञ (Gynecologist & Obstetrician)",
    },
    {
      image: entImg,
      name: "Dr. Roshan Acharya",
      specialty: "👂👃👄 कान, नाक, घाँटी विशेषज्ञ (ENT Specialist)",
    },
    {
      image: dermaImg,
      name: "Dr. Meera Shrestha",
      specialty: "🌸 छाला रोग विशेषज्ञ (Dermatologist)",
    },
    {
      image: orthoImg,
      name: "Dr. Keshar Jung Karki",
      specialty: "🦴 हाडजोर्नी विशेषज्ञ (Orthopedic Specialist)",
    },
  ];

  const [index, setIndex] = useState(0);

  // 🔄 Auto slide every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % doctors.length);
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="hero" className="hero">
      <div className="container hero-grid">

        {/* LEFT SIDE TEXT */}
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
              📍 Siddharthnagar-7, New Road, Bhairahawa <br />
              📞 <a href="tel:+9779821558535">+977 9821558535</a>
            </p>
          </div>
        </div>

        {/* RIGHT SIDE DOCTOR CARD */}
        <div className="hero-image">
          <div className="doctor-card">

            <div className="doctor-slider">
              <img
                src={doctors[index].image}
                alt={doctors[index].name}
                className="doctor-photo"
              />
            </div>

            <div className="doctor-text">
              <h3>{doctors[index].name}</h3>
              <p>{doctors[index].specialty}</p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
