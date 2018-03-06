const models = require('../../models/index.js')
const router = require('express').Router()
const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const cookieParser =require('cookie-parser')


function alogin(req,res,next){
    
    models.Admin.findOne({
        where:{name:req.body.name}
    })
    .then(admin=>{
        console.log('sssssssssss')
       //return admin.saveToken();
    })
    .then(admin=>{
        // res.clearCookie('token')
        // res.cookie('token',admin.token)
        
        res.json({
            success:true
            
        })
    })
    .catch(error=>{
        next(error)
    })
}

router.post('/login',passport.authenticate('admin',{session:false}),alogin)

module.exports = exports=router