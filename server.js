const express = require('express');
const cors = require('cors');
const app = express();
// const PORT = 3001;

// Enable CORS
app.use(cors());

// Mock JSON data
const jsonData = {
    data: [
        {
          name: 'Mixmax',
          budget_name: 'Software subscription',
          owner_id: 1,
          spent: {
            value: 100,
            currency: 'SGD'
          },
          available_to_spend: {
            value: 1000,
            currency: 'SGD'
          },
          card_type: 'burner',
          expiry: '9 Feb',
          limit: 100,
          status: 'active'
        },
        {
          name: 'Quickbooks',
          budget_name: 'Software subscription',
          owner_id: 2,
          spent: {
            value: 50,
            currency: 'SGD'
          },
          available_to_spend: {
            value: 250,
            currency: 'SGD'
          },
          card_type: 'subscription',
          limit: 10,
          status: 'active'
        },
        // Add the additional card data here
        {
          name: 'Netflix',
          budget_name: 'Entertainment subscription',
          owner_id: 3,
          spent: {
            value: 75,
            currency: 'SGD'
          },
          available_to_spend: {
            value: 500,
            currency: 'SGD'
          },
          card_type: 'subscription',
          limit: 5,
          status: 'active'
        },
        {
          name: 'Amazon',
          budget_name: 'Online shopping',
          owner_id: 4,
          spent: {
            value: 200,
            currency: 'SGD'
          },
          available_to_spend: {
            value: 800,
            currency: 'SGD'
          },
          card_type: 'burner',
          expiry: '15 Mar',
          limit: 150,
          status: 'active'
        },
        {
          name: 'Spotify',
          budget_name: 'Music subscription',
          owner_id: 5,
          spent: {
            value: 30,
            currency: 'SGD'
          },
          available_to_spend: {
            value: 200,
            currency: 'SGD'
          },
          card_type: 'subscription',
          limit: 15,
          status: 'active'
        },
        {
            name: 'Flipkart',
            budget_name: 'Online shopping',
            owner_id: 5,
            spent: {
              value: 100,
              currency: 'SGD'
            },
            available_to_spend: {
              value: 200,
              currency: 'SGD'
            },
            card_type: 'burner',
            expiry: '15 Mar',
            limit: 150,
            status: 'active'
          },
          {
            name: 'Meesho',
            budget_name: 'Online shopping',
            owner_id: 6,
            spent: {
              value: 50,
              currency: 'SGD'
            },
            available_to_spend: {
              value: 200,
              currency: 'SGD'
            },
            card_type: 'burner',
            expiry: '18 Mar',
            limit: 150,
            status: 'active'
          },
          {
            name: 'Myntra',
            budget_name: 'Online shopping',
            owner_id: 1,
            spent: {
              value: 50,
              currency: 'SGD'
            },
            available_to_spend: {
              value: 200,
              currency: 'SGD'
            },
            card_type: 'burner',
            expiry: '18 Mar',
            limit: 150,
            status: 'active'
          },
          {
            name: 'PVR',
            budget_name: 'Movie Booking',
            owner_id: 1,
            spent: {
              value: 150,
              currency: 'SGD'
            },
            available_to_spend: {
              value: 200,
              currency: 'SGD'
            },
            card_type: 'burner',
            expiry: '18 Mar',
            limit: 150,
            status: 'active'
          },
          {
            name: 'Book My show',
            budget_name: 'Movie Booking',
            owner_id: 6,
            spent: {
              value: 50,
              currency: 'SGD'
            },
            available_to_spend: {
              value: 200,
              currency: 'SGD'
            },
            card_type: 'burner',
            expiry: '18 Mar',
            limit: 150,
            status: 'active'
          },
          {
            name: 'Book My show',
            budget_name: 'Movie Booking',
            owner_id: 6,
            spent: {
              value: 50,
              currency: 'SGD'
            },
            available_to_spend: {
              value: 200,
              currency: 'SGD'
            },
            card_type: 'burner',
            expiry: '18 Mar',
            limit: 150,
            status: 'active'
          }
      ]
    };
// API endpoint to fetch paginated cards

app.get('/api/cards', (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;

  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;

  const paginatedCards = jsonData.data.slice(startIndex, endIndex);

  res.json(paginatedCards);
});

// Start the server
app.listen(3001, () => {
  console.log('Server is running on port 3001');
});
