
const express = require('express');
const app = express();
const passport = require('./passport/config.js')

const session = require('express-session')

const bodyparser =  require('body-parser')
const register = require('./controller/register')
const login = require('./controller/login')

const admin = require('./controller/crud-places')
const vehicle=require('./controller/crud-vehicle')
const driver=require('./controller/crud-drivers')
const manager=require('./controller/crud-final')
const search=require('./controller/search')
const finals=require('./controller/crud-final')

const loe=require('./controller/loe')
const logout = require('./controller/logout')
const jwt = require('jsonwebtoken')


const cookieParser = require('cookie-parser')
const cors = require('cors')


app.use(passport.initialize());

var morgan = require('morgan')

app.use(bodyparser.json());
app.use(cookieParser());
app.use(morgan('combined'))
app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
}));
app.use((error, req, res, next) => {
    res.status(500).send('internal error occurred')
    next()
});

app.use('/user',register)
app.use('/user',login)
app.use('/user',logout)
app.use('/users',loe)
app.use('/places',admin)
app.use('/vehicles',vehicle)
app.use('/drivers',driver)
app.use('/assign',manager)
app.use('/manager',logout)
app.use('/ruser',logout)
app.use('/driver',logout)
app.use('/finals',finals)

app.use('/search',search)



app.listen(3001,() => {
    console.log("started");
});
