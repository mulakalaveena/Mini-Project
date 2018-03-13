const models = require('../models/index.js')
const router = require('express').Router()
const tokenauth = require('../middleware/tokenauth')


function create(req, res) {
    console.log('got near create')
    models.drivers.create({
        username:req.body.username,
        status:req.body.status

    }).then(function (driver) {
        res.json(driver);
    })
}

function list(req, res) {
    console.log('got near driver list')
    models.drivers.findAll({}).then(function (driver) {
        res.json(driver);
        console.log(driver)
    })
}

function del(req, res) {
    console.log('got near delete')
    models.drivers.destroy({
        where: {
            username: req.body.username
        }
    }).then(function (vehicle) {
        res.json(vehicle);
    });
}


function update(req, res) {
    console.log('got near update')
    models.drivers.findOne({
        where: {
            username: req.body.username
        }
    })
    .then(function (drivers) {
        if (drivers) {
            drivers.update({
                status:req.body.status,
                // startingtime:req.body.startingtime,
                // reachedtime:req.body.reachedtime
                
            }).then(function (updatedData) {
                res.json(data.concat(updatedData));
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
