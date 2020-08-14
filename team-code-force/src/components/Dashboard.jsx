import React from 'react';
import PropTypes from 'prop-types';

const Dashboard = ({ isAuthenticated }) => (
  <div className="container">
    {isAuthenticated ? (
      <div>here is your profile!</div>
    ) : (
      <div>you have not logged in</div>
    )}
    <div id="login-button">Dashboard</div>
  </div>

);

Dashboard.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
};

export default Dashboard;
