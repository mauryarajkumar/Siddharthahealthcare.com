import React from 'react'
import "./Contact.css"
export default function Contact() {
  const handleSubmit = event => {
    event.preventDefault()
    alert('Thank you for your message. We will get back to you shortly.')
  }

  return (
    <section id="contact" className="section contact">
      <div className="container contact-grid">
        <div>
          <h2>Contact &amp; Location</h2>
          <p>
            We&apos;re here to help you with appointments, general inquiries, and
            follow-up care.
          </p>

          <div className="contact-details">
            <p>
              <strong>Address:</strong>
              <br />
              Siddharthnagar-7, New Road, Bhairahawa
            </p>
            <p>
              <strong>Phone:</strong>
              <br />
              <a href="tel:+9779821558535">+977 9821558535</a>
            </p>
            <p>
              <strong>Hours:</strong>
              <br />
              Sunday – Friday: 7:00 AM – 8:00 PM
              <br />
              Saturday: 8:00 AM – 8:00 PM
            </p>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <h3>Send Us a Message</h3>
          <label>
            Full Name
            <input type="text" required placeholder="Your name" />
          </label>
          <label>
            Phone / Email
            <input type="text" required placeholder="Your contact details" />
          </label>
          <label>
            Message
            <textarea
              rows="4"
              required
              placeholder="How can we help you?"
            ></textarea>
          </label>
          <button type="submit" className="btn-primary full-width">
            Submit
          </button>
        </form>
      </div>
    </section>
  )
}
