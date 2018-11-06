
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


const StoryPage = ({ path, changePath, move, showing, isMobile }) => {

  const imgSize = isMobile ? 'cover' : '50%';

  return (
    <div className="StoryPage">
      <StoryHeader path={path} changePath={changePath} />
      <div className="content">
        <FullPageImageAndText img={EngagementPic} color="white" >
          It started on two different days a year apart
        </FullPageImageAndText>
        <BabyPics move={move} />
        <FullPageImageAndText img={BaldKiss} color="white" imgPosition="center 30%" imgSize={imgSize}>
          A bit later on we met in college
        </FullPageImageAndText>
        <FullPageImageAndText img={NerdsSmile} color="white" imgPosition="center 30%" imgSize={imgSize}>
          We went to some costume parties
        </FullPageImageAndText>
        <FullPageImageAndText img={StarvedRock} color="white" imgPosition="center 30%" imgSize={imgSize}>
          And went on some trips
        </FullPageImageAndText>
        <FullPageImageAndText img={SmileAtHome} color="white" imgPosition="center 30%" imgSize={imgSize}>
          Falling in love all the while
        </FullPageImageAndText>
        <EngagementVideo showing={move || showing} />
      </div>
    </div>
  );
}

export default withMobile(StoryPage);
