
import React from 'react';
import './Subtitle.css';

export default ({children, classes}) => (
  <h2 className={`Subtitle ${classes ? classes : ''}`}>{children}</h2>
);
