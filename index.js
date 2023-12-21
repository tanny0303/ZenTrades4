const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = 3000;

// Middleware to parse the body of incoming requests
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files (e.g., HTML, CSS, images)
app.use(express.static('public'));

// Define a route for the home page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Define a route to handle the password submission
app.post('/login', (req, res) => {
  const { password } = req.body;

  // Check if the password is correct
  if (password === 'SmartServTest@123') {
    // Password is correct, redirect to a new page
    res.redirect('/success');
  } else {
    // Password is incorrect, redirect back to the login page
    res.redirect('/');
  }
});

// Define a route for the success page
app.get('/success', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'show.html'));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
