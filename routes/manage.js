var express  = require('express');
var app      = express();
var path     = require('path');
var mongoose = require('mongoose');
var session  = require('express-session');

router.get('/', function (req,res) {
  res.render("./posts/index.html");
});
