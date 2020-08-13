import React from 'react';

const LogIn = () => {
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
