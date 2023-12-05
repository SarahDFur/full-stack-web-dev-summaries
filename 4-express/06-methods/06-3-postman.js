/*
Link to download the app to your computer:
    https://www.postman.com/downloads/
Instsallation:
    - Scroll down until you reach the bottom.
    - Click on "download app"
    - download it
After installing:
    - You can group all your requests
    - Enter the complete url
    - we'll see all the data at the bottom 
      without building all of the front-end 
Adding to the body:
    POST:
    In Body, add as json format, and you get what your supposed
    to get
    (format can be chosen)
*/
// Explenations on "expressjs.com"
const express = require('express');
const app = express();
let {people} = require('./data');

// static assets
app.use(express.static('./methods-public'));
// pase form data 
app.use(express.urlencoded({extended: false}));
// parse json 
app.use(express.json());

app.get('/api/people', (req, res) => {
    res.status(200).json({success: true, data: people});
});

app.post('/api/people', (req, res) => {
    const {name} = req.body;
    if(!name) {
        return res
            .status(400)
            .json({ success:false, msg:'please provide name value' })
    }
    res.status(201).send({success:true,person:name});
});
// addition
app.post('/api/postman/people', (req, res) => {
    const { name } = req.body;
    if (!name) {
        return res 
            .status(400)
            .json({ success: false, msg: 'please provide name value'})
    }
    res.status(201).send({ success: true, data: [...people, name] })
});
// end of addition
app.post('/login', (req, res) => {
    const {name} = req.body;
    if (name) {
        return res.status(200).send(`Welcome ${name}`);
    }
    res.status(401).send('Please Provide Credentials');
});

app.listen(5000, () => {
    console.log('Server is listening on port 5000...');
});