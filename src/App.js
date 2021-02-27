import React, { useEffect, useState } from "react";

import Movie from "./components/Movie";

const FEATURED_API = `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_FEATURED_API}&language=en-US&page=1`;

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(FEATURED_API)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setMovies(data.results);
      });
  }, []);

  return (
    <div className="movie-container">
      {movies.length > 0 &&
        movies.map(movie => <Movie key={movie.id} {...movie} />)}
    </div>
  );
}

export default App;
