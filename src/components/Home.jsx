
function Home() {
  return (
    <div className="home">
      <img className="main-img" src="main.jpg" alt="Main" />
      <nav className="overlay-nav">
        <div className="logo">
          <img src="icon.png" alt="Icon" />
        </div>
        <ul>
          <li className="li1">Explore</li>
          <li>About</li>
        </ul>
        <div className="auth-buttons">
          <button>Login</button>
          <button>Sign Up</button>
        </div>
      </nav>

      <div className="overlay-content">
        <h2>Best Online <br />Learning Book Library</h2>
        <p>Sign up today and start exploring your next favorite read.</p>
        <button className="cta-btn">Get Started</button>
      </div>
        <footer className="overlay-footer">
        <span> Book Library 2025  &copy; All rights reserved.</span>
        <p><a href="https://developers.google.com/books">Google Books API</a></p>
      </footer>
    </div>
  );
}

export default Home;



