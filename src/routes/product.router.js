
const express = require('express')
const router = express.Router()

const productsController = require('../controllers/products.controller')

router.get('/products', productsController.getProducts )

router.get('/products/:id', productsController.getProduct )

module.exports = router