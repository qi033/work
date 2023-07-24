var express = require("express");
var router = express.Router();
var Car = require("../controller/Car");

/* GET home page. */
router.get("/", Car.getCarsList);
//添加汽车
router.post("/add", Car.addCar);
//显示添加汽车的页面
router.get("/add", function (req, res) {
  res.render("car");
});
module.exports = router;
