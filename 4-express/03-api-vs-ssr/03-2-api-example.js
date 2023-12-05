/*
    Option 1:
        data fetching - send bacj json (will use databases later on)
        creating interface --> grab data and then we are responsible for setting up the responses
    Option 2:
        Server Side Rendering - SSR
*/

const express = require('express');
const app = express();
const { products } = require('./data');

app.get('/', (req, res) => {
    res.json(products);
});

app.listen(5000, () => {
    console.log('Server is listening on port 5000...');
});