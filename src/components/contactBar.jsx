import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope, FaFile } from 'react-icons/fa'; // Importing icons
import './contactBar.css';

const ContactBar = () => (
  <div className="contactbar-container">
    <div className="headshot-name-icons-container">
      <img className="headshot" src="assets/sidebar/headshot-2 icon.jpg" alt="Headshot" />
      <div className="name-phd-location-container">
        <div className="name">Ollie Boyne</div>
        <div className="phd-info">PhD Student</div>
        <div className="location-info">Cambridge, UK</div>
      </div>
      <div className="contact-icon-grid">
        <a className="contact-icon cv-icon" href="/assets/cv/cv_23.pdf" download="OBoyne_CV.pdf">
          <div className="contact-icon-overlay">
            <FaFile />
            <span className="contact-icon-text">CV</span>
          </div>
        </a>
        <a className="contact-icon linkedin-icon" href="https://www.linkedin.com/in/OllieBoyne">
          <FaLinkedin />
        </a>
        <a className="contact-icon email-icon" href="mailto:ollieboyne@gmail.com">
          <FaEnvelope />
        </a>
        <a className="contact-icon github-icon" href="https://github.com/OllieBoyne">
          <FaGithub />
        </a>
      </div>
    </div>
  </div>
);

export default ContactBar;
