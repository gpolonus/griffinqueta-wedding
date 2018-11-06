
import React from 'react';
import './FullPageImageAndText.css';
import Subtitle from '../Subtitle/Subtitle';


export default ({ img, children, color, opacity, imgPosition, imgSize }) => {
  return (
    <div className="FullPageImageAndText">
      <Subtitle color={color}>{ children }</Subtitle>
      <div className="img" style={{
        backgroundImage: `
          linear-gradient(
            to bottom,
            rgba(0, 0, 0, 0),
            rgba(0, 0, 0, 0.35)
          ),
          url(${ img })`,
        opacity,
        backgroundPosition: imgPosition,
        backgroundSize: imgSize
      }} />
    </div>
  );
}

