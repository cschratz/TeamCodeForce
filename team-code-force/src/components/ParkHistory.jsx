import React, { useEffect, useState } from 'react';

const ParkHistory = ({ userID }) => {

  const [history, setHistory] = useState(['Please Add Some Parks!']);

  useEffect(() => {
    async function getHistory(data) {
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userID: data })
      };
      const response = await fetch(`https://${process.env.REACT_APP_SERVER_IP}/park/history/get`, requestOptions);
      response.json().then((data) => setHistory(data));
    };
    getHistory(userID);
}, [userID]);

  return (
  <div>
    {history.map(park => <h6 key={park.id}>{park.name}</h6>)}
  </div>
  )
};

export default ParkHistory;