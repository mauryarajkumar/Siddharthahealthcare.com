import React from "react";
import "./DoctorList.css";
import pediimg from "../components/images/Dr. Dinesh Chaudhary.jpeg"
import gynoImg from "../components/images/Dr Shandhya.jpeg"
import entImg from "../components/images/Dr Roshan.jpeg"
import dermaImg from "../components/images/Dr meera.jpeg"
import orthoImg from "../components/images/Dr Keshar Jung Karki.jpeg"



const WHATSAPP_NUMBER = "9779766714481"; 

const doctors = [
  {
    name: "Dr. Dinesh Chaudhary",
    specialization: "बाल रोग विशेषज्ञ (Pediatrician Consultant)",
    // experience: "12+ Years Experience",
    image: pediimg
  },
   {
    name: "Dr.Sandhya Maharjan ",
    specialization: "👩‍⚕️ स्त्री तथा प्रसूति रोग विशेषज्ञ (Gynecologist & Obstetrician)",
    // experience: "10+ Years Experience",
    image:gynoImg
  },
   {
    name: "Dr. Roshan Acharya",
    specialization: "👂👃👄 कान, नाक, घाँटी विशेषज्ञ (ENT Specialist)",
    // experience: "10+ Years Experience",
    image: entImg
  },
   {
    name: "Dr. Meera Shrestha",
    specialization: "🌸 छाला रोग विशेषज्ञ (Dermatologist)",
    // experience: "8+ Years Experience",
    image: dermaImg
  },
  {
    name: "Dr. Keshar Jung Karki",
    specialization: "🦴 हाडजोर्नी विशेषज्ञ (Orthopedic Specialist)",
    // experience: "10+ Years Experience",
    image: orthoImg
  },
 
 
];

function DoctorList() {

 const handleWhatsApp = (doctorName) => {
    const message = `Hello, I would like to book an appointment with ${doctorName}.`;
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <section id="doctorsit" className="doctor-section">
      <h2 className="doctor-title">Our Specialist Doctors</h2>

      <div className="doctor-grid">
        {doctors.map((doc, index) => (
          <div className="doctor-card" key={index}>
            <div className="doctor-img">
              <img src={doc.image} alt={doc.name} />
            </div>

            <div className="doctor-info">
              <h3>{doc.name}</h3>
              <p className="specialization">{doc.specialization}</p>
              <p className="experience">{doc.experience}</p>
              <button className="btn-appointment" onClick={() => handleWhatsApp(doc.name)}>
                Book Appointment
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default DoctorList;
