/*
in index.html → action=POST

If we inspect on our browser, and go to network. 
Under [▼ General], "Request Method: POST".
If we go to [▼ Form Data] we have the body (not optional in POST - body is needed)

If we use the inspect tool and go to Network -> Headers:
    [▼ Request Headers]:
        Content-Type: application/x-www-form-urlencoded

[This is a little different in the js version]
*/
// Explenations on "expressjs.com"
const express = require('express');
const app = express();
let {people} = require('./data');

// static assets
app.use(express.static('./methods-public'));
// pase form data - "req" param in the POST method
app.use(express.urlencoded({extended: false}));

app.get('/api/people', (req, res) => {
    res.status(200).json({success: true, data: people});
});

// app.post('/login', (req, res) => {
//     console.log(req.body);
//     res.send('POST ');
// });

// form example:
app.post('/login', (req, res) => {
    const { name } = req.body;  
    if (name) {
        return res.status(200).send(`Welcome ${name}`);
    }
    // (401 status code just for fun)
    res.status(401).send('Please Provide Credentials'); 
});

app.listen(5000, () => {
    console.log('Server is listening on port 5000...');
});