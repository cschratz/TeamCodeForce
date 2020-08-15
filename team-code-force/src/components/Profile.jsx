import React from 'react';
import WishList from './Wishlist';
import ParkHistory from './ParkHistory';


const Profile = ({ user }) => {

  const imageStyle = {
    height: '500',
    width: '400',
    borderRadius: '50%',
  }


  return (
    <div className="container">
      <h2>Welcome To Your Profile {user.name}!</h2>
      <div>
      <img src={user.image} alt='profile' style={imageStyle}/>
      <br />
      <br />
        <h1 style={{float: 'left', marginLeft: '100px'}}>
          Park WishList
          <WishList userID={user.id} />
        </h1>
        <h1 style={{float: 'right', marginRight: '100px'}}>
          Park History
          <ParkHistory userID={user.id} />
        </h1>
      </div>
    </div>
  );
};

export default Profile;
