import React from 'react';
import axios from 'axios';

const InfoWindow = ({
  url, name, desc, image, user,
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

  const saveWishlist = (data) => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: name, userID: data.id })
    };
    fetch('http://localhost:8080/park/wishlist', requestOptions)
      .then(response => response.json())
      .then(data => console.log(data));
  }

  const saveParkHistory = (data) => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: name, userID: data.id })
    };
    fetch('http://localhost:8080/park/history', requestOptions)
      .then(response => response.json())
      .then(data => console.log(data));
  }

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
      <button style={{marginRight: '20px'}} onClick={() => saveWishlist(user)}>Add To WishList</button>
      <button onClick={() => saveParkHistory(user)}>Seen It!</button>
    </div>
  );
};

export default InfoWindow;
