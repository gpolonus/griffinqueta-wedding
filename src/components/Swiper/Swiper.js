
import React, { Component } from 'react';
import './Swiper.css';
import SwiperContainer from './SwiperContainer/SwiperContainer';

export default class extends Component {

  state = {
    showingIndex: 0,
    left: 0
  }

  changeLeft = (left) => {
    this.setState({
      left
    });
  }

  render() {

    return (
      <div className="Swiper">
        {
          this.props.children.map((child, i) => {
            // (x - showX) * 100 + '%';
            const left = `calc(${(i - this.state.showingIndex) * 100 + '%'} - ${this.state.left})`;
            return (
              <SwiperContainer
                key={`swiper-${i}`}
                showing={this.state.showingIndex === i}
                left={left}
                changeLeft={this.changeLeft}
              >
                {child}
              </SwiperContainer>
            );
          })
        }
      </div>
    );
  }
}

