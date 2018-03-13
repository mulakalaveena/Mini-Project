const models = require('../models/index.js')
const router = require('express').Router()
const tokenauth = require('../middleware/tokenauth')
const parseInt = require('parse-int')

function create(req, res) {
    console.log('got near create')
    models.place.create({
        from: req.body.from,
        to: req.body.to,
        route1: req.body.route1,
        route2: req.body.route2,
        time: parseInt(req.body.time)

    }).then(function (place) {
        res.json(place);
    })
}

function list(req, res) {
    console.log('got near list')
    models.place.findAll({}).then(function (places) {
        res.json(places);
    })
}

function del(req, res) {
    console.log('got near delete')
    models.place.destroy({
        where: {
            from: req.body.from
        }
    }).then(function (place) {
        res.json(place);
    });
}


function update(req, res) {
    console.log('got near update')
    models.place.findOne({
        where: {
            from: req.body.from,
            
        }
    })
    .then(function (place) {
        if (place) {
            place.update({
                to:req.body.to,
                route1:req.body.route1,
                route2:req.body.route2,
                time: parseInt(req.body.time)
                
            }).then(function (place) {
                res.send(place);
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
