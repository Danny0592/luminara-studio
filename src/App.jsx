import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Lightbox from './components/Lightbox';
import CustomCursor from './components/CustomCursor';

function App() {
  const [lightboxSrc, setLightboxSrc] = useState(null);
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    const revealElements = document.querySelectorAll('.reveal');
    const observerOptions = { threshold: 0.15, rootMargin: '0px 0px -40px 0px' };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    revealElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const handleSendMessage = () => {
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3500);
  };

  return (
    <div className="App">
      <CustomCursor />
      <Navbar />
      
      <main>
        <Hero />
        <About />
        <Services />
        <Gallery onOpenLightbox={setLightboxSrc} />
        <Testimonials />
        <Contact onSendMessage={handleSendMessage} />
      </main>

      <Footer />

      <Lightbox src={lightboxSrc} onClose={() => setLightboxSrc(null)} />
      
      <div className={`toast ${showToast ? 'show' : ''}`}>
        ¡Mensaje enviado con éxito! ✨
      </div>
    </div>
  );
}

export default App;
