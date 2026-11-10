import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className="footer-logo">Luminara <span>Studio</span></div>
      <p style={{ color: 'rgba(255,255,255,0.5)', marginBottom: '0.5rem' }}>
        Fotografía de lujo — Momentos que brillan para siempre
      </p>
      <div className="footer-social">
        <a href="#">Instagram</a>
        <a href="#">Facebook</a>
        <a href="#">Pinterest</a>
        <a href="#">WhatsApp</a>
      </div>
      <p style={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.65rem', marginTop: '1rem' }}>
        © 2026 Luminara Studio. Todos los derechos reservados.
      </p>
    </footer>
  );
};

export default Footer;
