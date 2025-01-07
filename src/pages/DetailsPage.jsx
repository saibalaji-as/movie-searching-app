import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieDetails } from "../services/omdbService";

const DetailsPage = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const data = await fetchMovieDetails(id);
        if (data.Response === "True") {
          setMovie(data);
        } else {
          setError(data.Error);
        }
      } catch (err) {
        setError("An error occurred. Please try again.");
      }
    };

    fetchDetails();
  }, [id]);

  if (error) return <p className="error-message">{error}</p>;

  return movie ? (
    <div className="details-page">
      <div className="details-poster">
        <img src={movie.Poster} alt={movie.Title} />
      </div>
      <div className="details-content">
        <h1 className="details-title">{movie.Title}</h1>
        <div className="details-info">
          <p><strong>Year:</strong> {movie.Year}</p>
          <p><strong>Genre:</strong> {movie.Genre}</p>
          <p><strong>Plot:</strong> {movie.Plot}</p>
          <p><strong>Actors:</strong> {movie.Actors}</p>
        </div>
        <p className="details-ratings">IMDb Rating: {movie.imdbRating}</p>
      </div>
    </div>
  ) : (
    <p className="loading-message">Loading...</p>
  );
};

export default DetailsPage;
