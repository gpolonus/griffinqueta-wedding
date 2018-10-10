
import React from 'react';
import './Links.css';
import PageConfig from '../../services/PageConfig';
import Link from './Link/Link';
import Aux from '../../hoc/Aux';

export default ({ exclude, changePath }) => {
  return (
    <div className="Links">
      {
        PageConfig.filter(({path}) => path !== exclude).map(({path, title}) =>
          <Link key={path} path={path} title={title} changePath={changePath} />
        ).reduce((links, link) => <Aux>{links} | {link}</Aux>)
      }
    </div>
  );
}
