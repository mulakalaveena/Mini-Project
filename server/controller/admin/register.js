const models = require('../../models/index.js')
const router = require('express').Router()
const argon2 = require('argon2');

function aregister(req,res,next){
    models.Admin.create({
        name:req.body.name,
        password:req.body.password
    })
    .then(admin=>{
        res.json({
            success:true,
            result:admin.name
        })
    })
    .catch(error=>{
        next(error)
    })

}
router.post('/register',aregister)
module.exports = exports=router