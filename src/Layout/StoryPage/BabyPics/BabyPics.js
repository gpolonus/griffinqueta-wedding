
import React from 'react';
import './BabyPics.css';
import StorySubTitle from '../StorySubtitle/StorySubtitle';

export default ({ move }) => {
  return (
    <div className={`BabyPics${move ? ' move' : ''}`}>
      <div className="baby griffin">
        <StorySubTitle>December 13th, 1993</StorySubTitle>
        <div className="image" />
      </div>
      <div className="baby queta">
        <StorySubTitle>December 13th, 1994</StorySubTitle>
        <div className="image" />
      </div>
    </div>
  );
}
