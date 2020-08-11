import React from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const LogIn = () => {
  // const history = useHistory();
  // const navigateToHome = () => {
  //   history.push('/');
  // };
  // const googleSignIn = () => {
  //   axios('http://localhost:8080/auth/google')
  //     .then((response) => {
  //       console.log(response);
  //       // navigateToHome();
  //     });
  // };
  const googleSignIn = () => {
    window.open('http://localhost:8080/auth/google', '_self');
  };

  return (
    <div className="container">
      <button id="login-button" type="button" onClick={googleSignIn}>Sign in with Google</button>
    </div>
  );
};

export default LogIn;
