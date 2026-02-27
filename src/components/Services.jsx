
import React from "react";
import "./Services.css";

const services = [
  {
    title: "बाल रोग विशेषज्ञ (Pediatrician Consultant)",
    desc: "• शिशु तथा बाल स्वास्थ्य जाँच • खोप सेवा • बाल विकास तथा पोषण परामर्श.",
  },
  {
    title: "स्त्री तथा प्रसूति रोग विशेषज्ञ (Gynecologist & Obstetrician)",
    desc: "• महिला स्वास्थ्य जाँच • गर्भावस्था (ANC/PNC) सेवा • महिनावारी तथा हार्मोन समस्या उपचार.",
  },
  {
    title: "कान, नाक, घाँटी विशेषज्ञ (ENT Specialist)",
    desc: "• कान, नाक, घाँटी रोग उपचार • संक्रमण तथा सुनाइ समस्या.",
  },
  {
    title: "हाडजोर्नी विशेषज्ञ (Orthopedic Specialist)",
    desc: "• हाडजोर्नी तथा जोर्नी दुखाइ • ढाड, घुँडा तथा चोटपटक उपचार.",
  },
  {
    title: "छाला रोग विशेषज्ञ (Dermatologist)",
    desc: "• छाला, कपाल तथा नङ सम्बन्धी समस्या • एलर्जी, मुहाँसा, दाग–धब्बा उपचार.",
  },
  {
    title: "फार्मेसी सेवा (Pharmacy)",
    desc: "• सबै प्रकारका औषधि उपलब्ध • चिकित्सकको सल्लाह अनुसार औषधि • गुणस्तरीय र भरपर्दो सेवा.",
  },
  {
    title: "प्रयोगशाला सेवा (Laboratory Service)",
    desc: "• सबै प्रकारका रक्त परीक्षण (Blood Test) • सुगर, प्रेसर, कोलेस्ट्रोल जाँच • पिसाब तथा दिसा परीक्षण • गर्भावस्था परीक्षण • अनुभवी प्राविधिकद्वारा छिटो र भरपर्दो रिपोर्ट.",
  },
  {
    title: "एक्स–रे सेवा (X-Ray Service)",
    desc: "• डिजिटल एक्स–रे सुविधा • हाडजोर्नी, छाती तथा चोटपटक जाँच • चिकित्सकको सल्लाह अनुसार एक्स–रे • छिटो, सुरक्षित र स्पष्ट रिपोर्ट.",
  },
];

export default function Services() {
  return (
    <section id="services" className="section services services">
      <div className="container">
        <h2 className="section-title">Our Services</h2>
        <p className="section-intro">
          We offer essential healthcare services designed to support your
          well-being at every stage of life.
        </p>

        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">✚</div>
              <h3>{service.title}</h3>

              <ul className="service-list">
                {service.desc
                  .split("•")
                  .filter(item => item.trim() !== "")
                  .map((item, i) => (
                    <li key={i}>{item.trim()}</li>
                  ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
