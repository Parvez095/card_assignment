import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CardComponent = () => {
  const [cards, setCards] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchCards();
  }, []);

  const fetchCards = () => {
    axios
      .get(`http://localhost:3001/api/cards?page=${page}&limit=10`)
      .then((response) => {
        const data = response.data.data;
        setCards((prevCards) => [...prevCards, ...data]);
      })
      .catch((error) => {
        console.error('Error fetching card data:', error);
      });
  };

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <div>
      {cards.map((card) => (
        <div key={card.name}>
          <h2 className="card-name">{card.name}</h2>
          <p>Budget Name: {card.budget_name}</p>
        </div>
      ))}
      <button onClick={handleLoadMore}>Load More</button>
    </div>
  );
};

export default CardComponent;
