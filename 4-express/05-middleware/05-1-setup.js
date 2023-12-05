const express = require('express');
const app = express();
// req => middleware => res
/*
    We need the "next" parameter to be able to continue our operations
    after exicuting the code inside logger()
*/
const logger = (req, res, next) => {
    const method = req.method;
    const url = req.url;
    const time = new Date().getFullYear();
    console.log(method, url, time);
    next(); // continue where we left off
}

/*
    All functions that contain logger() as the middle param, will call it without explicitly
    being asked to do so (↓)
*/
app.get('/', logger, (req, res) => {
    /*
        This (↓) code would need to be used in every request we make.
        We need a better solution.
        Otherwise we have needless repetition
    */
    // const method = req.method;
    // const url = req.url;
    // const time = new Date().getFullYear();
    // console.log(method, url, time);
    res.send('Home');
});
app.get('/about', logger, (req, res) => {
    res.send('About');
});

app.listen(5000, () => {
    console.log('Server is listening on port 5000...');
});