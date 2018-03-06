
const express = require('express');
const app = express();
const passport = require('./passport/config.js')

const session = require('express-session')

const bodyparser =  require('body-parser')
const register = require('./controller/register')
const login = require('./controller/login')
const logout = require('./controller/logout')
const jwt = require('jsonwebtoken')
//const configurePassport = require('./passport/config')

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



app.listen(3001,() => {
    console.log("started");
});
