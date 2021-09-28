
const express = require('express')
const app = express()
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());

// Routes
const productsRouter = require('./routes/product.router')
const categoriesRouter = require('./routes/category.router')

app.use( productsRouter )
app.use( categoriesRouter )

app.listen( 3000, () => {
    console.log('Holaaa')
})