import React, { useEffect, useState } from 'react';

const ParkHistory = ({ userID }) => {

  const [history, setHistory] = useState([]);

  useEffect(() => {
    async function getHistory(data) {
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userID: data })
      };
      const response = await fetch('http://localhost:8080/park/history/get', requestOptions);
      response.json().then((data) => setHistory(data));
    };
    getHistory(userID);
}, [userID]);

  return (
  <div>
    {history.map(park => <div key={park.id}>{park.name}</div>)}
  </div>
  )
};

export default ParkHistory;