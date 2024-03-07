// SearchBar.js
import React from 'react';
import './Searchbar.css'; // Import your CSS file

const SearchBar = () => {
  return (
    <div className="search-bar">
        <input type="text" placeholder="Search By Values" />
        <button>Search</button>
        </div>
  );
};

export default SearchBar;
