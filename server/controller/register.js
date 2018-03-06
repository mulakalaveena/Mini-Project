const models = require('../models/index.js')
const router = require('express').Router()
const argon2 = require('argon2');
const jwt = require('jsonwebtoken')

function register(req,res,next){
    models.user.findOne({
        where:{username:req.body.username}
    })
    .then(user=>{
        if(user){
            res.json({
                message:'username is taken'
            })
        }else{
            models.user.create({
                username:req.body.username,
                password:req.body.password,
                role:req.body.role,
                
            })
            .then(user=>{
                res.json({
                    success:true,
                    result:user.username
                })
            })
            .catch(error=>{
                next(error)
            })
        
        }
        
    })
   
}
router.post('/register',register)
module.exports = exports=router