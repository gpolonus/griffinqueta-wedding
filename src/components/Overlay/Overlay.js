
import React from 'react';
import './Overlay.css';

export default ({ color, opacity }) => {
  return (
    <div className="Overlay" style={{backgroundColor: color, opacity}}></div>
  );
}

