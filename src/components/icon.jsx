import React from 'react';
import './icon.css'; // Assuming you have separate CSS for Icon

const Icon = ({ text, imgSrc, onHover, isActive }) => (
  <div 
    className={`icon ${isActive ? 'active' : ''}`}
    onMouseEnter={onHover}
    onMouseLeave={() => onHover(null)}
  >
    <img src={imgSrc} alt={text} className="icon-image" />
    <p className="icon-text">{text}</p>
  </div>
);

export default Icon;