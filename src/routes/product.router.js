
const express = require('express')
const router = express.Router()

const productsController = require('../controllers/products.controller')

router.get('/products', productsController.getProducts )

router.get('/products/:slug', productsController.getProduct )

router.get('/products/cat/:slug', productsController.getProductsByCat )

router.get('/products/cat-id/:id', productsController.getProductsByCatID )

router.get('/products/cate/:slug', productsController.getByCat )

router.get( '/products/related/:cat_slug', productsController.getRelatedProducts )

module.exports = router