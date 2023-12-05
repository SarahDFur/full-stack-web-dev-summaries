/*
// ------------------------------------- 1 ----------------------------------------
If we use the inspect tool and go to Network -> Headers:
    [▼ Request Headers]:
        Content-Type: application/x-www-form-urlencoded
---------------------------------------------------------
get and post methods with the same url are different !! 
*/
// Explenations on "expressjs.com"
const express = require('express');
const app = express();
let {people} = require('./data');

// static assets
app.use(express.static('./methods-public'));
// pase form data - "req" param in the POST method
app.use(express.urlencoded({extended: false}));
// ------------------------------------- 3 ----------------------------------------
// parse json 
// another middleware
// now we have access to gives us info like in teh post on /login
app.use(express.json());
// --------------------------------------------------------------------------------

app.get('/api/people', (req, res) => {
    res.status(200).json({success: true, data: people});
});

// ------------------------------------ 3.1 ---------------------------------------
app.post('/api/people', (req, res) => {
    const {name} = req.body;
    if(!name) {
        return res.status(400).json({success:false,msg:'please provide name value'})
    }
    res.status(201).send({success:true,person:name});
});
// --------------------------------------------------------------------------------
// ------------------------------------- 2 ----------------------------------------

// app.post('/api/people', (req, res) => {
//     res.status(201).send('Success');
// });
/**
 * Now if we navigate back and go to inspect, we should see in the Headers section:
 * [▼ General]:
 *  Request URL: http://localhost:5000/api/people
 *  Status code: 201
 * [▼ Request Headers]:
 *  Content-Type: application/json;charset=UTF-8
 * [▼ Request Payload]:
 *  {name: 'susan'} → we submitted and axios added the information for us
 */
// --------------------------------------------------------------------------------
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