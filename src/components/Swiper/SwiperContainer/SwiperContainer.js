
import React, { Component } from 'react';
import './SwiperContainer.css';



export default ({ showing, children, changeLeft, left }) => {
  const bind = (ref) => {
    removeListeners(ref);
    startListening(ref);
  }

  const removeListeners = (ref) => {
    ref.removeEventListener('touchstart', touchStart);
    ref.removeEventListener('touchmove', touchMove);
    ref.removeEventListener('touchEnd', touchEnd);
  }

  const startListening = (ref) => {
    ref.addEventListener('touchstart', touchStart);
  }

  const touchStart = (event) => {
    const ref = event.target;
    // ref.removeEventListener('touchstart', touchStart);
    ref.addEventListener('touchmove', touchMove);
    ref.addEventListener('touchend', touchEnd);
    console.log('START');
  }

  const touchMove = (event) => {
    console.log('MOVE', event);
  }

  const touchEnd = (event) => {

    console.log('END');
    removeListeners(event.target);
  }

  const Comp = () => children;
  return (
    <div className="SwiperContainer" ref={bind} style={{left: left}}>
      <Comp showing={showing} />
    </div>
  );
}

