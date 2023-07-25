var express = require('express');
var router = express.Router();
var Car = require("../controller/Car")

/* GET home page. */
router.get('/', Car.getCarsList);
router.post("/add", Car.addCar);
router.get("/add", function (req, res) {
    res.render("car")
});
module.exports = router;
