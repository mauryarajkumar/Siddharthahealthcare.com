import React from 'react'
import "./Highlights.css"
export default function Highlights() {
  return (
    <section className="section highlights">
      <div className="container highlights-grid">
        <div className="highlight-item">
          <h3>Patient-Centered Care</h3>
          <p>
            We listen, understand, and treat every patient with respect and
            empathy.
          </p>
        </div>
        <div className="highlight-item">
          <h3>Qualified Professionals</h3>
          <p>
            Experienced medical team focused on safe and evidence-based
            practice.
          </p>
        </div>
        <div className="highlight-item">
          <h3>Easy Access</h3>
          <p>
            Conveniently located at Siddharthnagar-7, New Road, Bhairahawa with
            flexible hours.
          </p>
        </div>
      </div>
    </section>
  )
}
