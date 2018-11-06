
import React from 'react';
import './Homepage.css';
import Title from '../../components/Title/Title';
import Subtitle from '../../components/Subtitle/Subtitle';
import FrontPageLinks from './FrontPageLinks/FrontPageLinks';

export default ({ changePath }) => {
  return (
    <div className="Homepage">
      <Title>Griffin and Enriqueta</Title>
      <Subtitle classes="date">May 4th, 2019</Subtitle>
      <Subtitle>Davenport, Iowa</Subtitle>
      <FrontPageLinks changePath={changePath} />
      <div className="swipe-alert">SWIPE >></div>
    </div>
  );
}
