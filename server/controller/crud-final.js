const models = require('../models/index.js')
const router = require('express').Router()
const tokenauth = require('../middleware/tokenauth')
const parseInt = require('parse-int')

function create(req, res) {
    console.log('got near create')
    models.finals.create({
        from: req.body.from,
        to: req.body.to,
        route1: req.body.route1,
        route2: req.body.route2,
        time: parseInt(req.body.time),
        driver:req.body.driver,
        vehicle:req.body.vehicle,
        status:req.body.status

    }).then(function (data) {
        res.json(data);
    })
}

function list(req, res) {
    console.log('got near list')
    models.finals.findAll({}).then(function (data) {
        res.json(data);
    })
}

function del(req, res) {
    console.log('got near delete')
    models.finals.destroy({
        where: {
            from: req.body.from
        }
    }).then(function (data) {
        res.json(data);
    });
}


function update(req, res) {
    console.log('got near update')
    models.finals.findOne({
        where: {
            from: req.body.from
        }
    })
    .then(function (data) {
        if (data) {
            finals.update({
                to: req.body.to,
                route1:req.body.route1,
                route2:req.body.route2,
                time: parseInt(req.body.time),
                driver:req.body.driver,
                vehicle:req.body.vehicle
                
            }).then(function (data) {
                res.send(data);
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
