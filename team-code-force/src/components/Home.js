/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';
import {
  BrowserRouter as Router, Switch, Route, Link,
} from 'react-router-dom';
import './App.css';
import SlideShow from './slideshow';
// import { slideShow } from './slideshow-data';
import LogIn from './Login';
import Logout from './Logout';
import NotFound from './NotFound';
import Profile from './Profile';
import ParkPal from './ParkPal';

const Home = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [, setUser] = useState({});
  // const [slides] = useState(slideShow);
  // const [currentImage] = useState(slideShow[0]);

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

  return (
    <div className="App">
      <h1 id="logo">National Park Pal!</h1>
      <h3>Search parks and activities to optomize your road trip experience!</h3>
      <Router>
        <main>
          <nav id="navbar">
            <div>
              <Link className="active" to="/">Home</Link>
              { !isAuthenticated && <Link to="/login">login</Link> }
              { isAuthenticated && <Link to="/logout">logout</Link>}
              <Link to="/parkpal">Park Search</Link>
              <Link to="/activity">Activity Search</Link>
              <Link to="/profile">profile</Link>
            </div>
          </nav>
          <Switch>
            <Route exact path="/" component={SlideShow} />
            <Route path="/logout" component={Logout} />
            {/* <Route path="/dashboard" render={(props) => <Dashboard {...props} isAuthenticated={isAuthenticated} />} /> */}
            <Route path="/login" component={LogIn} />
            <Route path="/profile" component={Profile} />
            <Route path="/parkpal" component={ParkPal} />
            {/* <Route path="/activity" component={Activities} /> */}
            <Route path="*" component={NotFound} />
          </Switch>
        </main>
      </Router>
    </div>
  );
};

export default Home;
