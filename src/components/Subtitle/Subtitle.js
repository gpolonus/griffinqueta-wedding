
import React from 'react';
import './Subtitle.css';

export default ({children, classes, color}) => (
  <h2 className={`Subtitle ${classes ? classes : ''}`} style={{ color }}>{children}</h2>
);
