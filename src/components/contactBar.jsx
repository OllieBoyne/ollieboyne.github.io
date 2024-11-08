import React from 'react';
import './contactBar.css';

const ContactBar = () => (
  <div className="contactbar-container">
    <img className="headshot" src="assets/sidebar/headshot-2 icon.jpg" alt="Headshot" />
    <div className="headshot-name-container">

    <div className="info-container">
      <div className="name-phd-location-container">
          <div className="name">Ollie Boyne</div>
          <div className="phd-info">PhD Student</div>
          <div className="location-info">Cambridge, UK</div>
        </div>
      </div>
      <div className="contact-icon-row">
          <a className="contact-icon cv-icon" href="/assets/cv/cv_24.pdf" download="OBoyne_CV.pdf">
            <img src="assets/sidebar/icons/cv.png" alt="Download CV"/>
          </a>
          <a className="contact-icon email-icon" href="mailto:ollieboyne@gmail.com">
            <img src="assets/sidebar/icons/email.png" alt="Email"/>
          </a>
          <a className="contact-icon github-icon" href="https://github.com/OllieBoyne">
            <img src="assets/sidebar/icons/github.png" alt="GitHub Profile"/>
          </a>
          <a className="contact-icon linkedin-icon" href="https://www.linkedin.com/in/ollie-boyne/">
            <img src="assets/sidebar/icons/linkedin.png" alt="LinkedIn"/>
          </a>
        </div>
      </div>
  </div>
);

export default ContactBar;
