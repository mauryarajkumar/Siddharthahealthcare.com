import React from 'react'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Services from './components/Services.jsx'
import Highlights from './components/Highlights.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import Whatsapp from './components/Whatsapp.jsx'
import NavupperLogo from './components/NavupperLogo.jsx'
import Googlemap from './components/Googlemap.jsx'
import DoctorList from './components/DoctorList.jsx'

export default function App() {
  return (
    <div className="app">
    <NavupperLogo/>
      <Navbar />
      <main>
        <Hero />
          <DoctorList />
         <Services />
        <About />
       
        <Highlights />
        <Googlemap />
        <Contact />
      
        <Whatsapp />
      </main>
      <Footer />
    </div>
  )
}
