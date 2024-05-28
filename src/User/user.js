const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

// Simulatie: in-memory gebruikersdatabase
const users = [
    { username: 'user1', name: 'John Doe', email: 'john@example.com' },
    { username: 'user2', name: 'Jane Smith', email: 'jane@example.com' }
];

// Gebruikersgegevens ophalen op basis van gebruikersnaam
app.get('/user', (req, res) => {
    const { username } = req.query;

    // Simulatie: zoek gebruiker in de database op basis van gebruikersnaam
    const user = users.find(u => u.username === username);

    if (user) {
        res.json(user);
    } else {
        res.status(404).json({ message: 'User not found' });
    }
});

const port = 4000;
app.listen(port, () => {
    console.log(`User Service running on http://localhost:${port}`);
});
