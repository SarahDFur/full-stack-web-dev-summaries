// Explenations on "expressjs.com"
// [Refer to notes in folder 01-http]
//import info
const express = require('express');
const app = express();
let {people} = require('./data');
//get method: shows on localhost:5000/api/people
app.get('/api/people', (req, res) => {
    // send back obj
    res.status(200).json({success: true, data: people});
});

app.listen(5000, () => {
    console.log('Server is listening on port 5000...');
});