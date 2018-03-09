const models= require('../models/index')
const router = require('express').Router()
const tokenauth=require('../middleware/tokenauth')

function search(req,res,next){
    console.log('search')
    models.final.findAll({
        where:{
            from:req.body.from,
            to:req.body.to
        }
    })
    .then(data=>{
        res.json(data)
        
    })
    .catch(error=>{
        next()
    })
}

router.use(tokenauth)
router.post('/place',search)
module.exports=exports=router;