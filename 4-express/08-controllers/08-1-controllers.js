/**
 * 1 - make a folder for all the project named "controllers"
 *     [here it will stay inside a seperate directory for orginizations sake]
 *     [we'll use the same routes as in 07-router, but change them to fit
 *      with a controller]
 * 2 - 
 */
const express = require('express');
const app = express();

const people = require('../07-router/routes/people');
const auth = require('../07-router/routes/auth');

// static assets
app.use(express.static('./methods-public'));
// pase form data 
app.use(express.urlencoded({extended: false}));
// parse json 
app.use(express.json());

app.use('/api/people', people);
app.use('/login', auth);

app.listen(5000, () => {
    console.log('Server is listening on port 5000...');
});