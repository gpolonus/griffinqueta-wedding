
import React from 'react';
import './Page.css';
import withMobile from '../../../hoc/withMobile';

const Page = ({ component, position, changePath, path, showPage, isMobile }) => {
  const Comp = component;
  return (
    <div className="Page"
      style={isMobile ? {} : position}
    >
      <Comp changePath={changePath} path={path} move={showPage} />
    </div>
  );
}

export default withMobile(Page);
