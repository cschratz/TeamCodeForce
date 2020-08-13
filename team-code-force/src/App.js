import React, { useEffect, useState } from 'react';
import './App.css';
import './mysass.scss';


import { SlideShow } from './slideshow'
import popup from "./menu/menu.js";
import { Menu } from "./menu/menu";
import { slideShow } from './slideshow-data';

function App() {


  // [current state, function to update state]
  const [isSignedIn, changeStatus] = useState(false);
  const [count, setCount] = useState(0);
  const [slides] = useState(slideShow);
  const [currentImage] = useState(slideShow[0]);


  function editStatus() {
    // if the user is signed in dislay nav bar with wishlist
    changeStatus(() => {
      isSignedIn = true;
    });
  }

 
  return (
    <div className="App">
        {/* navigation bar */}
        <div id="navbar">
          <a href="#default" id="logo">National Park Pal</a>
          <p>
            Search parks and activities to optomize your road trip experience!
          </p>
            <div id="navbar-right">
              <a class="active" href="#home">Home</a>
              <a href="#contact">Sign Up</a>
              <a href="#login">Login</a>
              <a href="#park-search">Park Search</a>
              <a href="#activity-search">Activity Search</a>
            </div>
        </div>
          {/* <header className="App-header"></header> */}
          <div>
            <SlideShow slides={slides} currentImage={currentImage} />
          {/* <p>
            National Park Pal helps road-trippers to find National Parks along the way. 
            Search parks and activities to optomize your road experience!
          </p> */}
        </div>

    </div>
  );
}

export default App;

