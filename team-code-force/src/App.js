import React, { useState, useEffect } from 'react';
import './App.css';
import LogInPage from './LoginPage';

function App() {
  const [signedIn, setIsSignedIn] = useState(null);

  const initializeGoogleSignIn = () => {
    window.gapi.load('auth2', () => {
      window.gapi.auth2.init({
        client_id: ''
      }).then(() => {
        const authInstance = window.gapi.auth2.getAuthInstance();
        const isSignedIn = authInstance.isSignedIn.get();
        setIsSignedIn(isSignedIn);

        authInstance.isSignedIn.listen(signedIn => {
          setIsSignedIn(signedIn);
        });
      });
    });
  };

  useEffect(() => {
    // const script = document.createElement("script");
    // script.src = "https://apis.google.com/js/platform.js";
    // script.async = true;
    // script.defer = true;
    // script.onload=initializeGoogleSignIn;
    // const meta = document.createElement("meta");
    // meta.name="google-signin-client_id";
    // meta.content="%REACT_APP_GOOGLE_ID_OF_WEB_CLIENT%";
    // document.head.appendChild(meta);
    // document.head.appendChild(script);
    const script = document.createElement('script');
    script.src = 'http://apis.google.com/js/platform.js';
    script.onload = () => initializeGoogleSignIn();
    document.body.appendChild(script);
  });

  return (
    <div className="App">
      <header className="App-header">
        <LogInPage />
      </header>
    </div>
  );
}

export default App;
