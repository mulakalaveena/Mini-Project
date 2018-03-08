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
        
        user.token=[jwt.sign({id:user.id},'lovevolleyball')]
        user.save()
        .then(()=>{
            res.clearCookie('token')
            res.cookie('token',user.token[user.token.length-1],{encode:String})
            res.json({success: true, username: user.username, role: user.role,token:user.token})
        })
        .catch(error=>{
            next(error)
        })
        
    })
    .catch(error=>{
        next(error)
    })
}

router.post('/login',passport.authenticate('local',{session:false}),login)

module.exports = exports=router