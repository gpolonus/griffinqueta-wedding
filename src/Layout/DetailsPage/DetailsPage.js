
import React from 'react';
import './DetailsPage.css';
import DetailsHeader from './DetailsHeader/DetailsHeader';
import DetailsSubtitle from './DetailsSubtitle/DetailsSubtitle';
import DetailsParagraph from './DetailsParagraph/DetailsParagraph';

export default ({ changePath, move }) => {
  return (
    <div className={`DetailsPage${move ? ' move' : ''}`}>
      <div className="content">
        <DetailsHeader changePath={changePath} />
        <DetailsSubtitle title="Location" />
        <DetailsParagraph>
          The wedding ceremony will be at Vanderveer Park on Brady Street in Davenport IA. The reception will take place down the street at the River Music Experience on 2nd and Main in the second floor Redstone Room.
        </DetailsParagraph>
        <DetailsSubtitle title="Accommodations" />
        <DetailsParagraph>
          There will be a block of rooms in the hotel next to the River Music Experience.
        </DetailsParagraph>
        <DetailsSubtitle title="Gift" />
        <DetailsParagraph>
          We have elected to do a HoneyPot, no gift registry. We have all the things we need, so whatever contributions you can make towards our honeymoon would be much appreciated!
        </DetailsParagraph>
      </div>
    </div>
  );
}
