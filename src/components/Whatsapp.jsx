import React from "react";
import "./Whatsapp.css";

export default function Whatsapp() {
  const phone = "9779766714481"; 
  const message = "Hello, I would like to book an appointment.";

  return (
    <a
      href={`https://wa.me/${phone}?text=${encodeURIComponent(message)}`}
      className="whatsapp-float"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
        alt="WhatsApp"
      />
    </a>
  );
}
