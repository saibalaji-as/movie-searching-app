import React from "react";
import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => (
  <div className="movie-card">
    <img src={movie.Poster} alt={movie.Title} />
    <h3>{movie.Title}</h3>
    <p>{movie.Year}</p>
    <Link to={`/details/${movie.imdbID}`}>Details</Link>
  </div>
);

export default MovieCard;
