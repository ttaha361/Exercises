// Import necessary modules
const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const asyncErrors = require('express-async-errors');

// Load environment variables from .env file
dotenv.config();

// Initialize Express app
const app = express();

// Middleware to parse JSON requests
app.use(express.json());

// Middleware for logging requests
app.use(morgan('dev'));

// Dummy database of planets
let planets = [
  {
    id: 1,
    name: 'Earth',
  },
  {
    id: 2,
    name: 'Mars',
  },
];

// Routes
app.get('/planets', (req, res) => {
  res.json(planets);
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

// Set up port
const PORT = process.env.PORT || 3000;

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// Use express-async-errors to handle asynchronous errors
asyncErrors(); 
