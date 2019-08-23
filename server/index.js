const express = require('express')
const app = express();
const getProducts = require('./getProducts')
const getProduct = require('./getProduct')
const port = 1014;

app.get('/api/products',getProducts) 
app.get('/api/product/:id', getProduct)

app.listen(port,()=>{
    console.log(`listening on port: ${port}`);
})
   