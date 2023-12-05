/**
 * Steps:
 * 12 - transfer all functions to a corresponding controller file
 * 13 - get rid of people data in routes and transfer to controllers
 * 14 - import in routes the functions from the controller
 * 15 - add them to the corresponding methods / requests
 */
const express = require('express');
const router = express.Router();

const {
    getPeople,
    createPerson,
    createPersonPostman,
    updatePerson,
    deletePerson
} = require('../controllers/people');

// option 1 of setup:
// אופציה 1:
router.get('/', getPeople);
router.post('/', createPerson);
router.post('/postman', createPersonPostman);
router.put('/:id', updatePerson);
router.delete('/:id', deletePerson);

// option 2 of setup: 
// אופציה 2:
router.route('/').get(getPeople).post(createPerson);
router.route('/postman').post(createPersonPostman);
router.route('/:id').put(updatePerson).delete(deletePerson);


module.exports = router; // exporting my router