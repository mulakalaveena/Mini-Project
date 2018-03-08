

const models = require('../models/index.js')
const router = require('express').Router()
const passport = require('passport')
const cookie =require('cookie-parser')
function logout(req,res,){
    req.clearCookie('token')
        res.redirect('/user')
  

}
router.get('/logout',logout)

module.exports = exports=router

