// Explenations on "expressjs.com"
const express = require('express');
const app = express();
const logger = require('./05-2-2-logger');
const authorize = require('./05-2-3-authorize');
// req => middleware => res

// enter a url (↓) as the fist param to shorten the rest of the url
// app.use('/api',logger); → applys to all incoming req
// api/home/about/products
app.use([logger, authorize]);
app.get('/', logger, (req, res) => {
    res.send('Home');
});
app.get('/about', logger, (req, res) => {
    res.send('About');
});
app.get('/api/products', logger, (req, res) => {
    res.send('Products');
});
app.get('/api/items', logger, (req, res) => {
    console.log(req.user);
    res.send('Items');
});

app.listen(5000, () => {
    console.log('Server is listening on port 5000...');
});