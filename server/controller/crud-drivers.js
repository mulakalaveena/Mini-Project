const models = require('../models/index.js')
const router = require('express').Router()
const tokenauth = require('../middleware/tokenauth')


function create(req, res) {
    console.log('got near create')
    models.drivers.create({
        username:req.body.name,
        status:req.body.status

    }).then(function (driver) {
        res.json(driver);
    })
}

function list(req, res) {
    console.log('got near list')
    models.drivers.findAll({}).then(function (driver) {
        res.json(driver);
    })
}

function del(req, res) {
    console.log('got near delete')
    models.drivers.destroy({
        where: {
            username: req.body.name
        }
    }).then(function (vehicle) {
        res.json(vehicle);
    });
}


function update(req, res) {
    console.log('got near update')
    models.drivers.findOne({
        where: {
            username: req.body.name
        }
    })
    .then(function (vehicles) {
        if (vehicles) {
            drivers.update({
                status:req.body.status
                
            }).then(function (name) {
                res.json(name);
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
