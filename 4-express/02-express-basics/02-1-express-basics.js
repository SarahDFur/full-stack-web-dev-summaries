const express = require('expres');
var app = express(); // we have our web instance

app.get('/',(req, res) => {
    res.status(200).send('Home Page');
});

app.get('/about',(req, res) => {
    res.status(200).send('About Page');
});

app.all('*',(req, res) => {
    res.status(404).send('<h1>resource not found</h1>');
});

app.listen(5000, () => {
    console.log("Server is listening on port 5000");
});

// app.get
// app.post
// app.put
// app.delete
// app.all - performed (default) by all browsers
// app.use - used in middleware
// app.listen
