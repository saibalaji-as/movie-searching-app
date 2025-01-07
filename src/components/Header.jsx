import React from "react";

const Header = ({ onSearch, onFilterChange }) => {
  return (
    <header className="header">
      <div className="header-left">
        <h1>Movies</h1>
      </div>
      <div className="header-middle">
        <input
          type="text"
          placeholder="Search movies..."
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              onSearch(e.target.value);
            }
          }}
        />
      </div>
      <div className="header-right">
        <select onChange={(e) => onFilterChange(e.target.value)}>
          <option value="">All</option>
          <option value="movie">Movies</option>
          <option value="series">Series</option>
          <option value="episode">Episodes</option>
        </select>
      </div>
    </header>
  );
};

export default Header;
