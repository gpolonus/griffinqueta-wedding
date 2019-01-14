
import React, { Component } from 'react';
import './Pages.css';
import PageConfig from '../../services/PageConfig';
import Page from './Page/Page';
import withMobile from '../../hoc/withMobile';
// import Swiper from '../../components/Swiper/Swiper';


class Pages extends Component {

  state = {
    path: '/'
  }

  changePath = (path) => {
    this.setState({ path });
  }

  getPosition({ x: showX, y: showY }, { x, y }) {
    const position = {
      top: 0,
      left: 0
    };

    position.left = (x - showX) * 100 + '%';
    position.top = (y - showY) * 100 + '%';

    return position;
  }

  render() {
    const path = this.state.path;
    const showPage = PageConfig.find(page => page.path === path);

    const pagesContent = PageConfig.map((page) =>
      <Page
        key={page.path}
        path={page.path}
        component={page.component}
        changePath={this.changePath}
        position={this.getPosition(showPage, page)}
        showPage={page.path === showPage.path}
      />
    );

    return (
      <div className="Pages">
        { pagesContent }
      </div>
    );
  }
}

export default withMobile(Pages);
