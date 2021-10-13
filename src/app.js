
const express = require('express')
const app = express()
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');

app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());

app.use(cors({
    origin: 'http://localhost:4200'
}));

// Routes
const authRouter = require('./routes/auth.router')
const productsRouter = require('./routes/product.router')
const categoriesRouter = require('./routes/category.router')
const customersController = require('./routes/costumers.router')
const ordersController = require('./routes/orders.router')

app.use( authRouter )
app.use( productsRouter )
app.use( categoriesRouter )
app.use( customersController )
app.use( ordersController )

app.listen( 3000, () => {
    console.log('App corriendo en http://localhost:3000')
})