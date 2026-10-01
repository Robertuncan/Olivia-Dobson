import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Faq from './components/Faq';
import Footer from './components/Footer';

export default function App() {
  const [selectedService, setSelectedService] = useState('');

  const handleSelectService = (serviceTitle) => {
    setSelectedService(serviceTitle);
  };

  return (
    <div className="site-wrapper">
      <Navbar />
      <main id="main-content">
        <Hero />
        <About />
        <Services onSelectService={handleSelectService} />
        <WhyChooseUs />
        <Testimonials />
        <Faq />
        <Contact selectedService={selectedService} />
      </main>
      <Footer />
    </div>
  );
}
