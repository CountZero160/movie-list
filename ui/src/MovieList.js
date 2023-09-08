import React from "react";

const movies = [
  { title: "Mean Girls" },
  { title: "Hackers" },
  { title: "The Grey" },
  { title: "Sunshine" },
  { title: "Ex Machina" },
];

function MovieList() {
  return (
    <div>
      <h3>Movie List</h3>
      <ul>
        {movies.map(function (movie) {
          return <li>{movie.title}</li>;
        })}
      </ul>
    </div>
  );
}

export default MovieList;
