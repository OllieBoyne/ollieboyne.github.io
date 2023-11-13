import React from 'react';
import './introText.css'; // Assuming the CSS is in introText.css
import ContactBar from './contactBar';
import useFitText from 'use-fit-text';


const IntroText = () => {
  const { fontSize, ref } = useFitText();

  return (
    <div className="intro-container">
      <ContactBar />

      <div className="intro-text" ref={ref} style={{ fontSize }}>
        <p>Hi! I'm <b>Ollie</b>, a <b>PhD student</b> in <b>Computer Vision </b> at the <b>University of Cambridge.</b></p>
        <p>Click (& drag sideways) on the icons below to see what I've been working on!</p>
      </div>
    </div>
  );
};


export default IntroText;
