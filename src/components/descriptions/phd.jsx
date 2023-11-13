// FoundDescription.jsx
import React from 'react';
import './descriptions.css';

export const FoundDescription = () => (
  <div>
    <p className="cite-title">FOUND: Foot Optimisation With Uncertain Normals For Surface Deformation Using Synthetic Data</p>
    <p className="cite-authors">Oliver Boyne, Gwangbin Bae, James Charles, Roberto Cipolla - WACV 2024</p>
    <p>Surface normal prediction (trained from synthetic data), followed by 3D shape reconstruction fusing multiview normals and uncertainty.</p>
    <img src="https://www.ollieboyne.com/FOUND/images/itw/sliders.gif" alt="Surface normal predictions on in-the-wild foot images"/>
  </div>
);

export const SynFootDescription = () => (
  <div>
    <p><b>50,000</b> synthetic foot renders for reconstruction tasks.</p>
    <img src="assets/research/SynFootSplash.gif" alt="SynFoot synthetic dataset"/>
  </div>
);

export const FindDescription = () => (
    <div>
      <p className="cite-title">FIND: An Unsupervised Implicit 3D Model Of Articulated Human Feet</p>
      <p className="cite-authors">Oliver Boyne, James Charles, Roberto Cipolla - BMVC 2022</p>
      <p>An implicit <b>generative foot model</b> constructed from <b>high resolution foot scans</b>.</p>

      <iframe title="FIND Video" className="video-frame" width="560" height="315" src="https://www.youtube.com/embed/ehp0z-u7zXg?si=FIjwbIXNUDP1vlyI" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>

    </div>
    );
    
