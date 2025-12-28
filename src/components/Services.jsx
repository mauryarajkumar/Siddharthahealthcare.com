import React from 'react'
import "./Services.css"
const services = [
  {
    title: 'General Consultation',
    desc: 'Comprehensive health check-ups and personalized medical advice.'
  },
  {
    title: 'Diagnostics',
    desc: 'Basic lab tests and diagnostic support for accurate treatment.'
  },
  {
    title: 'Family Healthcare',
    desc: 'Preventive and ongoing care for individuals and families.'
  },
  {
    title: 'Chronic Disease Care',
    desc: 'Support and management for diabetes, hypertension, and more.'
  },
  {
    title: 'Emergency First Aid',
    desc: 'Prompt attention to minor emergencies and urgent care needs.'
  },
  {
    title: 'Health Counseling',
    desc: 'Guidance on lifestyle, nutrition, and preventive health.'
  }
]

export default function Services() {
  return (
    <section id="services" className="section services">
      <div className="container">
        <h2 className="section-title">Our Services</h2>
        <p className="section-intro">
          We offer essential healthcare services designed to support your
          well-being at every stage of life.
        </p>
        <div className="services-grid">
          {services.map(service => (
            <div key={service.title} className="service-card">
              <div className="service-icon">✚</div>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
