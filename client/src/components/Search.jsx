import React, { useState } from "react";

const Search = ({ onLogout }) => {
  const [showCard, setShowCard] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [books, setBooks] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);

  const handleToggle = () => {
    setShowCard(!showCard);
  };

  const handleLogout = () => {
    alert("Logged out successfully!");
    setShowCard(false);
    onLogout && onLogout();
  };

  // Fetch books from Google Books API
  const handleSearch = async () => {
    if (!searchQuery) return;
    try {
      const res = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(
          searchQuery
        )}`
      );
      const data = await res.json();
      setBooks(data.items || []);
    } catch (err) {
      console.error("Error fetching books:", err);
    }
  };

  // Open modal with book details
  const handleReadNow = (book) => {
    setSelectedBook(book);
  };

  // Close modal
  const closeModal = () => setSelectedBook(null);

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

        {/* Search bar */}
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search by book title..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && handleSearch()}
          />
          <button className="search-button" onClick={handleSearch}>
            
          </button>
        </div>

        {/* Search results */}
        <div className="search-results">
          {books.map((book) => {
            const info = book.volumeInfo;
            return (
              <div key={book.id} className="book-card">
                <img
                  src={info.imageLinks?.thumbnail}
                  alt={info.title}
                  className="book-thumb"
                />
                <h3>{info.title}</h3>
                <p>{info.authors?.join(", ")}</p>
                <button onClick={() => handleReadNow(info)}>Read Now</button>
              </div>
            );
          })}
        </div>

        {/* Modal for reading book */}
        {selectedBook && (
          <div className="modal-overlay" onClick={closeModal}>
            <div
              className="modal-content"
              onClick={(e) => e.stopPropagation()}
            >
              <h2>{selectedBook.title}</h2>
              <p><strong>Authors:</strong> {selectedBook.authors?.join(", ")}</p>
              <p>{selectedBook.description || "No description available."}</p>
              {selectedBook.previewLink && (
                <a
                  href={selectedBook.previewLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Read Full Book
                </a>
              )}
              <button onClick={closeModal}>Close</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;
