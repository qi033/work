var express = require('express');
var router = express.Router();
var carController = require('../controller/carController')

/* GET users listing. */
router.get('/',carController.getCarList );

module.exports = router;
