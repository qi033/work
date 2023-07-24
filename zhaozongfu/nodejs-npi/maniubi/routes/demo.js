var express = require("express");
var api = require("../dataBase/api");
var router = express.Router();
/*GEThomepage.*/
router.get("/", function (req, res, next) {
    console.log(222);
    res.render("index", { title: "demo" });
});
module.exports = router;