import React, { useState, useEffect } from 'react';

const Dashboard = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [, setUser] = useState({});
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://localhost:8080/auth/login/success', {
      method: 'GET',
      credentials: 'include',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Credentials': true,
      },
    })
      .then((response) => {
        // console.log(response.json());
        if (response.status === 200) return response.json();
        throw new Error('authentication failed');
      })
      .then((responseJson) => {
        console.log(responseJson);
        setIsAuthenticated(true);
        setUser(responseJson.user);
      })
      .catch(() => {
        setIsAuthenticated(false);
        setError('user authentication failed');
        console.error(error);
      });
  }, []);
  return (
    <div className="container">
      {isAuthenticated ? (
        <div>here is your profile!</div>
      ) : (
        <div>you have not logged in</div>
      )}
      <div id="login-button">Dashboard</div>
    </div>
  );
};

export default Dashboard;
