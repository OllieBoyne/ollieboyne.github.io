// FoundDescription.jsx
import React from 'react';
import './descriptions.css';

export const FoundDescription = () => (
  <div>
    <p><i>FOUND: Foot Optimisation With Uncertain Normals For Surface Deformation Using Synthetic Data</i></p>
    <p><i>Oliver Boyne, Gwangbin Bae, James Charles, Roberto Cipolla</i></p>
    <p className="cite-end"><i>WACV 2024</i></p>
    <p>Surface normal prediction (trained from synthetic data), followed by 3D shape reconstruction fusing multiview normals and uncertainty.</p>
    <img src="https://www.ollieboyne.com/FOUND/images/itw/sliders.gif"/>
  </div>
);

export const SynFootDescription = () => (
  <div>
    <p><b>50,000</b> synthetic foot renders for reconstruction tasks.</p>
    <img src="assets/research/SynFootSplash.gif"/>
  </div>
);

export const FindDescription = () => (
    <div>
      <p><i>FIND: An Unsupervised Implicit 3D Model Of Articulated Human Feet</i></p>
      <p><i>Oliver Boyne, James Charles, Roberto Cipolla</i></p>
      <p className="cite-end"><i>BMVC 2022</i></p>
      <p>Building a generative model for 3D shape reconstruction.</p>

      <iframe title="FIND Video" className="video-frame" width="560" height="315" src="https://www.youtube.com/embed/ehp0z-u7zXg?si=FIjwbIXNUDP1vlyI" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

    </div>
    );
    
