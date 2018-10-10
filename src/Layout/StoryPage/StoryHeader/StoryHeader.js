
import React from 'react';
import './StoryHeader.css';
import StoryLinks from './StoryLinks/StoryLinks';
import StoryTitle from '../StoryTitle/StoryTitle';

export default ({ path, changePath }) => {
  return (
    <div className="StoryHeader">
      <StoryTitle>Our Story</StoryTitle>
      <StoryLinks path={path} changePath={changePath} />
    </div>
  );
}
