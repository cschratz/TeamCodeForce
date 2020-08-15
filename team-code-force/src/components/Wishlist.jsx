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
      const response = await fetch('http://localhost:8080/park/wishlist/get', requestOptions);
      response.json().then((data) => setWishList(data));
    };
    getWishList(userID);
}, [userID]);

  return (
  <div>
    {wishList.map(park => <div key={park.id}>{park.name}</div>)}
  </div>
  )
};

export default Wishlist;