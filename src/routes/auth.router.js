
const express = require('express')
const router = express.Router()

const authController = require('../controllers/auth.controller')

// Routes

router.get( '/auth/login', authController.login )

module.exports = router