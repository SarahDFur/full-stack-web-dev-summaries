/*
            HTTP METHODS
    - GET       Read Data
    - POST      Insert Data
    - PUT       Update Data
    - DELETE    Delete Data

    GET         www.store.com/api/orders        get all orders
    POST        www.store.com/api/orders        place an order (send data)
    GET         www.store.com/api/orders/:id    get single order
    PUT         www.store.com/api/orders/:id    update specific order (params + send data)
    DELETE      www.store.com/api/orders/:id    delete order (path params)


    [Each one is a different req, even if the url is the same!!]

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

app.post('/api/postman/people', (req, res) => {
    const { name } = req.body;
    if (!name) {
        return res 
            .status(400)
            .json({ success: false, msg: 'please provide name value'})
    }
    res.status(201).send({ success: true, data: [...people, name] })
});

app.post('/login', (req, res) => {
    const {name} = req.body;
    if (name) {
        return res.status(200).send(`Welcome ${name}`);
    }
    res.status(401).send('Please Provide Credentials');
});
// ---------------------------------------------------------------------------------

// at the end add "/" to be able to get one item
// ":id" is can be changed to whatever we want
/*
2 sides:
1. we need to get the value into the params
2. updating - we send something in the body
*/

/*
In Postman
Access using: localhost:5000/api/people/1
Gives:  { 
            id: 1, 
            name: 'john' 
        }
*/
app.put('api/people/:id', (req, res) => {
    const { id } = req.params; // must be supplied
    const { name } = req.body;

    // console.log(id, name);
    // res.send('hello world'); // sends it - can be seen in postman
    
    // changing the data: 
    const person = people.find((person) => person.id === Number(id));

    if (!person) {
        return res
            .status(404)
            .json({ success: false, msg: `no perosn with id ${id}`});
    }
    const newPeople = people.map((person) => {
        if (person.id === Number(id)){
            person.name = name;
        }
        return person;
    });

    res.status(200).json({ success: true, data: newPeople });
});
// ---------------------------------------------------------------------------------
app.listen(5000, () => {
    console.log('Server is listening on port 5000...');
});