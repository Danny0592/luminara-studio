import React from 'react';

const services = [
  {
    title: 'Familia',
    image: 'https://images.unsplash.com/photo-1519689680058-324335c77eba?w=600&q=80',
    description: 'Retratos que capturan la conexión y el amor entre los tuyos.'
  },
  {
    title: 'Embarazo',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&q=80',
    description: 'La belleza de la maternidad en su forma más pura y radiante.'
  },
  {
    title: 'Bebés',
    image: 'https://images.unsplash.com/photo-1519689680058-324335c77eba?w=600&q=80',
    description: 'Los primeros días, llenos de inocencia, ternura y sueños.'
  },
  {
    title: 'Matrimonio',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=600&q=80',
    description: 'El día más importante de sus vidas, narrado en imágenes eternas.'
  },
  {
    title: 'XV Años',
    image: 'https://images.unsplash.com/photo-1464699908537-0954e50791ee?w=600&q=80',
    description: 'El brillo de una celebración inolvidable llena de sueños y magia.'
  },
  {
    title: 'Personalizada',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80',
    description: 'Tu visión, tu historia. Creamos la sesión que siempre soñaste.'
  }
];

const Services = () => {
  return (
    <section className="services-section" id="servicios">
      <p className="section-label reveal">Servicios</p>
      <h2 className="section-title reveal">Sesiones Fotográficas</h2>
      <div className="section-divider reveal"></div>
      <p className="section-subtitle reveal">Cada sesión está diseñada para reflejar la esencia única de cada momento, con un estilo editorial, cálido y sofisticado.</p>

      <div className="services-grid">
        {services.map((service, index) => (
          <div className="service-card reveal" key={index}>
            <img className="service-card-image" src={service.image} alt={service.title} loading="lazy" />
            <div className="service-card-overlay"></div>
            <div className="service-card-info">
              <h4>{service.title}</h4>
              <div className="service-line"></div>
              <p>{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
