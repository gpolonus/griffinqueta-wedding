
import React, { PureComponent } from 'react';
import './EngagementVideo.css';

export default class extends PureComponent {
  render() {
    return (
      this.props.showing ?
      <div className="EngagementVideo">
        <iframe
          title="Bradley Engagement"
          // width="100%"
          // onload="this.width=screen.width;this.height=screen.height;"
          height="315"
          src="https://www.youtube.com/embed/5lTAkh4TIkc?rel=0&amp;controls=0&amp;start=60"
          frameBorder="0"
          allow="autoplay; encrypted-media"
        ></iframe>
      </div> :
      null
    );
  }
}

