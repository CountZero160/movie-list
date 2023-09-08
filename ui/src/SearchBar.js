import React, { useState, useEffect } from "react";

export const SearchBar = () => {
  const [input, setInput] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:8080/movies/`)
      .then((response) => response.json())
      .then((data) => setMovieList(data))
      .catch((error) => console.error(error));
  }, []);

  const searchItems = (searchValue) => {
    setInput(searchValue);
    if (input !== "") {
      const filteredData = movieList.filter((item) => {
        return Object.values(item).join("").toLowerCase();
      });
      setFilteredResults(filteredData);
    } else {
      setFilteredResults(movieList);
    }
  };

  return (
    <div style={{ padding: 20 }}>
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

export default SearchBar;
