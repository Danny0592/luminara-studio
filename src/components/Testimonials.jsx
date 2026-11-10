import React, { useState, useEffect } from 'react';

const testimonials = [
  {
    quote: "Luminara Studio transformó nuestra sesión familiar en una experiencia mágica. Cada foto refleja exactamente quiénes somos. Las tenemos enmarcadas por toda la casa.",
    author: "Familia Rodríguez"
  },
  {
    quote: "Mis fotos de embarazo quedaron más hermosas de lo que jamás imaginé. Me hizo sentir radiante y cómoda en cada momento. Un recuerdo que atesoraré por siempre.",
    author: "Mariana G."
  },
  {
    quote: "La sesión de XV años de mi hija fue un sueño hecho realidad. Las fotos capturaron su alegría y la magia de ese día. Profesionalismo absoluto y un ojo artístico increíble.",
    author: "Patricia L."
  },
  {
    quote: "Contratamos a Luminara para nuestra boda y no pudimos estar más felices. Cada imagen es una obra de arte. Supo capturar los momentos más emotivos sin que nos diéramos cuenta.",
    author: "Carlos & Daniela"
  }
];

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="testimonials-section" id="testimonios">
      <p className="section-label reveal">Testimonios</p>
      <h2 className="section-title reveal">Lo que dicen mis clientes</h2>
      <div className="section-divider reveal"></div>
      
      <div className="testimonials-carousel reveal">
        {testimonials.map((t, index) => (
          <div key={index} className={`testimonial-slide ${currentSlide === index ? 'active' : ''}`}>
            <p className="testimonial-quote">"{t.quote}"</p>
            <p className="testimonial-author">— {t.author}</p>
          </div>
        ))}
      </div>

      <div className="testimonial-dots reveal">
        {testimonials.map((_, index) => (
          <span 
            key={index} 
            className={`dot ${currentSlide === index ? 'active' : ''}`}
            onClick={() => setCurrentSlide(index)}
          ></span>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
