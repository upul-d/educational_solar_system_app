var express = require('express');
var apiRouter = new express.Router();
var mongoClient = require("mongodb").MongoClient;
var path = require("path");

mongoClient.connect("mongodb://localhost:27017/solarSystem", function(err, db){
  if(err){
    console.log(err);
    return;
  }

  apiRouter.get("/planets", function(req, res){
    db.collection("planets").find().toArray(function(err, result){
      res.json(result[0].planets);
    });
  })

  console.log("Connected to database");
})

module.exports = apiRouter;