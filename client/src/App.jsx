import Home from './components/Home';
import Explore from './components/Explore';
import Footer from './components/Footer';
import React, { useState, useEffect } from "react";
import "./App.css";
import SignInForm from './components/signin.jsx';
import SignUpForm from './components/SignUp.jsx';
import Search from './components/Search';

// Key for localStorage
const VIEW_STORAGE_KEY = 'appView';
const AUTH_TYPE_STORAGE_KEY = 'authType';

export default function App() {
  const [view, setView] = useState(() => {
    const savedView = localStorage.getItem(VIEW_STORAGE_KEY);
    return savedView ? savedView : "main";
  });

  const [authType, setAuthType] = useState(() => {
    const savedAuthType = localStorage.getItem(AUTH_TYPE_STORAGE_KEY);
    return savedAuthType ? savedAuthType : "signIn";
  });

  useEffect(() => {
    localStorage.setItem(VIEW_STORAGE_KEY, view);
  }, [view]);

  useEffect(() => {
    localStorage.setItem(AUTH_TYPE_STORAGE_KEY, authType);
  }, [authType]);

  const handleAuthToggle = (text) => {
    if (text !== authType) setAuthType(text);
  };

  const containerClass =
    "auth-container " + (authType === "signUp" ? "right-panel-active" : "");

  const switchToAuth = () => setView("auth");
  const switchToMain = () => setView("main");

  // ✅ New function to open Search.jsx after successful login/signup
  const switchToSearch = () => setView("search");

  if (view === "auth") {
    return (
      <div className="auth-page-wrapper">
        <button onClick={switchToMain} className="back-button">
          <span className="back-icon">&#x25C0; Back</span> 
        </button>
        <h2 className="auth-heading">LOGIN / SIGN UP </h2>
        <div className={containerClass} id="container">
          <SignUpForm onAuthSuccess={switchToSearch} />
          <SignInForm onAuthSuccess={switchToSearch} />
          <div className="overlay-container">
            <div className="overlay">
              <div className="overlay-panel overlay-left">
                <h1>Welcome to Book Library</h1>
                <p>To keep connected with Book Library please login with your Credentials</p>
                <button className="ghost" id="signIn" onClick={() => handleAuthToggle("signIn")}>
                  Login
                </button>
              </div>
              <div className="overlay-panel overlay-right">
                <h1>Hello, Friend!</h1>
                <p>Enter your Email details and start Learning.</p>
                <button className="ghost" id="signUp" onClick={() => handleAuthToggle("signUp")}>
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

if (view === "search") {
  return <Search onLogout={switchToMain} />;
}

  return (
    <div className="App-main">
      <Home onAuthClick={switchToAuth} />
      <Explore onAuthClick={switchToAuth} />
      <Footer />
    </div>
  );
}

