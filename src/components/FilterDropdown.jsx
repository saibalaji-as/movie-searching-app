const FilterDropdown = ({ onFilterChange }) => (
    <select onChange={(e) => onFilterChange(e.target.value)}>
      <option value="">All</option>
      <option value="movie">Movies</option>
      <option value="series">Series</option>
      <option value="episode">Episodes</option>
    </select>
  );
  
  export default FilterDropdown;
  