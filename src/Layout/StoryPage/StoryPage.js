
import React from 'react';
import './StoryPage.css';
import StoryHeader from './StoryHeader/StoryHeader';
import EngagementVideo from './EngagementVideo/EngagementVideo';
import EngagementPic from './Engagement-0354-min-min.JPG';
import {
  BaldKiss,
  NerdsSmile,
  StarvedRock,
  SmileAtHome,
  Engagement0299
} from './pics/Pics';
import BabyPics from './BabyPics/BabyPics';
import FullPageImageAndText from '../../components/FullPageImageAndText/FullPageImageAndText';
import withMobile from '../../hoc/withMobile';
import StorySubtitle from './StorySubtitle/StorySubtitle';


const StoryPage = ({ path, changePath, move, showing, isMobile }) => {

  const imgSize = isMobile ? 'cover' : '50%';

  return (
    <div className="StoryPage">
      <StoryHeader path={path} changePath={changePath} />
      <div className="content">
        <FullPageImageAndText img={EngagementPic} color="white" >
          It started on the same day a year apart
        </FullPageImageAndText>
        <BabyPics move={move} />
        <FullPageImageAndText img={BaldKiss} color="white" imgPosition="center 30%" imgSize={imgSize}>
          Some time later on we met in college
        </FullPageImageAndText>
        <FullPageImageAndText img={NerdsSmile} color="white" imgPosition="center 30%" imgSize={imgSize}>
          We shared some laughs
        </FullPageImageAndText>
        <FullPageImageAndText img={StarvedRock} color="white" imgPosition="center 30%" imgSize={imgSize}>
          And went on some trips
        </FullPageImageAndText>
        <FullPageImageAndText img={SmileAtHome} color="white" imgPosition="center 30%" imgSize={imgSize}>
          Falling in love all the while
        </FullPageImageAndText>
        <div style={{ position: 'relative', height: '50px' }} />
        <StorySubtitle>
          And on May 13th, 2017...
        </StorySubtitle>
        <EngagementVideo showing={move || showing} />
        <FullPageImageAndText img={Engagement0299} color="white">
          Now on May 4th, 2019 we're getting married!
        </FullPageImageAndText>
      </div>
    </div>
  );
}

export default withMobile(StoryPage);
