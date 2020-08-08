import React, { useEffect } from 'react';

const LogInPage = () => {
  useEffect(() => {
    window.gapi.load('signin2', () => {
      window.gapi.signin2.render('login-button');
    });
  });

  return (
    <div className="container">
      <div id="login-button">Sign in with Google</div>
    </div>
  );
};

export default LogInPage;
