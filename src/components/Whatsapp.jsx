
import React from "react";
import "./Whatsapp.css";

export default function Whatsapp() {
  const phone = "9779766714481";
  const message = "Hello, I would like to book an appointment.";

  return (
    <div className="whatsapp-wrapper">
      <a
        href={`https://wa.me/${phone}?text=${encodeURIComponent(message)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-link"
      >
        <div className="whatsapp-text">
          How may I help you?
        </div>

        <div className="whatsapp-button">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
            alt="WhatsApp"
          />
        </div>
      </a>
    </div>
  );
}