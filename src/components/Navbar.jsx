import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuActive, setIsMenuActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuActive(!isMenuActive);
  const closeMenu = () => setIsMenuActive(false);

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <a href="#" className="logo">Luminara <span>Studio</span></a>
      
      <ul className={`nav-links ${isMenuActive ? 'active' : ''}`}>
        <li><a href="#inicio" onClick={closeMenu}>Inicio</a></li>
        <li><a href="#sobre" onClick={closeMenu}>Sobre mí</a></li>
        <li><a href="#servicios" onClick={closeMenu}>Servicios</a></li>
        <li><a href="#galeria" onClick={closeMenu}>Galería</a></li>
        <li><a href="#testimonios" onClick={closeMenu}>Testimonios</a></li>
        <li><a href="#contacto" className="btn-nav" onClick={closeMenu}>Contacto</a></li>
      </ul>

      <div className={`hamburger ${isMenuActive ? 'active' : ''}`} onClick={toggleMenu}>
        <span></span><span></span><span></span>
      </div>
    </nav>
  );
};

export default Navbar;
