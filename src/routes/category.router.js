
const express = require('express')
const router = express.Router()

const categoriesController = require('../controllers/categories.controller')

router.get('/categories/:id', categoriesController.getCategory )

router.get('/categories', categoriesController.getCategories )

module.exports = router