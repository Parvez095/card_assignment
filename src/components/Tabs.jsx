import React from 'react';

const Tabs = ({ selectedTab, setSelectedTab }) => {
  return (
    <div className="tabs">
      <button
        className={selectedTab === 'Your' ? 'active' : ''}
        onClick={() => setSelectedTab('Your')}
      >
        Your Cards
      </button>
      <button
        className={selectedTab === 'all' ? 'active' : ''}
        onClick={() => setSelectedTab('all')}
      >
        All Cards
      </button>
      <button
        className={selectedTab === 'blocked' ? 'active' : ''}
        onClick={() => setSelectedTab('blocked')}
      >
        Blocked Cards
      </button>
    </div>
  );
};

export default Tabs;
