
import React, { Component } from 'react';
import './Swiper.css';
import SwiperContainer from './SwiperContainer/SwiperContainer';

export default class extends Component {

  state = {
    showingIndex: 0,
    left: 0,
  }

  constructor(props) {
    super(props);

    this.swiperRefs = [];
  }

  changeLeft = (left) => {
    this.swiperRefs.forEach((ref, i) => {
      ref.classList.remove('move-slow');
      ref.style.left = this.getLeft(i, left) + 'px';
    });
  }

  endSwipe = (left) => {
    this.resetRefs();

    const newState = {
      left: 0,
    };
    const swipeMargin = 200;
    if(left > window.innerWidth - swipeMargin && this.state.showingIndex - 1 > -1){
      newState.showingIndex = this.state.showingIndex - 1;
      this.setState(newState);
    } else if(left < swipeMargin - window.innerWidth && this.state.showingIndex + 1 < this.props.children.length) {
      newState.showingIndex = this.state.showingIndex + 1;
      this.setState(newState);
    }
  }

  saveRef = (ref, i) => {
    this.swiperRefs[i] = ref;
  }

  resetRefs() {
    this.swiperRefs.forEach((ref, i) => {
      ref.classList.add('move-slow');
      ref.style.left = this.getLeft(i) + 'px';
    });
  }

  getLeft(i, leftOffset = 0) {
    return (i - this.state.showingIndex) * window.innerWidth + leftOffset;
  }

  render() {

    return (
      <div className="Swiper">
        {
          this.props.children.map((child, i) => {
            const left = this.getLeft(i);
            return (
              <SwiperContainer
                key={`swiper-${i}`}
                showing={this.state.showingIndex === i}
                left={left}
                changeLeft={this.changeLeft}
                endSwipe={this.endSwipe}
                moving={this.state.moving}
                getRef={ref => this.saveRef(ref, i)}
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

