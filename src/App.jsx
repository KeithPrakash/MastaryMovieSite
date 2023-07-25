 import {useState,useEffect} from 'react';
import './App.css'
import SearchIcon from './search.svg'
import MovieCard from './MovieCard';
// 4ddef3

const API_URL = "http://www.omdbapi.com/?i=tt3896198&apikey=4ddef3";

const movie1 = {
    "Title": "Spiderman",
    "Year": "1990",
    "imdbID": "tt0100669",
    "Type": "movie",
    "Poster": "N/A"
}

const  App=()=>{

  const [movies,setMovies] = useState([])
  const [searchItem,setItem]= useState('');

  const searchMovies = async(title)=>{
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
  setMovies(data.Search);
    console.log(data.Search);
  }
 useEffect(()=>{

  searchMovies('spiderman');

 },[])
  return (
    <div className="app">
      <h1>MovieLand</h1>
      <div className="search">
        <input
          type="text"
          placeholder="search for movies"
          onChange={(e) => setItem(e.target.value)}
        />
        <img src={SearchIcon} alt="search" onClick={() => searchMovies(searchItem)} />
      </div>
      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  );
}

export default App
