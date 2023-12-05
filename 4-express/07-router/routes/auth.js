/**
 * 9 - add /login to auth.js
 * 10 - setup express and router
 * 11 - export router
 */
const express = require('express');
const router = express.Router();

app.post('/', (req, res) => {
    const {name} = req.body;
    if (name) {
        return res.status(200).send(`Welcome ${name}`);
    }
    res.status(401).send('Please Provide Credentials');
});

module.exports = router