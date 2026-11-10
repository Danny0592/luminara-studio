import React, { useState } from 'react';

const galleryImages = [
  { src: 'https://images.unsplash.com/photo-1554048612-b6a482bc67e5?w=600&q=80', cat: 'familia', title: 'Familia' },
  { src: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&q=80', cat: 'embarazo', title: 'Embarazo' },
  { src: 'https://images.unsplash.com/photo-1519689680058-324335c77eba?w=600&q=80', cat: 'bebes', title: 'Bebés' },
  { src: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=600&q=80', cat: 'matrimonio', title: 'Matrimonio' },
  { src: 'https://images.unsplash.com/photo-1464699908537-0954e50791ee?w=600&q=80', cat: 'xv', title: 'XV Años' },
  { src: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?w=600&q=80', cat: 'familia', title: 'Familia' },
  { src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80', cat: 'personalizada', title: 'Retrato' },
  { src: 'https://images.unsplash.com/photo-1529636798458-92182e662485?w=600&q=80', cat: 'bebes', title: 'Bebés' },
  { src: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=600&q=80', cat: 'matrimonio', title: 'Boda' },
  { src: 'https://images.unsplash.com/photo-1609220136736-443140cffec6?w=600&q=80', cat: 'xv', title: 'XV' },
  { src: 'https://images.unsplash.com/photo-1554048612-b6a482bc67e5?w=600&q=80', cat: 'embarazo', title: 'Maternidad' },
  { src: 'https://images.unsplash.com/photo-1554048612-b6a482bc67e5?w=600&q=80', cat: 'familia', title: 'Familia' },
];

const Gallery = ({ onOpenLightbox }) => {
  const [filter, setFilter] = useState('all');

  const filteredImages = galleryImages.filter(img => filter === 'all' || img.cat === filter);

  return (
    <section className="gallery-section" id="galeria">
      <p className="section-label reveal">Portafolio</p>
      <h2 className="section-title reveal">Galería de Trabajos</h2>
      <div className="section-divider reveal"></div>

      <div className="gallery-filter reveal">
        {['all', 'familia', 'embarazo', 'bebes', 'matrimonio', 'xv'].map(cat => (
          <button
            key={cat}
            className={`filter-btn ${filter === cat ? 'active' : ''}`}
            onClick={() => setFilter(cat)}
          >
            {cat === 'all' ? 'Todas' : cat === 'xv' ? 'XV Años' : cat.charAt(0).toUpperCase() + cat.slice(1)}
          </button>
        ))}
      </div>

      <div className="gallery-grid reveal">
        {galleryImages.map((img, index) => (
          <div
            key={index}
            className={`gallery-item ${filter !== 'all' && img.cat !== filter ? 'hidden' : ''}`}
            onClick={() => onOpenLightbox(img.src)}
          >
            <img src={img.src} alt={img.title} loading="lazy" />
            <div className="gallery-item-overlay"><span>{img.title}</span></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
