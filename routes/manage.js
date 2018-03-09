var express  = require('express');
var router   = express.Router();
var mongoose = require('mongoose');






//route
router.get('/', function (req,res) {
  res.render("posts/index.html");
});


module.exports = router;
