const models = require('../models/index.js')
const router = require('express').Router()
const tokenauth = require('../middleware/tokenauth')

function update(req,res){
    console.log('got near finals')
    models.final.findOne({where:{
        from:req.body.from
    }})
    .then(final=>{
        if(final){
            final.update({
                to: req.body.to,
                route1:req.body.route1,
                route2:req.body.route2,
                time: parseInt(req.body.time),
                driver:req.body.driver,
                vehicles:req.body.vehicle,
            })
            .then(function(final){
                res.send(final)
            })
        }
    })
}



router.use(tokenauth)
router.post("/update", update)
module.exports = exports = router;