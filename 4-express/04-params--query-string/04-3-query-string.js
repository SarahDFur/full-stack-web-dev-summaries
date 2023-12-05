/*
    In the browser we can write:
    ►  /api/v1/query?name=john&id=4
    ►  /api/v1/query?search=a&limit=2
            limit - max results shown on the page
    ►  /api/v1/query?limit=2
    ►  /api/v1/query?search=b

*/
const express = require('express');
const app = express();
const { products } = require('./data');

app.get('/', (req, res) => {
    res.send('<h1> Home Page </h1><a href="/api/products">products</a>');
});

app.get('/api/products', (req, res) => {
    const newProducts = products.map((product) => {
        const {id, name, image} = product;
        return {id, name, image};
    });

    res.json(products);
});

app.get('/api/products/:productID', (req, res) => {
    const { productID } = req.params;
    const singleProduct = products.find(
        (products) => products.id === Number(productID)
    );
    if(!singleProduct) {
        return res.status(404).end(`No Product with the ID of ${productID}`);
    }
    res.json(singleProduct);
});

app.get('/api/products/:productID/reviews/:reviewID', (req, res) => {
    console.log(req.params);
    res.send('hello world');
});

app.get('/api/v1/query', (req, res) => {
    // console.log(req.query);
    const { search, limit } = req.query;
    let sortedProducts = [...products];
    if (search) {
        sortedProducts = sortedProducts.filter((product) => {
            return product.name.startsWith(search);
        });
    }
    if (limit) {
        sortedProducts = sortedProducts.splice(0, Number(limit));
    }
    if (sortedProducts.length < 1) {
        // res.status(200).send('no products matched your search');
        return res.status(200).json({ sucess: true, data: []});
    }
    return res.status(200).json(sortedProducts);
});

app.listen(5000, () => {
    console.log('Server is listening on port 5000...');
});