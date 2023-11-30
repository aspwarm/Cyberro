const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files (your HTML, CSS, etc.)
app.use(express.static(path.join(__dirname, 'public')));

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Example tweets data
let tweets = [
  { user: 'User1', content: 'This is a tweet!' },
  { user: 'User2', content: 'Another tweet here.' },
];

// API endpoint to get tweets
app.get('/tweets', (req, res) => {
  res.json(tweets);
});

// API endpoint to post a tweet
app.post('/tweets', (req, res) => {
  const { user, content } = req.body;

  if (user && content) {
    const newTweet = { user, content };
    tweets.push(newTweet);
    res.json(newTweet);
  } else {
    res.status(400).json({ error: 'User and content are required.' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
