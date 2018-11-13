
import React from 'react';
import './Page.css';
import withMobile from '../../../hoc/withMobile';

const Page = ({ component, position, changePath, path, showPage, showing, isMobile }) => {
  const Comp = component;
  let styleProps = {};

  styleProps = {
    style: {
      top: position.top,
      left: position.left
    }
  };

  return (
    <div className="Page"
      {...styleProps}
    >
      <Comp changePath={changePath} path={path} move={showPage} showing={showing} />
    </div>
  );
}

export default withMobile(Page);
