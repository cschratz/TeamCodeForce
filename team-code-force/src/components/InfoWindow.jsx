import React from 'react';

const InfoWindow = ({
  url, name, desc, image,
}) => {
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

  const picStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  };

  return (
    <div style={infoWindowStyle}>
      <div style={{ fontSize: 16 }}>
        {name}
      </div>
      <br />
      <img style={picStyle} src={image} alt="Park" />
      <br />
      <br />
      <div>
        {desc}
      </div>
      <br />
      <div>
        Park Website:
        <br />
        <a href={url} target="_blank" rel="noopener noreferrer">{url}</a>
      </div>
    </div>
  );
};

export default InfoWindow;
