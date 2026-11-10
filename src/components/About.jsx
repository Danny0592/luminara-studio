import React from 'react';

const About = () => {
  return (
    <section className="about-section" id="sobre">
      <p className="section-label reveal">Conóceme</p>
      <h2 className="section-title reveal">Sobre el Estudio</h2>
      <div className="section-divider reveal"></div>
      <div className="about-grid">
        <div className="about-image-wrapper reveal">
          <img 
            src="https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=800&q=80" 
            alt="Fotógrafa profesional" 
            loading="lazy" 
          />
        </div>
        <div className="about-content reveal">
          <h3>La mirada detrás de la lente</h3>
          <p>Con más de una década de experiencia, he dedicado mi vida a congelar los momentos más preciosos: la ternura de un recién nacido, la complicidad de una familia, la magia de una boda o la ilusión de unos XV años.</p>
          <p>Mi enfoque combina la elegancia atemporal con una sensibilidad moderna, creando imágenes que no solo se ven hermosas, sino que se sienten profundamente. Cada sesión es una experiencia personalizada donde la confianza y la naturalidad son protagonistas.</p>
          <div className="about-stats">
            <div>
              <div className="stat-number">+500</div>
              <div className="stat-label">Sesiones</div>
            </div>
            <div>
              <div className="stat-number">12</div>
              <div className="stat-label">Años de exp.</div>
            </div>
            <div>
              <div className="stat-number">98%</div>
              <div className="stat-label">Clientes felices</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
