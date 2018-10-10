
import React from 'react';
import './DetailsParagraph.css';
import Paragraph from '../../../components/Paragraph/Paragraph';

export default ({ children }) => {
  return (
    <div className="DetailsParagraph">
      <Paragraph>
        { children }
      </Paragraph>
    </div>
  );
}

