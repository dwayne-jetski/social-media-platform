const connectDB = require('./startup/db');
const express = require('express');
const app = express();

app.listen(3000, function () {
    console.log("Server started. Listening on port 3000.");
})

app.get("/api/products", (req, res) => {
    let products = repoContext.products.findAllProducts();
    res.send(products);
})

connectDB();