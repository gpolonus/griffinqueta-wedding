
import React from 'react';
import './Links.css';
import PageConfig from '../../services/PageConfig';
import Link from './Link/Link';
import Aux from '../../hoc/Aux';

export default ({ exclude: currentPath, changePath }) => {
  return (
    <div className="Links">
      {
        PageConfig.map(({path, title}) =>
          <Link key={path} path={path} title={title} changePath={changePath} disabled={path === currentPath} />
        ).reduce((links, link) => <Aux>{links} | {link}</Aux>)
      }
    </div>
  );
}
