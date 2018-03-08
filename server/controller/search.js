const models= require('../models/index')
const router = require('express').Router()
const tokenauth=require('../middleware/tokenauth')


function search(req,res,next){
    place.find({
        where:{
            from:req.body.from,
            to:req.body.to
        }
    })
    .then(places=>{
        if(place){
            res.json({
                success:true,
                result:place
            })
        }else{
            res.json({
                success:false,
                message:'place does not exist'
            })
        }  
    })
    .catch(error=>{
        next(error)
    })
}


router.use(tokenauth)
router.post('/search',search)
module.exports=exports=router;