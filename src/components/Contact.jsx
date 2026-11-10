import React, { useState } from 'react';

const Contact = ({ onSendMessage }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    tel: '',
    type: '',
    message: ''
  });
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);
    setTimeout(() => {
      setIsSending(false);
      onSendMessage();
      setFormData({ name: '', email: '', tel: '', type: '', message: '' });
    }, 1500);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section className="contact-section" id="contacto">
      <p className="section-label reveal">Contacto</p>
      <h2 className="section-title reveal">Agenda tu Sesión</h2>
      <div className="section-divider reveal"></div>
      
      <div className="contact-grid">
        <div className="contact-info reveal">
          <h3>Hablemos de tu proyecto</h3>
          <p>Cada historia merece ser contada con luz, arte y corazón. Cuéntame tus ideas y juntos crearemos las imágenes que siempre soñaste.</p>
          <div className="contact-detail">
            <div className="icon-circle">📍</div>
            <span>Ciudad de México, MX</span>
          </div>
          <div className="contact-detail">
            <div className="icon-circle">📞</div>
            <span>+52 55 1234 5678</span>
          </div>
          <div className="contact-detail">
            <div className="icon-circle">✉️</div>
            <span>hola@luminarastudio.com</span>
          </div>
        </div>

        <form className="contact-form reveal" onSubmit={handleSubmit}>
          <input 
            type="text" 
            name="name"
            placeholder="Nombre completo" 
            required 
            value={formData.name}
            onChange={handleChange}
          />
          <input 
            type="email" 
            name="email"
            placeholder="Correo electrónico" 
            required 
            value={formData.email}
            onChange={handleChange}
          />
          <input 
            type="tel" 
            name="tel"
            placeholder="Teléfono"
            value={formData.tel}
            onChange={handleChange}
          />
          <select 
            name="type"
            required 
            value={formData.type}
            onChange={handleChange}
          >
            <option value="" disabled>Tipo de sesión</option>
            <option value="Familiar">Familiar</option>
            <option value="Embarazo">Embarazo</option>
            <option value="Bebés">Bebés</option>
            <option value="Matrimonio">Matrimonio</option>
            <option value="XV Años">XV Años</option>
            <option value="Personalizada">Personalizada</option>
          </select>
          <textarea 
            name="message"
            placeholder="Cuéntame sobre tu sesión ideal..."
            value={formData.message}
            onChange={handleChange}
          ></textarea>
          <button type="submit" disabled={isSending}>
            {isSending ? 'Enviando...' : 'Enviar mensaje'}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
