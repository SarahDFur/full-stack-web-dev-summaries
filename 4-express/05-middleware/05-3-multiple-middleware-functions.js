// Explenations on "expressjs.com"
const express = require('express');
const app = express();
const logger = require('./05-2-2-logger');
const authorize = require('./05-2-3-authorize');
// req => middleware => res

/* Middleware:
    1. use vs route
    2. options -/ our own: 
                    What we've used up 'til now - 
                    app.use([logger, authorize]); 
                / express:  
                    app.use(express.static('./public'));
                / third party: 
                    morgan('tiny'); [npm i morgan]
                    app.use(morgan('tiny'));
*/
// app.use([logger, authorize]);
// app.use(express.static('./public));
app.get('/', logger, (req, res) => {
    res.send('Home');
});
app.get('/about', logger, (req, res) => {
    res.send('About');
});
app.get('/api/products', logger, (req, res) => {
    res.send('Products');
});
app.get('/api/items', [logger, authorize], (req, res) => {
    console.log(req.user);
    res.send('Items');
});

app.listen(5000, () => {
    console.log('Server is listening on port 5000...');
});