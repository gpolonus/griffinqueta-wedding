
import React from 'react';
import './FrontPageLinks.css';
import Links from '../../../components/Links/Links';
import './FrontPageLinks.css';

export default ({ changePath }) => (
  <div className="FrontPageLinks">
    <Links exclude="/" changePath={changePath} />
  </div>
);
