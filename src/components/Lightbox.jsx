import React from 'react';

const Lightbox = ({ src, onClose }) => {
  if (!src) return null;

  return (
    <div className={`lightbox active`} onClick={onClose}>
      <button className="lightbox-close" onClick={onClose}>&times;</button>
      <img src={src.replace('w=600', 'w=1200')} alt="Vista ampliada" onClick={(e) => e.stopPropagation()} />
    </div>
  );
};

export default Lightbox;
