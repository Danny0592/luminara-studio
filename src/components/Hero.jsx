import React from 'react';

const Hero = () => {
  return (
    <section className="hero" id="inicio">
      <div className="hero-bg"></div>
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <p className="hero-subtitle">Fotografía de lujo en México</p>
        <h1 className="hero-title">Capturando <em>instantes</em><br />que duran para siempre</h1>
        <p className="hero-text">Especialista en sesiones familiares, embarazo, bebés, bodas y XV años. Cada imagen cuenta una historia única llena de emoción y elegancia.</p>
        <div className="hero-buttons">
          <a href="#galeria" className="btn btn-primary">Ver Galería</a>
          <a href="#contacto" className="btn btn-outline">Agendar Sesión</a>
        </div>
      </div>
      <div className="scroll-indicator">
        <span>Desliza</span>
        <div className="scroll-line"></div>
      </div>
    </section>
  );
};

export default Hero;
