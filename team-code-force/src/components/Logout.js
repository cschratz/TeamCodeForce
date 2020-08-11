import React from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const Logout = () => {

  
    // const history = useHistory();
    // const navigateToLogin = () => {
    //   history.push('/');
    // }

  const logout = () => {
    window.open('http://localhost:8080/auth/logout', '_self');
    // console.log('clicked');
    // axios.get('auth/logout')
    //   .then((response) => {
    //     console.log(response);
    //     navigateToLogin();
    //   });
  };
  return (
    <div className="container">
      <button id="login-button" onClick={logout}>logout</button>
    </div>
  );
};

export default Logout;
