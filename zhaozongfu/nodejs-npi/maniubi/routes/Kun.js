var express = require("express");
var router = express.Router();
var Kun = require("../controller/Kun")
/*GEThomepage.*/
router.get("/", Kun.getKunList);
module.exports = router;
