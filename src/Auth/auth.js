const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

// Simulatie: in-memory gebruikersdatabase
const users = [
    { username: 'user1', password: 'pass123', name: 'John Doe', email: 'john@example.com' },
    { username: 'user2', password: 'pass456', name: 'Jane Smith', email: 'jane@example.com' }
];

// Authenticatie-eindpunt
app.post('/authenticate', (req, res) => {
    const { username, password } = req.body;

    // Simulatie: zoek gebruiker in de database op basis van gebruikersnaam en wachtwoord
    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
        res.json({ success: true, user });
    } else {
        res.status(401).json({ success: false, message: 'Authentication failed' });
    }
});

const port = 3000;
app.listen(port, () => {
    console.log(`Auth Service running on http://localhost:${port}`);
});
