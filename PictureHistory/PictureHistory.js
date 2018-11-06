
import React from 'react';
import './PictureHistory.css';
import Gallery from 'react-photo-gallery';
import photos from './photos';

export default () => {
  return (
    <div className="PictureHistory">
      <Gallery direction="row" photos={photos} />
    </div>
  );
}
