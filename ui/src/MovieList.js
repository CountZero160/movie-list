import React, { useEffect, useState } from "react";

function MovieList() {
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:8080/movies/`)
      .then((response) => response.json())
      .then((data) => setMovieList(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <h3>Movie List</h3>
      <ul>
        {movieList.map(function (movie) {
          return <li key={movie.id}>{movie.title}</li>;
        })}
      </ul>
    </div>
  );
}

export default MovieList;
