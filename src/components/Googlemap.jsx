import React from "react";
import "./Googlemap.css";

function Googlemap() {
  return (
    <section id="googlemap" className="map-section">
      <div className="map-container">

        {/* Google Maps Embed (Correct URL) */}
        <iframe
          title="Siddhartha Health & Multicare Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3526.984835088015!2d83.45120831506522!3d27.514248682870792!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39969b0491af527f%3A0x340f92c9045fbd4e!2sSiddhartha%20Health%20And%20Multicare%20Pvt.%20Ltd!5e0!3m2!1sen!2snp!4v1700000000000
"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>

      </div>
    </section>
  );
}

export default Googlemap;
