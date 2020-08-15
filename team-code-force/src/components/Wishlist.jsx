import React, { useEffect, useState } from 'react';

const Wishlist = ({ userID }) => {

  const [wishList, setWishList] = useState([]);

  useEffect(() => {
    async function getWishList(data) {
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userID: data })
      };
      const response = await fetch(`https://${process.env.REACT_APP_VM_IP}:${process.env.REACT_APP_SERVER_PORT}/park/wishlist/get`, requestOptions);
      response.json().then((data) => setWishList(data));
    };
    getWishList(userID);
}, [userID]);

  return (
  <div>
    {wishList.map(park => <h6 key={park.id}>{park.name}</h6>)}
  </div>
  )
};

export default Wishlist;