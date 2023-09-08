import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Movie() {
  const { id } = useParams();
  const [movie, setMovie] = useState();

  useEffect(() => {
    fetch(`http://localhost:8080/movies/${id}`)
      .then((response) => response.json())
      .then((data) => setMovie(data))
      .catch((error) => console.error(error));
  }, [id]);

  if (movie !== undefined) {
    return (
      <div>
        <h3>Movie List</h3>
        <ul>
          <li key={movie[0].id}>{movie[0].title}</li>
        </ul>
      </div>
    );
  } else {
    return;
  }
}

export default Movie;
