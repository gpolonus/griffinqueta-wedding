
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
} from './pics/Pics';
import BabyPics from './BabyPics/BabyPics';
import FullPageImageAndText from '../../components/FullPageImageAndText/FullPageImageAndText';
import withMobile from '../../hoc/withMobile';
import StorySubtitle from './StorySubtitle/StorySubtitle';


const StoryPage = ({ path, changePath, move, showing, isMobile }) => {
  return (
    <div className="StoryPage">
      <StoryHeader path={path} changePath={changePath} />
      <div className="content">
        <FullPageImageAndText img={EngagementPic} opacity="0.4" color="#B07FCD">
          On the same day, a year apart
        </FullPageImageAndText>
        <BabyPics move={move} />
        <StorySubtitle>
          Both of us got our start
        </StorySubtitle>
        <FullPageImageAndText img={BaldKiss} color="white" imgPosition="center 30%">
          A bit later on we met in college
        </FullPageImageAndText>
        <FullPageImageAndText img={NerdsSmile} color="white" imgPosition="center 30%" {...(isMobile ? {} : {imgSize: '50%'})}>
          We went to some parties
        </FullPageImageAndText>
        <FullPageImageAndText img={StarvedRock} color="white" imgPosition="center 30%" {...(isMobile ? {} : {imgSize: '50%'})}>
          And went on some trips
        </FullPageImageAndText>
        <FullPageImageAndText img={SmileAtHome} color="white" imgPosition="center 30%" {...(isMobile ? {} : {imgSize: '50%'})}>
          Falling in love all the while
        </FullPageImageAndText>
        <EngagementVideo showing={move || showing} />
      </div>
    </div>
  );
}

export default withMobile(StoryPage);
