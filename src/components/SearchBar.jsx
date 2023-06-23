import React from 'react';

const SearchBar = ({ searchQuery, setSearchQuery }) => {
  const handleSearchChange = event => {
    setSearchQuery(event.target.value);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search by card name"
        value={searchQuery}
        onChange={handleSearchChange}
      />
    </div>
  );
};

export default SearchBar;
