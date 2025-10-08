function Explore({ onAuthClick }) {
  return (
    <div id="Explore" className="explore-container">
      <div className="image-row">
        <img src="img2 (2).jpg" alt="Main" className="explore-img" />
      </div>
      <div className="overlay-explore"> {/* Changed class to avoid conflict */}
        <h2>Focus on Knowledge and Discovery</h2>
        <p>
          Step inside and let the journey of discovery begin, where history and
          the future are all within your grasp. Our library is your key to vast
          knowledge, offering resources that are both deep and easily accessible.
          Turn a page, learn a new skill, and explore a world beyond your imagination.
          Your path to lifelong learning starts at your local library.
        </p>
        <button className="cta-btn-explore" onClick={onAuthClick}>Get Started</button> {/* Updated and changed class */}
        <a
          href="https://lbb.in/bangalore/libraries-bangalore/"
          target="_blank"
          rel="noreferrer"
        >
          Explore Libraries in Bengaluru
          &copy; Credit's to lbb.in 
        </a>
      </div>
    </div>
  );
}

export default Explore;
