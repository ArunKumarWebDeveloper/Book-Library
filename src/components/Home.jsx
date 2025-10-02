function Home({ onAuthClick }) {
  return (
    <div className="home">
      <img className="main-img" src="exp (2).png" alt="Main" />
      <nav className="overlay-nav">
        <div className="logo">
          <img src="icon.png" alt="Icon" />
        </div>
        <ul>
          <li className="li1" ><a href="#Explore">Explore</a></li>
          <li><a href="#about">About</a></li>
        </ul>
        <div className="auth-buttons">
          <button onClick={onAuthClick}>Login / Sign Up</button> {/* Updated */}
        </div>
      </nav>

      <div className="overlay-content">
        <h2>Best Online <br />Learning Book Library</h2>
        <p>Sign up today and start exploring your next favorite read.</p>
        <button className="cta-btn" onClick={onAuthClick}>Get Started</button> {/* Updated */}
      </div>
       
    </div>
  );
}

export default Home;



