import React, { useState, useEffect } from "react";

export const SearchBar = () => {
  const [movies, setMovies] = useState([]);
  const [filteredResults, setFilteredResults] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    fetch(`http://localhost:8080/movies/`)
      .then((response) => response.json())
      .then((data) => setMovies(data))
      .catch((error) => console.error(error));
  }, []);

  const searchItems = (searchValue) => {
    setSearchInput(searchValue);
    if (searchInput !== "") {
      const filteredData = movies.filter((item) => {
        return Object.values(item)
          .join("")
          .toLowerCase()
          .includes(searchInput.toLowerCase());
      });
      setFilteredResults(filteredData);
    } else {
      setFilteredResults(movies);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Movie Search"
        onChange={(e) => searchItems(e.target.value)}
      />
      {filteredResults.map((movie) => {
        return <li key={movie.id}>{movie.title}</li>;
      })}
      {console.log(filteredResults)}
    </div>
  );
};
