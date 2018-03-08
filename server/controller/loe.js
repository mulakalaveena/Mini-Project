const models= require('../models/index')
const router = require('express').Router()
const tokenauth=require('../middleware/tokenauth')
const Sequelize=require('sequelize')
const Op=Sequelize.Op

function loe(req,res,next){
    console.log('loe')
    models.user.findAll({
        where:{
           attributes:[{role:['Driver','Manager']}]
        }
    })
    .then(user=>{
        console.log('role found')
        res.json(
            {success:true}
        )
        next()
    })
    .catch(error=>{
        console.log('role not found')
        next()
    })

}
router.use(tokenauth)
router.get('/loe',loe)
module.exports=loe;