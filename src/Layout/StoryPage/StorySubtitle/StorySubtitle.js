
import React from 'react';
import './StorySubtitle.css';
import Subtitle from '../../../components/Subtitle/Subtitle';

export default ({ children }) => {
  return (
    <div className="StorySubtitle">
      <Subtitle>{children}</Subtitle>
    </div>
  );
}

