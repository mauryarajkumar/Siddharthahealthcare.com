import React from 'react'
import "./Footer.css"
export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer-content">
        <p>© {year} Siddhartha Health And Multicare Pvt. Ltd. All rights reserved.</p>
        <p className="footer-tagline">
          Modern, compassionate healthcare in Bhairahawa.
        </p>
      </div>
    </footer>
  )
}
