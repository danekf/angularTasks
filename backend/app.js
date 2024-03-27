const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

// Middleware
app.use(cors()); // Enable All CORS Requests for simplicity, configure to your needs in production
app.use(express.json()); // Allows parsing of JSON from requests


// Placeholder for routes
app.get('/tasks', (req, res) => {
  // We'll fill this in later with DB logic
  res.json([]); // Initially return an empty array
});

app.listen(port, () => {
  console.log(`Backend listening on port ${port}`);
});
