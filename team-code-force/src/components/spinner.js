import React from 'react';
import spinner from './images/spinner.gif';
export default () => (
  <div>
    <br />
    <img
      src={spinner}
      style={{ width: '50px', height: '50px', margin: 'auto',}}
      alt="Loading..."
    />
  </div>
);