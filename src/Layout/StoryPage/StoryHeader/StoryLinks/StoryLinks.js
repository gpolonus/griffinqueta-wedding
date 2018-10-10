
import React from 'react';
import './StoryLinks.css';
import Links from '../../../../components/Links/Links';

export default ({ changePath, path }) => {
  return (
    <div className="StoryLinks">
      <Links exclude={path} changePath={changePath} />
    </div>
  );
}

