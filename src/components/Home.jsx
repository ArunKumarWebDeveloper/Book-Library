
function Home() {
  

  return (
    <div className="home">
      <div className="Search">
        <img src="./public/user.png" alt="user" />
       <div className="user">
        <nav>
          <ul>
            <li><h4>Book Library</h4></li>
          </ul>
        </nav>
       </div>
       
      <div className="search-bar">
        <input type="text" placeholder="Search for books..." />
        <button>Search</button>
        <h2>Search the Books You Love</h2>
        <footer>@Book Library 2025  <a href="https://developers.google.com/books">Link to API</a></footer>
       </div>
       
      </div>
       

      <div className="Content">
      
      </div>
      
    </div>
    
  );
}

export default Home;


