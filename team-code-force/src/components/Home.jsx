/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';
import {
  BrowserRouter as Router, Switch, Route, Link, NavLink, Redirect,
} from 'react-router-dom';
import './App.css';
import SlideShow from './slideshow';
// import { slideShow } from './slideshow-data';
import NotFound from './NotFound';
import Profile from './Profile';
import ParkPal from './ParkPal';
import Activities from './Activities';
import NotSignedIn from './NotSignedIn';

const Home = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState({});
  // const [slides] = useState(slideShow);
  // const [currentImage] = useState(slideShow[0]);
  const { REACT_APP_SERVER_PORT } = process.env || 8080;

  useEffect(() => {
    fetch(`http://localhost:${process.env.REACT_APP_SERVER_PORT}/auth/login/success`, {
      method: 'GET',
      credentials: 'include',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Credentials': true,
      },
    })
      .then((response) => {
        if (response.status === 200) return response.json();
        throw new Error('authentication failed');
      })
      .then((responseJson) => {
        console.log(responseJson);
        setIsAuthenticated(true);
        setUser(responseJson.user);
      })
      .catch((error) => {
        setIsAuthenticated(false);
        console.error(error);
      });
  }, []);

  const logout = () => {
    console.log('logging out');
    window.open(`http://localhost:${REACT_APP_SERVER_PORT}/auth/logout`, '_self');
  };
  const googleSignIn = () => {
    window.open(`http://localhost:${REACT_APP_SERVER_PORT}/auth/google`, '_self');
  };

  return (
    <div className="App">
      <h1 id="logo">National Park Pal!</h1>
      <h3>Search parks and activities to optimize your road trip experience!</h3>
      <Router>
        <main>
          <nav id="navbar">
            <div>
              <NavLink activeClassName="active" exact to="/">Home</NavLink>
              { !isAuthenticated && <Link to="/login" onClick={googleSignIn}>Login</Link> }
              { isAuthenticated && <Link to="/logout" onClick={logout}>Logout</Link> }
              <NavLink activeClassName="active" to="/parkpal">Park Search</NavLink>
              <NavLink activeClassName="active" to="/activity">Activity Search</NavLink>
              { isAuthenticated && <NavLink activeClassName="active" to="/profile">Profile</NavLink> }
            </div>
          </nav>
          <Switch>
            <Route exact path="/" component={SlideShow} />
            <Route path="/login" component={SlideShow} />
            <Route path="/logout" component={SlideShow} />
            <Route path="/notsignedin" component={NotSignedIn} />
            {/* <Route path="/dashboard"  isAuthenticated={isAuthenticated} />} /> */}
            { isAuthenticated
              ? (
                <>
                  <Route path="/profile" render={(props) => <Profile {...props} user={user} />} />
                  <Route path="/parkpal" render={(props) => <ParkPal {...props} user={user} />} />
                  <Route path="/activity" component={Activities} />
                </>
              ) : <Redirect to="/notsignedin" />}
            <Route path="*" component={NotFound} />
          </Switch>
          {/* <SlideShow /> */}
        </main>
      </Router>
    </div>
  );
};

export default Home;
