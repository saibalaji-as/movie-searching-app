import React from "react";
import MovieCard from "./MovieCard";

const MovieGrid = ({ movies }) => (
  <div className="movie-grid">
    {movies.map((movie) => (
      <MovieCard key={movie.imdbID} movie={movie} />
    ))}
  </div>
);

export default MovieGrid;
