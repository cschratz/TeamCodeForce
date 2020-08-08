import React from 'react';
import './App.css';
import SimpleMap from './Map';
import RouteForm from './RouteForm';

function App() {
  return (
    <div className="App">
      <nav>Google Login Up HERE</nav>
      <h1>
        Welcome to National Park Pal!
      </h1>
      <h3>Insert Your Route To Get Started!</h3>
      <RouteForm />
      <SimpleMap />
      <img src="https://upload.wikimedia.org/wikipedia/commons/1/1d/US-NationalParkService-Logo.svg" alt="national parks" className="nps" />
    </div>
  );
}

export default App;
