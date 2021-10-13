
const express = require('express')
const app = express()
const router = express.Router()

// Auth router
const authRouter = require( './auth.router' )

app.use( authRouter )

module.exports = {
    router
}