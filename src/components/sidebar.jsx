import React from 'react';
import './sidebar.css';

const SideBar = () => (
  <div className="sidebar-container">
    <img className="headshot" src="assets/sidebar/headshot-2 icon.jpg" alt="Headshot" />
    PhD Student in Computer Vision
    CV [Link]

    <a className="contact-link" href="https://www.linkedin.com/in/OllieBoyne">LinkedIn</a>
    <a className="contact-link" href="https://github.com/OllieBoyne">GitHub</a>
    <a className="contact-link" href="mailto:ollieboyne@gmail.com">Email</a>
    <a className="contact-link">Cambridge, UK</a>
  </div>
);

export default SideBar;