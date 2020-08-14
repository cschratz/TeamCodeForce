import React from 'react';

const Profile = () => {
  const profileHit = () => {
    fetch('http://localhost:8080/auth/profile', {
      method: 'GET',
      credentials: 'include',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Credentials': true,
      },
    })
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson);
      });
  };
  return (
    <div className="container">
      <button type="button" onClick={profileHit}>Profile</button>
    </div>
  );
};

export default Profile;
