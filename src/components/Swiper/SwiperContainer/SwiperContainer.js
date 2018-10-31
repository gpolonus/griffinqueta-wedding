
import React, { Component } from 'react';
import './SwiperContainer.css';


let start = {};
let firstMove = false;
let latestLeft = 0;

export default class extends Component {

  bind = (ref) => {
    this.removeListeners(ref);
    this.startListening(ref);
    this.props.getRef(ref);
  }

  removeListeners = (ref) => {
    ref.removeEventListener('touchstart', this.touchStart);
    ref.removeEventListener('touchmove', this.touchMove);
    ref.removeEventListener('touchEnd', this.touchEnd);
  }

  startListening = (ref) => {
    ref.addEventListener('touchstart', this.touchStart);
  }

  touchStart = (event) => {
    const ref = event.target;
    ref.addEventListener('touchmove', this.touchMove);
    ref.addEventListener('touchend', this.touchEnd);

    const pos = {
      x: event.touches[0].clientX,
      y: event.touches[0].clientY,
    };

    start = pos;
    firstMove = true;
    latestLeft = 0;
  }

  touchMove = (event) => {
    if(firstMove) {
      const x0 = event.touches[0].clientX;
      const y0 = event.touches[0].clientY;
      const x1 = start.x;
      const y1 = start.y;
      let slope;
      if(x1 !== x0) {
        slope = (y1 - y0) / (x1 - x0);
      } else {
        slope = 1000;
      }
      if(slope > 1 || slope < -1) {
        this.removeListeners(event.target);
        firstMove = false;
        return;
      }
    }
    latestLeft = event.touches[0].clientX - start.x;
    this.props.changeLeft(latestLeft);
  }

  touchEnd = (event) => {
    this.removeListeners(event.target);
    this.props.endSwipe(latestLeft);
  }

  render() {
    const comp = React.cloneElement(this.props.children, { showing: this.props.showing });

    return (
      <div
        className={`SwiperContainer move-slow`}
        ref={this.bind}
        style={{ left: this.props.left }}
      >
        { comp }
      </div>
    );
  }
}

