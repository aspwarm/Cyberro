// server.js

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3000;

// Connect to MongoDB
mongoose.connect('mongodb://localhost/twitterClone', { useNewUrlParser: true, useUnifiedTopology: true });

// Define a Tweet schema
const tweetSchema = new mongoose.Schema({
  user: String,
  content: String,
});

const Tweet = mongoose.model('Tweet', tweetSchema);

app.use(bodyParser.json());

// API endpoint to get tweets
app.get('/tweets', async (req, res) => {
  try {
    const tweets = await Tweet.find();
    res.json(tweets);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// API endpoint to post a tweet
app.post('/tweets', async (req, res) => {
  const { user, content } = req.body;

  try {
    const newTweet = new Tweet({ user, content });
    await newTweet.save();
    res.json(newTweet);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
