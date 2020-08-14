import React from 'react';

const Profile = ({ user }) => {
  return (
    <div className="container">
      This Is Your Profile {user.name}!
      <img src={user.image} />
    </div>
  );
};

export default Profile;
