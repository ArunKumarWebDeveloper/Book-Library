import React from "react";

// Testimonial Data (No Change)
const testimonialsData = [
  {
    id: 1,
    book: "The Silent Patient",
    text: "A gripping thriller with a shocking twist! I couldn't put it down.",
    rating: 5,
  },
  {
    id: 2,
    book: "Atomic Habits",
    text: "This book genuinely changed how I approach my daily goals. Highly practical and motivating.",
    rating: 5,
  },
  {
    id: 3,
    book: "Project Hail Mary",
    text: "Sci-fi at its absolute best! Witty, clever, and full of heart.",
    rating: 5,
  },
  {
    id: 4,
    book: "The Midnight Library",
    text: "A beautiful, existential read that reminds you to embrace life and its possibilities.",
    rating: 4,
  },
  {
    id: 5,
    book: "Sapiens: A Brief History of Humankind",
    text: "Incredibly informative and thought-provoking. A must-read for perspective on humanity.",
    rating: 5,
  },
];

// Star Rating Component (No Change)
const StarRating = ({ rating }) => {
    return (
        <div className="star-rating">
            {[...Array(5)].map((_, index) => {
                return (
                    <span 
                        key={index} 
                        className="star"
                        style={{ color: index < rating ? '#FFD700' : '#dadadaff' }} 
                    >
                        ★
                    </span>
                );
            })}
        </div>
    );
};


function Explore() {
  return (
    <div id="Explore" className="explore-section-wrapper">
      <div className="explore-container">
        
        {/* The image is now set as the background of the container via CSS for better control */}
        <div className="image-row">
          <img src="img2 (2).jpg" alt="Main" className="explore-img" />
        </div>
        
        {/* Consolidated Overlay with all content */}
        <div className="overlay-explore">
          
          {/* Main Content */}
          <div className="main-content-area">
            <h2>Focus on Knowledge and Discovery</h2>
          </div>

          {/* Testimonials Section - Integrated into the overlay */}
          <div className="testimonials-section">
              <h3>Top Rated Reads</h3>
              <div className="testimonials-grid">
                  {testimonialsData.map((t) => (
                      <div key={t.id} className="testimonial-card">
                         <div className="testimonial-text"> <p >"{t.text}"</p></div>
                          <StarRating rating={t.rating} />
                          <div className="testimonial-book">
                              <strong>{t.book}</strong>
                          </div>
                      </div>
                  ))}
              </div>
          </div>
          
          
          <a
            href="https://lbb.in/bangalore/libraries-bangalore/"
            target="_blank"
            rel="noreferrer"
            className="attribution-link"
          >
            Explore Libraries in Bengaluru &copy; Credit's to lbb.in
          </a>
          
        </div>

      </div>
    </div>
  );
}

export default Explore;