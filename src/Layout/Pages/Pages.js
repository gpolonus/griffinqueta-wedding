
import React, { Component } from 'react';
import './Pages.css';
import PageConfig from '../../services/PageConfig';
import Page from './Page/Page';
import ReactSwipe from 'react-swipe';
import withMobile from '../../hoc/withMobile';

class Pages extends Component {

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

  render() {
    const path = this.state.path;
    const showPage = PageConfig.find(page => page.path === path);
    return (
      <div className="Pages">
      {
        this.props.isMobile ?
          <ReactSwipe>
          {
            PageConfig.map((page, i) =>
              <Page
                key={page.path}
                path={page.path}
                component={page.component}
              />
            )
          }
          </ReactSwipe> :
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
      </div>
    );
  }
}

export default withMobile(Pages);
