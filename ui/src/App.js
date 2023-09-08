import MovieList from "./MovieList";
import Movie from "./Movie";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MovieList />} />
      <Route path="/Movies" element={<MovieList />} />
      <Route path="/Movies/:id" element={<Movie />} />
    </Routes>
  );
}

export default App;
