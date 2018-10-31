
import React from 'react';
import './StoryPage.css';
import StoryHeader from './StoryHeader/StoryHeader';
import EngagementVideo from './EngagementVideo/EngagementVideo';
import EngagementPic from './Engagement-0354-min-min.JPG';
import BaldKiss from './pics/bald-kiss.jpg';
import BabyPics from './BabyPics/BabyPics';
import NerdSmile from './pics/nerds-smile.jpg'
import StarvedRock from './pics/starved-rock.jpg'
import FullPageImageAndText from '../../components/FullPageImageAndText/FullPageImageAndText';
import withMobile from '../../hoc/withMobile';


const StoryPage = ({ path, changePath, move, showing, isMobile }) => {
  return (
    <div className="StoryPage">
      <StoryHeader path={path} changePath={changePath} />
      <div className="content">
        <FullPageImageAndText img={EngagementPic} opacity="0.4" color="#B07FCD">
          It began on the same day one year apart
        </FullPageImageAndText>
        <BabyPics move={move} />
        <FullPageImageAndText img={BaldKiss} color="white" imgPosition="center 30%">
          A bit later on we met in college
        </FullPageImageAndText>
        <FullPageImageAndText img={NerdSmile} color="white" imgPosition="center 30%" {...(isMobile ? {} : {imgSize: '50%'})}>
          We went to some parties
        </FullPageImageAndText>
        <FullPageImageAndText img={StarvedRock} color="white" imgPosition="center 30%" imgSize="50%">
          Went on some trips
        </FullPageImageAndText>
        <EngagementVideo showing={move || showing} />
      </div>
    </div>
  );
}

export default withMobile(StoryPage);
