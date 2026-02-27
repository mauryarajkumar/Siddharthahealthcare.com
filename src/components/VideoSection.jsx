import React, { useState } from "react";
import "./VideoSection.css";
import clinicVideo from "./images/video/Sidharath RE-FINAL.mp4";
// import videoimg from "./images/video-poster.jpg";
export default function VideoSection() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <section className="video-section">
        <div className="container video-grid">

          <div className="video-text">
            <h2>Our Healthcare Journey</h2>
            <p>
              Watch our short documentary showcasing our doctors, facilities,
              and commitment to quality healthcare.
            </p>

            <button className="btn-primary" onClick={() => setOpen(true)}>
              ▶ Watch Video
            </button>
          </div>

          <div className="video-thumbnail" onClick={() => setOpen(true)}>
         {/* <img src={videoimg} alt="Clinic Documentary" /> */}
            {/* <span className="play-btn">▶</span> */}
          </div>

        </div>
      </section>

      {/* VIDEO MODAL */}
      {open && (
        <div className="video-modal">
          <button className="close-btn" onClick={() => setOpen(false)}>
            ✕
          </button>

          <video
            src={clinicVideo}
            controls
            autoPlay
            playsInline
          />
        </div>
      )}
    </>
  );
}
