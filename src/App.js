
import React from 'react';
import './App.css';
import Layout from './Layout/Layout';
import { ParallaxProvider } from 'react-scroll-parallax';

export default () => {
  return (
    <div className="App">
      <ParallaxProvider>
        <Layout />
      </ParallaxProvider>
    </div>
  );
}
