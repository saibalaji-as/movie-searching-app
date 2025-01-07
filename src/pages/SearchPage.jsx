import React, { useEffect, useState } from "react";
import MovieGrid from "../components/MovieGrid";
import Pagination from "../components/Pagination";
import { fetchMovies } from "../services/omdbService";

const SearchPage = ({ searchTerm, filter }) => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchMovies(searchTerm, page, filter);
        if (data.Response === "True") {
          setMovies(data.Search);
          setTotalResults(Number(data.totalResults));
          setError("");
        } else {
          setMovies([]);
          setError(data.Error);
        }
      } catch {
        setError("An error occurred. Please try again.");
      }
    };

    if (searchTerm) {
      fetchData();
    }
  }, [searchTerm, page, filter]);

  return (
    <div>
      {error && <p className="error-message">{error}</p>}
      <MovieGrid movies={movies} />
      <Pagination
        currentPage={page}
        totalResults={totalResults}
        onPageChange={setPage}
      />
    </div>
  );
};

export default SearchPage;
