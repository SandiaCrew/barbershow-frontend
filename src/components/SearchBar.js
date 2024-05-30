import React from 'react';

const SearchBar = ({ searchTerm, handleSearch }) => (
  <input
    type="text"
    className="search-bar"
    placeholder="Search..."
    value={searchTerm}
    onChange={handleSearch}
  />
);

export default SearchBar;
