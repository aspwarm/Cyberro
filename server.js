const express = require('express');
const app = express();
const port = 3000;

// Placeholder data for user profile and recommended courses
const userProfile = { username: 'JohnDoe', interests: ['Programming', 'Art'] };
const recommendedCourses = [
    { title: 'Web Development 101', category: 'Programming' },
    { title: 'Introduction to Digital Art', category: 'Art' },
    // Add more courses
];

app.use(express.static('public'));

app.get('/api/profile', (req, res) => {
    res.json(userProfile);
});

app.get('/api/recommendations', (req, res) => {
    res.json(recommendedCourses);
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
