import React from 'react';
import './introText.css'; // Assuming the CSS is in introText.css
import ContactBar from './contactBar';

const IntroText = () => (
  <div className="intro-container">
    <ContactBar />

  <div className="intro-text">
    <p>Hi! I'm Ollie, a PhD student in Computer Vision at the University of Cambridge, supervised by <a href="http://mi.eng.cam.ac.uk/~cipolla/index.htm">Prof. Roberto Cipolla.</a></p>
    <p>I work in <b>3D reconstruction from multiview images</b>, with an interest in using <b>synthetic data</b>.</p>
    <p>Click on the icons below to see what I've been working on!</p>
    
  </div>
  </div>
);

export default IntroText;
