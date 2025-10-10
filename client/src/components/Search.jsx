import React, { useState, useEffect } from "react";

// Helper component for Date and Time
const DateAndTime = () => {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000); // Update every second

    return () => clearInterval(timer); // Cleanup
  }, []);

  const dateOptions = { weekday: 'short', month: 'short', day: 'numeric' };
  const timeOptions = { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true };

  const date = currentDateTime.toLocaleDateString('en-US', dateOptions);
  const time = currentDateTime.toLocaleTimeString('en-US', timeOptions);

  return (
    // Added 'datetime-card' wrapper for styling
    <div className="datetime-card"> 
      <span className="date-display">{date}</span>
      <span className="time-display">{time}</span>
    </div>
  );
};

const Search = ({ onLogout }) => {
  const [showCard, setShowCard] = useState(false);
  const [query, setQuery] = useState("");

  const handleToggle = () => setShowCard(!showCard);
  const handleLogout = () => {
    alert("Logged out successfully!");
    setShowCard(false);
    onLogout && onLogout();
  };
  const handleChange = (e) => setQuery(e.target.value);
  const clearSearch = () => setQuery("");

  return (
    <div className="search-page">
      <div className="search-container">
        
        {/* Updated Header with Date and Time */}
        <header className="header">
          <div className="header-left">
            <h1>Book Library</h1>
          </div>

          <div className="header-right">
            <DateAndTime /> {/* Date and Time card */}

            <div className="user-wrapper">
              <button className="user-btn" onClick={handleToggle}>
                {/* Assuming you have a user icon/image here */}
                <img src="/user.png" alt="User" /> 
              </button>

              {showCard && (
                <div className="user-card">
                  <p className="username">Book Library</p>
                  <button className="logout-btn" onClick={handleLogout}>
                    Logout
                  </button>
                </div>
              )}
            </div>
          </div>
        </header>

        <div className="search-bar-content">
          <div className="search-bar">
            <div className="search-input-wrapper">
              <input
                type="text"
                value={query}
                onChange={handleChange}
                placeholder="Search by book title..."
                className="search-input"
              />
              {query && (
                <span className="clear-icon" onClick={clearSearch}>
                  &times;
                </span>
              )}
              <button className="search-button"></button> 
            </div>
          </div>

          <div className="search-results">
              {/* Search results content will go here */}
          </div>
        </div>
        
        {/* Footer Section - now positioned correctly at the bottom */}
        <footer className="search-footer">
            <p className="footer-text">
                Designed by <strong>Arun Kumar R</strong> | Powered by <strong>Google API</strong>
            </p>
        </footer>

      </div>
    </div>
  );
};

export default Search;