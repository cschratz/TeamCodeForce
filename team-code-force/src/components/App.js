import React from 'react';
import './App.css';
import Home from './Home';

function App() {
  return (
    <div>
      <Home />
    </div>
  //   // <Router>
  //     <div className="App">

  //       {/* navigation bar */}
  //         <a href="#default" id="logo">National Park Pal</a>
  //         <p>
  //           Search parks and activities to optomize your road trip experience!
  //         </p>
  //       {/* <div id="navbar">
  //         <div id="navbar-right">
  //           {/* <a className="active" href="#home">Home</a> */}
  //           <Link className="active" to="/">Home</Link>
  //           {/* <a href="#contact">Sign Up</a> */}
  //           { !isAuthenticated && <Link to="/login">Login</Link> }
  //           {/* <a href="#login">Login</a> */}
  //           {/* <a href="#park-search">Park Search</a> */}
  //           { isAuthenticated && <Link to="/logout">Logout</Link> }
  //           <Link to="/parkpal">Park Search</Link>
  //           {/* <a href="#activity-search">Activity Search</a> */}
  //           <Link to="activity">Activity Search</Link>
  //         </div>
  //       </div>
  //       {/* <header className="App-header"></header> */}
  //       <Switch>
  //         <Route exact path="/" component={App} />
  //         <Route path="/logout" component={Logout} />
  //         <Route path="/login" component={LogIn} />
  //         {/* <Route path="/parksearch" component={ParkPal} /> */}
  //         {/* <Route path="/activity" component={Activities} /> */}
  //         <Route path="*" component={NotFound} />
  //       </Switch>
  //     </div>
  //   </Router> */}
  //       <div>
  //         <SlideShow slides={slides} currentImage={currentImage} />
  //       </div>
  );
}

export default App;

/* eslint-disable no-console */
/* eslint-disable react/jsx-props-no-spreading */
// import React, { useState, useEffect } from 'react';
// // import '../App.css';
// import {
//   BrowserRouter as Router, Switch, Route, Link,
// } from 'react-router-dom';
// import LogIn from './Login';
// import Logout from './Logout';
// import Dashboard from './Dashboard';
// import Home from './Home';
// import Profile from './Profile';
// import NotFound from './NotFound';

// function App() {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const [, setUser] = useState({});

//   useEffect(() => {
//     fetch('http://localhost:8080/auth/login/success', {
//       method: 'GET',
//       credentials: 'include',
//       headers: {
//         Accept: 'application/json',
//         'Content-Type': 'application/json',
//         'Access-Control-Allow-Credentials': true,
//       },
//     })
//       .then((response) => {
//         if (response.status === 200) return response.json();
//         throw new Error('authentication failed');
//       })
//       .then((responseJson) => {
//         console.log(responseJson);
//         setIsAuthenticated(true);
//         setUser(responseJson.user);
//       })
//       .catch((error) => {
//         setIsAuthenticated(false);
//         console.error(error);
//       });
//   }, []);
//   return (
//     <Router>
//       <main>
//         <nav>
//           <ul>
//             <li><Link to="/">Home</Link></li>
//             { isAuthenticated && <li><Link to="/logout">logout</Link></li> }
//             <li><Link to="/dashboard">dashboard</Link></li>
//             { !isAuthenticated && <li><Link to="/login">login</Link></li> }
//             <li><Link to="/profile">profile</Link></li>
//           </ul>
//         </nav>
//         <Switch>
//           <Route exact path="/" component={Home} />
//           <Route path="/logout" component={Logout} />
//           <Route path="/dashboard" render={(props) => <Dashboard {...props} isAuthenticated={isAuthenticated} />} />
//           <Route path="/login" component={LogIn} />
//           <Route path="/profile" component={Profile} />
//           <Route path="*" component={NotFound} />
//         </Switch>
//       </main>
//     </Router>
//   );
// }

// export default App;
