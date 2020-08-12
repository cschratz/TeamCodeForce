import React from 'react';

const InfoWindow = ({url, name, desc}) => {
  const infoWindowStyle = {
    position: 'relative',
    bottom: 150,
    left: '-45px',
    width: 220,
    backgroundColor: 'white',
    boxShadow: '0 2px 7px 1px rgba(0, 0, 0, 0.3)',
    padding: 20,
    fontSize: 14,
    zIndex: 100,
  };

  return (
    <div style={infoWindowStyle}>
      <div style={{ fontSize: 16 }}>
        {name}
      </div>
      <br />
      <div>
        {desc}
      </div>
      <br />
      <div>Park Website: <a href={url} target="_blank" rel="noopener noreferrer">{url}</a></div>
    </div>
  );
};

export default InfoWindow;