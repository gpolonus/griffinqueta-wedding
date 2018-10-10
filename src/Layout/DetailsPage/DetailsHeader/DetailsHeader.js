
import React from 'react';
import './DetailsHeader.css';
import DetailsTitle from './DetailsTitle/DetailsTitle';
import DetailsLinks from './DetailsLinks/DetailsLinks';

export default ({ changePath }) => {
  return (
    <div className="DetailsHeader">
      <DetailsTitle>Details</DetailsTitle>
      <DetailsLinks changePath={changePath} />
    </div>
  );
}
