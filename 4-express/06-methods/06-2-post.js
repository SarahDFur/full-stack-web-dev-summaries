// [Refer to notes in folder 01-http]
// inserting data using post
const express = require('express');
const app = express();
let {people} = require('./data');

// static assets - we'll use the folder methods-public
app.use(express.static('./methods-public'));
// parse form data
// built-in middeware
app.use(express.urlencoded({ extended: false }))
app.get('/api/people', (req, res) => {
    res.status(200).json({success: true, data: people});
});

app.post('/login', (req, res) => {
    console.log(req.body); // name and value
    res.send('POST ');
});

app.listen(5000, () => {
    console.log('Server is listening on port 5000...');
});