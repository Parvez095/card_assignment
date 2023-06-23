import React, { useEffect, useState } from 'react';
import CardListingPage from './components/CardListingPage';
import SearchBar from './components/SearchBar';
// app.js working
const App = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetch('https://prismatic-lokum-919d4a.netlify.app/api/cards')
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
