
import React from 'react';
import './Layout.css';
import Pages from './Pages/Pages';

// export default () => {
export default class extends React.Component {
  render () {
  return (
    <div className="Layout">
      <Pages />
    </div>
  );
}
}
