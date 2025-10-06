import Home from './components/Home'
import Explore from './components/Explore'
import Footer from './components/Footer'
import React, { useState, useEffect } from "react";
import "./App.css";
import SignInForm from './components/signin.jsx';
import SignUpForm from './components/SignUp.jsx';

// Key for localStorage
const VIEW_STORAGE_KEY = 'appView';
const AUTH_TYPE_STORAGE_KEY = 'authType';

export default function App() {
  // 1. Initialize view state from localStorage or default to 'main'
  const [view, setView] = useState(() => {
    const savedView = localStorage.getItem(VIEW_STORAGE_KEY);
    return savedView ? savedView : "main";
  });
  
  // 2. Initialize authType state from localStorage or default to 'signIn'
  const [authType, setAuthType] = useState(() => {
    const savedAuthType = localStorage.getItem(AUTH_TYPE_STORAGE_KEY);
    return savedAuthType ? savedAuthType : "signIn";
  });

  // 3. Effect to save the current 'view' state to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem(VIEW_STORAGE_KEY, view);
  }, [view]);

  // 4. Effect to save the current 'authType' state to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem(AUTH_TYPE_STORAGE_KEY, authType);
  }, [authType]);


  const handleAuthToggle = (text) => {
    if (text !== authType) {
      setAuthType(text);
    }
  };

  const containerClass =
    "auth-container " + (authType === "signUp" ? "right-panel-active" : "");

  // Function to switch to the authentication view
  const switchToAuth = () => setView("auth");

  // Function to switch back to the main view, and clear auth-related state
  const switchToMain = () => {
    setView("main");
    // Optionally reset authType and remove localStorage entries on successful login/signout/back
    // For now, we'll just let the new view persist.
  };

  if (view === "auth") {
    // Render only the login/sign-up page when view is 'auth'
    return (
      <div className="auth-page-wrapper">
        <button onClick={switchToMain} className="back-button">Back</button>
        <h2 className="auth-heading">LOGIN / SIGN UP </h2>
        <div className={containerClass} id="container">
          <SignUpForm />
          <SignInForm />
          <div className="overlay-container">
            <div className="overlay">
              <div className="overlay-panel overlay-left">
                <h1>Welcome to Book Library</h1>
                <p>
                  To keep connected with Book Library please login with your Credentials
                </p>
                <button
                  className="ghost"
                  id="signIn"
                  onClick={() => handleAuthToggle("signIn")}
                >
                  Login
                </button>
              </div>
              <div className="overlay-panel overlay-right">
                <h1>Hello, Friend!</h1>
                <p>Enter your Email details and start Learning.</p>
                <button
                  className="ghost "
                  id="signUp"
                  onClick={() => handleAuthToggle("signUp")}
                >
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Render main content (Home, Explore, Footer) when view is 'main'
  return (
    <div className="App-main">
      <Home onAuthClick={switchToAuth} />
      <Explore onAuthClick={switchToAuth} />
    
      <Footer />
    </div>
  );
}
