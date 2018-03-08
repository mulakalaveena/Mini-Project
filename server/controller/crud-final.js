const models = require('../models/index.js')
const router = require('express').Router()
const tokenauth = require('../middleware/tokenauth')
const parseInt = require('parse-int')

function create(req, res) {
    
    models.final.create({
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
    models.final.findAll({}).then(function (data) {
        res.json(data);
    })
}

function del(req, res) {
    console.log('got near delete')
    models.final.destroy({
        where: {
            from: req.body.from
        }
    }).then(function (data) {
        res.json(data);
    });
}


function update(req, res) {
    console.log('got near update')
    models.final.findOne({
        where: {
            driver: req.body.driver
        }
    })
    .then(function (final) {
        if (final) {
            final.update({
                status:req.body.status
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
