const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());
app.use(express.static('public'));

// Mock user database
const users = [
    { username: 'admin', password: 'admin123' },
    { username: 'user', password: 'user123' }
];

// Login route
app.post('/login', (req, res) => {
    const { username, password } = req.body;
    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
        res.json({ success: true });
    } else {
        res.status(401).json({ success: false, message: 'Invalid username or password' });
    }
});

// Dashboard route (just for demonstration)
app.get('/dashboard', (req, res) => {
    res.send('Welcome to the dashboard!');
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
