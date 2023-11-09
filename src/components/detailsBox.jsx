import React from 'react';
import './detailsBox.css';

const DetailsBox = ({ currentIcon }) => {
  return (
    <div className="details-box" aria-live="polite">
      {currentIcon ? (
        <>
          <h2>{currentIcon.name}</h2>
          <p>{currentIcon.description}</p>
          {currentIcon.link && <a href={currentIcon.link} aria-label={`Learn more about ${currentIcon.name}`}>Learn More</a>}
        </>
      ) : (
        <p>Hover over an icon for details.</p>
      )}
    </div>
  );
}

export default DetailsBox;
