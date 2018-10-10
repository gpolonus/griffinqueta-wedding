
import React from 'react';
import './DetailsTitle.css';
import Title from '../../../../components/Title/Title';

export default ({ children }) => {
  return (
    <div className="DetailsTitle">
      <Title>
        { children }
      </Title>
    </div>
  );
}

