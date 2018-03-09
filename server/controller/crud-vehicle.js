const models = require('../models/index.js')
const router = require('express').Router()
const tokenauth = require('../middleware/tokenauth')
const parseInt = require('parse-int')

function create(req, res) {
    console.log('got near create')
    models.vehicles.create({
        model:req.body.model,
        status:req.body.status

    }).then(function (vehicle) {
        res.json(vehicle);
    })
}

function list(req, res) {
    console.log('got near vehicle list')
    models.vehicles.findAll({}).then(function (vehicle) {
        res.json(vehicle);
    })
}

function del(req, res) {
    console.log('got near delete')
    models.vehicles.destroy({
        where: {
            model: req.body.model
        }
    }).then(function (vehicle) {
        res.json(vehicle);
    });
}


function update(req, res) {
    console.log('got near update')
    models.vehicles.findOne({
        where: {
            model: req.body.model
        }
    })
    .then(function (vehicles) {
        if (vehicles) {
            vehicles.update({
                status:req.body.status
                
            }).then(function (model) {
                res.json(model);
            });
        }
    });
}



router.use(tokenauth)
router.post("/create", create)

router.post("/delete", del)

router.get("/list", list)
router.post("/update", update)

module.exports = exports = router;
