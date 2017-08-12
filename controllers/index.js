var express = require('express');
var router = new express.Router();
var mongoClient = require("mongodb").MongoClient;


router.get('/', function(req, res){
  res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

module.exports = router;