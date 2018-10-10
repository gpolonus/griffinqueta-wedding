
import React from 'react';
import './StoryPage.css';
import StoryHeader from './StoryHeader/StoryHeader';
import EngagementVideo from './EngagementVideo/EngagementVideo';
import Overlay from '../../components/Overlay/Overlay';
import BabyPics from './BabyPics/BabyPics';

export default ({ path, changePath, move }) => {
  return (
    <div className="StoryPage">
      <Overlay />
      <div className="content">
        <StoryHeader path={path} changePath={changePath}/>
        <BabyPics move={move} />
        <EngagementVideo />
      </div>
    </div>
  );
}
