const models = require('../models/index.js')
const router = require('express').Router()
const passport = require('../passport/config')
const LocalStrategy = require('passport-local').Strategy
const cookieParser =require('cookie-parser')
const jwt = require('jsonwebtoken')


function login(req,res,next){
    
    models.user.findOne({
        where:{
            username:req.body.username        
        }
    })
    .then(user=>{
        console.log('sssssssssss')
        user.token=jwt.sign({id:user.id},'lovevolleyball');
        console.log(user.role);
        res.json({success: true, username: user.username, role: user.role,token:user.token})
    })
    .catch(error=>{
        next(error)
    })
}

router.post('/login',passport.authenticate('local',{session:false}),login)

module.exports = exports=router