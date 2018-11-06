
import React from 'react';
import './Link.css';

export default ({ path, title, changePath, disabled }) =>
  // <a className="Link" href={path}>{title}</a>;
  disabled ?
    <span className="Link disabled">{title}</span> :
    <span className="Link" onClick={() => changePath(path)}>{title}</span>;
