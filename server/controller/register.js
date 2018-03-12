const models = require('../models/index.js')
const router = require('express').Router()


function register(req,res,next){
    console.log('register')
   
    models.user.findOne({
        where:{username:req.body.username}
    })
    .then(user=>{
        if(!user){
            console.log(' exists')
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
        }else{
            console.log('exists')
            next()
        }
        
    })
   
}
router.post('/register',register)
module.exports = exports=router