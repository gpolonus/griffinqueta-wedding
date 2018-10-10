
import React from 'react';
import './Link.css';

export default ({ path, title, changePath }) =>
  // <a className="Link" href={path}>{title}</a>;
  <span className="Link" onClick={() => changePath(path)}>{title}</span>;
