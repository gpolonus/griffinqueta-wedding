
import React, { Component } from 'react';
import './Pages.css';
import PageConfig from '../../services/PageConfig';
import Page from './Page/Page';
// import { detectSwipe } from './SwipeUtil';
// import ReactSwipe from 'react-swipe';

export default class extends Component {

  state = {
    path: '/'
  }

  constructor(props) {
    super(props);

    this.pages = Array(4).fill().map(() => React.createRef());
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

  swipe = (direction) => {
    console.log(direction);
    let nextX = -1;
    switch(direction) {
      case 'left':
        nextX = PageConfig.find(page => page.path === this.state.path).x + 1;
        break;
        case 'right':
        nextX = PageConfig.find(page => page.path === this.state.path).x - 1;
        break;
    }
    if(nextX > -1) {
      this.setState({
        path: PageConfig.find(page => page.x === nextX).path
      });
    }
  }

  // getRef = (ref) => {
  //   detectSwipe(ref, this.swipe);
  // }

  render() {
    const path = this.state.path;
    const showPage = PageConfig.find(page => page.path === path);
    return (
      <div className="Pages"
        // ref={ this.getRef }
      >
        {/* <ReactSwipe> */}
        {
          PageConfig.map((page, i) =>
            <Page
              key={page.path}
              path={page.path}
              component={page.component}
              changePath={this.changePath}
              position={this.getPosition(showPage, page)}
              showPage={page.path === showPage.path}
            />
          )
        }
        {/* </ReactSwipe> */}
      </div>
    );
  }
}

