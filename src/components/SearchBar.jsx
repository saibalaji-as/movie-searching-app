import React, { useState } from "react";
const SearchBar = ({ onSearch }) => {
    const [term, setTerm] = useState("");
  
    const handleSearch = () => {
      if (term) onSearch(term);
    };
  
    return (
      <div>
        <input
          type="text"
          placeholder="Search movies..."
          value={term}
          onChange={(e) => setTerm(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
    );
  };
  
  export default SearchBar;
  