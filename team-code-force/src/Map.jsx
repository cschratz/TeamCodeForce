import React from 'react';
import GoogleMapReact from 'google-map-react';

const Map = () => (
  <div style={{ height: '50vh', width: '100%' }}>
    <GoogleMapReact
      defaultCenter={{ lat: 39.82, lng: -98.57 }}
      defaultZoom={4}
    />
  </div>
);

export default Map;
