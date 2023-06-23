import React from 'react';

const Filters = ({ filter, setFilter }) => {
  const handleFilterChange = event => {
    setFilter(event.target.value);
  };

  return (
    <div className="filters">
      <label htmlFor="cardTypeFilter">Card Type:</label>
      <select id="cardTypeFilter" value={filter} onChange={handleFilterChange}>
        <option value="">All</option>
        <option value="burner">Burner</option>
        <option value="subscription">Subscription</option>
      </select>
    </div>
  );
};

export default Filters;
