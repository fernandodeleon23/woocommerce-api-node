
const express = require('express')
const router = express.Router()

const customersController = require('../controllers/customers.controller')

router.get( '/customers/:id', customersController.getConstumer )

module.exports = router