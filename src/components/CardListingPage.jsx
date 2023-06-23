import React, { useEffect, useState } from 'react';
import Card from './Card';

const CardListingPage = ({ cards }) => {
  const [filteredCards, setFilteredCards] = useState([]);
  const [activeTab, setActiveTab] = useState('Your');
  const [searchQuery, setSearchQuery] = useState('');
  const [visibleCards, setVisibleCards] = useState(10);

  const filterCards = () => {
    let filteredData = [...cards];

    if (activeTab === 'Your') {
      filteredData = filteredData.filter((card) => card.owner_id === 1); // Replace with the owner_id of the logged-in user
    } else if (activeTab === 'Blocked') {
      filteredData = filteredData.filter((card) => card.status === 'blocked');
    }

    filteredData = filteredData.filter((card) =>
      card.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    setFilteredCards(filteredData);
  };

  useEffect(() => {
    filterCards();
  }, [activeTab, searchQuery, cards]);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setVisibleCards(10); 
  };

  const handleSearchQueryChange = (event) => {
    setSearchQuery(event.target.value);
    setVisibleCards(10); 
  };

  const handleLoadMore = () => {
    setVisibleCards(prevVisibleCards => prevVisibleCards + 10);
  };

  const renderCards = () => {
    const cardsToRender = filteredCards.slice(0, visibleCards);

    return cardsToRender.map((card) => (
      <Card key={card.name} card={card} />
    ));
  };

  return (
    <div className="card-listing-page">
      <div className="tabs">
        <button
          className={activeTab === 'Your' ? 'active' : ''}
          onClick={() => handleTabChange('Your')}
        >
          Your Cards
        </button>
        <button
          className={activeTab === 'All' ? 'active' : ''}
          onClick={() => handleTabChange('All')}
        >
          All Cards
        </button>
        <button
          className={activeTab === 'Blocked' ? 'active' : ''}
          onClick={() => handleTabChange('Blocked')}
        >
          Blocked Cards
        </button>
      </div>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search by card name"
          value={searchQuery}
          onChange={handleSearchQueryChange}
        />
      </div>
      <div className="card-list">
        {renderCards()}
      </div>
      {visibleCards < filteredCards.length && (
        <div className="load-more">
          <button onClick={handleLoadMore}>Load More</button>
        </div>
      )}
    </div>
  );
};

export default CardListingPage;
