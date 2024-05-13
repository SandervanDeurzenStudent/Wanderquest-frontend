import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// const express = require("express");
// const bodyParser = require('body-parser');
// const JsonDB = require('node-json-db').JsonDB;
// const Config = require('node-json-db/dist/lib/JsonDBConfig').Config;
// const uuid = require("uuid");
// const speakeasy = require("speakeasy");
//
// const app = express();
//
// // Parse application/json
// app.use(bodyParser.json());
//
// // Configure JSON database
// const dbConfig = new Config("myDataBase", true, false, '/');
// const db = new JsonDB(dbConfig);
//
// // Define API endpoints
// app.post("/api/register", (req, res) => {
//     const id = uuid.v4();
//     try {
//         const path = `/user/${id}`;
//         const temp_secret = speakeasy.generateSecret();
//         db.push(path, { id, temp_secret });
//         res.json({ id, secret: temp_secret.base32 });
//     } catch(e) {
//         console.error(e);
//         res.status(500).json({ message: 'Error generating secret key'});
//     }
// });
//
// app.post("/api/verify", (req,res) => {
//     const { userId, token } = req.body;
//     try {
//         // Retrieve user from database
//         const path = `/user/${userId}`;
//         const user = db.getData(path);
//         console.log({ user })
//         const { base32: secret } = user.temp_secret;
//         const verified = speakeasy.totp.verify({
//             secret,
//             encoding: 'base32',
//             token
//         });
//         if (verified) {
//             // Update user data
//             db.push(path, { id: userId, secret: user.temp_secret });
//             res.json({ verified: true })
//         } else {
//             res.json({ verified: false})
//         }
//     } catch(error) {
//         console.error(error);
//         res.status(500).json({ message: 'Error retrieving user'})
//     };
// })
// // Start the server
// const port = 9000;
// app.listen(port, () => {
//     console.log(`App is running on PORT: ${port}.`);
// });
//
