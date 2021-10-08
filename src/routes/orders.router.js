
const express = require('express')
const router = express.Router()

const ordersController = require('../controllers/orders.controllers')

router.get( '/orders/user/:user_id', ordersController.getOrdersByUser )

module.exports = router