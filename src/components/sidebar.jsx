import React from 'react';
import './sidebar.css';

const SideBar = () => (
  <div className="sidebar-container">
    <img className="headshot" src="assets/sidebar/headshot-2 icon.jpg" alt="Headshot" />
    <div class="phd-info">PhD Student in Computer Vision</div>
    <div className="location-info">Cambridge, UK</div>
    <div class="cv-link"><a href="/assets/cv/cv_23.pdf" download="OBoyne_CV.pdf">
        CV
        </a></div>

    <a className="contact-link" href="https://www.linkedin.com/in/OllieBoyne">LinkedIn</a>
    <a className="contact-link" href="https://github.com/OllieBoyne">GitHub</a>
    <a className="contact-link" href="mailto:ollieboyne@gmail.com">Email</a>
    
  </div>
);

export default SideBar;