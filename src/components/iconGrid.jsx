import React, { useState, useRef } from 'react';
import './iconGrid.css';

const IconGrid = ({ title, children }) => {
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const gridRef = useRef();

  const onMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - gridRef.current.offsetLeft);
    setScrollLeft(gridRef.current.scrollLeft);
  };

  const onMouseLeave = () => {
    setIsDragging(false);
  };

  const onMouseUp = () => {
    setIsDragging(false);
  };

  const onMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - gridRef.current.offsetLeft;
    const walk = (x - startX) * 2; // The speed of scrolling
    gridRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <div>
      <h1>{title}</h1>
      <div
        ref={gridRef}
        className="icon-grid"
        onMouseDown={onMouseDown}
        onMouseLeave={onMouseLeave}
        onMouseUp={onMouseUp}
        onMouseMove={onMouseMove}
      >
        {children}
      </div>
    </div>
  );
};

export default IconGrid;
