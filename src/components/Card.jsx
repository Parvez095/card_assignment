import React from 'react';
import styles from './Card.module.css';

const Card = ({ card }) => {
  const { name, budget_name, owner_id, spent, available_to_spend, card_type, expiry, limit, status } = card;

  return (
    <div className={styles.card}>
      <div className={styles.cardType}>{card_type}</div>
      <div className={styles.cardContent}>
        <div>
          <span className={styles.label}>Name:</span>
          {name}
        </div>
        <div>
          <span className={styles.label}>Budget Name:</span>
          {budget_name}
        </div>
        <div>
          <span className={styles.label}>Owner ID:</span>
          {owner_id}
        </div>
        {card_type === 'burner' && (
          <div>
            <span className={styles.label}>Spent:</span>
            {spent.value} {spent.currency}
          </div>
        )}
        {card_type === 'subscription' && (
          <div>
            <span className={styles.label}>Available to Spend:</span>
            {available_to_spend.value} {available_to_spend.currency}
          </div>
        )}
        {card_type === 'burner' && (
          <div>
            <span className={styles.label}>Expiry:</span>
            {expiry}
          </div>
        )}
        {card_type === 'subscription' && (
          <div>
            <span className={styles.label}>Limit:</span>
            {limit}
          </div>
        )}
        <div>
          <span className={styles.label}>Status:</span>
          {status}
        </div>
      </div>
    </div>
  );
};

export default Card;
