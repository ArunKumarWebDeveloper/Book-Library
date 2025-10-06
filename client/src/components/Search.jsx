import React, { useState } from "react";


const Search = () => {
  const [showCard, setShowCard] = useState(false);

  const handleToggle = () => {
    setShowCard(!showCard);
  };

  const handleLogout = () => {
    alert("Logged out successfully!");
    setShowCard(false);
  };

  return (
    <div className="search-page">
      <div className="search-container">
        <header className="header">
          <h1>Book Library</h1>

          <div className="user-wrapper">
            <button className="user-btn" onClick={handleToggle}>
              <img src="/user.png" alt="User" />
            </button>

            {showCard && (
              <div className="user-card">
                <p className="username">Arun Kumar</p>
                <button className="logout-btn" onClick={handleLogout}>
                  Logout
                </button>
              </div>
            )}
          </div>
        </header>

        <div className="search-bar">
          <input type="text" placeholder="Search by book title..." />
          <button className="search-button"></button>
        </div>

        <div className="search-results">
          <div className="book-card"></div>
        </div>
      </div>
    </div>
  );
};

export default Search;


