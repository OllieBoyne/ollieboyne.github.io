import React from 'react';
import './detailsBox.css';

const DetailsBox = ({ icons, currentIcon }) => {
  return (
    <div className="details-box" aria-live="polite">
      {icons.map(icon => (
        <div key={icon.id} style={{ display: currentIcon.id === icon.id ? 'block' : 'none' }}>
          <h2>{icon.name}</h2>
          <p>{icon.description}</p>
          {icon.link && <a href={icon.link} aria-label={`Learn more about ${icon.name}`}>Learn More</a>}
        </div>
      ))}
    </div>
  );
};

export default DetailsBox;
