
import React from 'react';
import './DetailsSubtitle.css';
import Subtitle from '../../../components/Subtitle/Subtitle';

export default ({ title }) => {
  return (
    <div className={`DetailsSubtitle`}>
      <Subtitle>
        <span className="contents">
          { title }
          <span className="backing"> </span>
        </span>
      </Subtitle>
    </div>
  );
}
