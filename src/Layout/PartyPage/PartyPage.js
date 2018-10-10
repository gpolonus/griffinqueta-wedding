
import React from 'react';
import './PartyPage.css';
import DetailsHeader from '../DetailsPage/DetailsHeader/DetailsHeader';

export default ({ changePath }) => {
  return (
    <div className="PartyPage">
      <DetailsHeader changePath={changePath} />
    </div>
  );
}

