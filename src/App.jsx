

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import NavupperLogo from "./components/NavupperLogo.jsx";
import Whatsapp from "./components/Whatsapp.jsx";

import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Services from "./components/Services.jsx";
import Highlights from "./components/Highlights.jsx";
import Contact from "./components/Contact.jsx";
import Googlemap from "./components/Googlemap.jsx";
import DoctorList from "./components/DoctorList.jsx";
import VideoSection from "./components/VideoSection.jsx";

export default function App() {
  return (
    <Router>
     
      <div className="app">
        <NavupperLogo />
        <Navbar />

        <Routes>
          {/* Home Page */}
          <Route
            path="/"
            element={
              <main>
                <Hero />
                <VideoSection />
                
                 <DoctorList />
                  <Services />
                    <About />
                    <Highlights />
                      <Contact />
                         <Googlemap />
              </main>
            }
          />

          {/* Doctors Page */}
          <Route
            path="/doctors"
            element={
              <main>
                <DoctorList />
              </main>
            }
          />

          {/* Services Page */}
          <Route
            path="/services"
            element={
              <main>
                <Services />
              </main>
            }
          />

          {/* About Page */}
          <Route
            path="/about"
            element={
              <main>
                <About />
                <Highlights />
              </main>
            }
          />

          {/* Contact Page */}
          <Route
            path="/contact"
            element={
              <main>
               
                <Contact />
              </main>
            }
          />

           <Route
            path="/googlemap"
            element={
              <main>
                <Googlemap />
               
              </main>
            }
          />
        </Routes>

        <Whatsapp />
        <Footer />
      </div>
    </Router>
  );
}
