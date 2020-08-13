import React from 'react';

const Logout = () => {
  // const history = useHistory();
  // const navigateToLogin = () => {
  //   history.push('/');
  // }

  const logout = () => {
    window.open('http://localhost:8080/auth/logout', '_self');
  };
  return (
    <div className="container">
      <button type="button" id="login-button" onClick={logout}>logout</button>
    </div>
  );
};

export default Logout;
