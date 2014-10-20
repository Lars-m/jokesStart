var express = require('express');
var fs = require('fs');

//var jokes = require("../model/jokes");

var router = express.Router();

var path = __dirname.substr(0,__dirname.lastIndexOf("\\"));  //Remove the routes part

router.get('/home', function(req, res) {
   res.render('home',{joke: {"joke" : "How does NASA organize their company parties? They planet", "reference"  :  "Unknown"}});
  });

module.exports = router;