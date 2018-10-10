
import React from 'react';
import './DetailsLinks.css';
import Links from '../../../../components/Links/Links';

export default ({ changePath }) => {
  return (
    <div className="DetailsLinks">
      <Links exclude="/details" changePath={changePath} />
    </div>
  );
}

