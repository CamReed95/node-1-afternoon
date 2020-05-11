const express = require('express')
const app = express()
app.use(express.json())
const port = 4000

const products = require('../products.json')

const getProducts = require('./getProducts')

const getProduct = require('./getProduct')


app.listen(port, ()=>console.log(`server listening on port ${port}`))

app.get('/api/products', getProducts)

app.get('/api/product/:id', getProduct)