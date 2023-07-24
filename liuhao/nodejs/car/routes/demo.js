var express = require("express");
var api = require("../dataBase/Cars_api");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  console.log(222);
  res.render("index", { title: "demo1111111111" });
});
module.exports = router;
