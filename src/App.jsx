import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import SearchPage from "./pages/SearchPage";
import DetailsPage from "./pages/DetailsPage";
import './styles/styles.css';

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("");

  const handleSearch = (term) => setSearchTerm(term);
  const handleFilterChange = (filterType) => setFilter(filterType);

  return (
    <Router>
      <Header onSearch={handleSearch} onFilterChange={handleFilterChange} />
      <Routes>
        <Route path="/" element={<SearchPage searchTerm={searchTerm} filter={filter} />} />
        <Route path="/details/:id" element={<DetailsPage />} />
      </Routes>
    </Router>
  );
};

export default App;
