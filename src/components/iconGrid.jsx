// IconGrid.js
import React from 'react';
import './iconGrid.css'; // Assuming you have separate CSS for IconGrid

const IconGrid = ({ title, children }) => (
  <div>
    <h1>{title}</h1>
    <div className="icon-grid">
      {children}
    </div>
  </div>
);

export default IconGrid;
