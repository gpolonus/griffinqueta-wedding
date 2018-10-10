
import React from 'react';
import './Page.css';

export default ({ component, position, changePath, path, showPage }) => {
  const Comp = component;
  return (
    <div className="Page"
      style={position}
    >
      <Comp changePath={changePath} path={path} move={showPage} />
    </div>
  );
}
