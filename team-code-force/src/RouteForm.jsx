/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

const RouteForm = () => (
  <div style={{ 'margin-bottom': '20px' }}>
    <form>
      <label>
        Starting Point
        <input type="text" />
      </label>
      <label>
        End Point
        <input type="text" />
      </label>
    </form>
  </div>
);

export default RouteForm;
