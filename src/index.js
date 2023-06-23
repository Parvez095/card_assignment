import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import axios from 'axios';

axios.get('https://prismatic-lokum-919d4a.netlify.app/api/cards', {
  params: {
    page: 2,
    limit: 5
  }
})
  .then(response => {
    console.log(response.data);
    ReactDOM.render(
      <React.StrictMode>
        <App cards={response.data} />
      </React.StrictMode>,
      document.getElementById('root')
    );
  })
  .catch(error => {
    console.error(error);
  });
