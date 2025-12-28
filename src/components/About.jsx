import React from 'react'
import "./About.css"
export default function About() {
  return (
    <section id="about" className="section about">
      <div className="container section-grid">
        <div>
          <h2>About Our Clinic</h2>
          <p>
            Siddhartha Health And Multicare Pvt. Ltd. is a modern healthcare
            center dedicated to providing reliable, compassionate, and
            high-quality medical services for the community.
          </p>
          <p>
            With a team of experienced doctors and medical professionals, the
            clinic focuses on delivering patient-centered care supported by
            advanced diagnostics, personalized treatments, and a welcoming
            environment.
          </p>
        </div>
        <div className="about-cards">
          <div className="info-card">
            <h3>Our Mission</h3>
            <p>
              To make quality healthcare accessible, safe, and compassionate for
              every individual and family we serve.
            </p>
          </div>
          <div className="info-card">
            <h3>Our Values</h3>
            <p>
              Empathy, professionalism, trust, and continuous improvement in
              medical excellence.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
