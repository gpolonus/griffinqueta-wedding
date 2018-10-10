
import React from 'react';
import './StoryTitle.css';
import Title from '../../../components/Title/Title';

export default ({ children }) => {
  return (
    <div className="StoryTitle">
      <Title>{children}</Title>
    </div>
  );
}

