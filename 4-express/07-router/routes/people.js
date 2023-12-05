/**
 * Steps:
 * 1 - require('express')
 * 2 - setup a router
 * 3 - copy all methods that use the same url / similar enough
 * 4 - change "app" to "router"
 * 5 - exportin the router
 * 6 - FOR NOW ▬ put {people} here
 * 7 - add: app.use('api/people', people); 
 *          & 
 *          const people = require('./routes/people'); 
 *     to the other file
 * 8 - get rid of api/people base in the router file
 */
const express = require('express');
const router = express.Router();

let {people} = require('../data');

router.get('/', (req, res) => {
    res.status(200).json({success: true, data: people});
});

router.post('/', (req, res) => {
    const {name} = req.body;
    if(!name) {
        return res
            .status(400)
            .json({ success:false, msg:'please provide name value' })
    }
    res.status(201).send({success:true,person:name});
});

router.post('/postman', (req, res) => {
    const { name } = req.body;
    if (!name) {
        return res 
            .status(400)
            .json({ success: false, msg: 'please provide name value'})
    }
    res.status(201).send({ success: true, data: [...people, name] })
});

router.put('/:id', (req, res) => {
    const { id } = req.params; // must be supplied
    const { name } = req.body;
    
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

router.delete('/:id', (req, res) => {
    //directly accessing data:
    const person = people.find((person) => person.id === Number(req.params.id));

    if (!person) {
        return res
            .status(404)
            .json({ success: false, msg: `no perosn with id ${req.params.id}`});
    }

    // filtering out:
    const newPeople = people.filter((person) => person.id !== Number(req.params.id));
    return res.status(200).json({success:true, data:newPeople});
});

module.exports = router; // exporting my router