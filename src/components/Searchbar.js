import React, { useState } from 'react';
import './Searchbar.css';

const Searchbar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log('Search term submitted:', searchTerm);
    
    if (typeof onSearch === 'function') { // Check if onSearch is a function
      onSearch(searchTerm); // Trigger search when form is submitted
    } else {
      console.error("onSearch prop is not provided or is not a function");
    }
  };

  return (
    <div className="searchbar">
      <form onSubmit={handleSearchSubmit}>
        <input
          type="text"
          value={searchTerm}
          onChange={handleInputChange}
          placeholder="Search for a band..."
          className="search-bar"
        />
      </form>
    </div>
  );
};

export default Searchbar;
