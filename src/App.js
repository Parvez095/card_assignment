import React, { useEffect, useState } from 'react';
import CardListingPage from './components/CardListingPage';
import SearchBar from './components/SearchBar';

const App = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/api/cards')
      .then(response => response.json())
      .then(data => setCards(data))
      .catch(error => console.log(error));
  }, []);

  const filteredCards = cards.filter(card => {
    return card.name.toLowerCase().includes(searchQuery.toLowerCase());
  });

  return (
    <div className="App">
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <CardListingPage cards={filteredCards} />
    </div>
  );
};

export default App;
