var express = require("express");
var router = express.Router();
// Import the model to use its database functions.
var burger = require("../models/burgers.js");

//create routes and set logic
router.get("/", function(req, res)  {
  //one of three cbs called (Trev)
  burger.selectAll(function(data)   {
      var hbsObject = {
          burger: data
      };
      console.log(hbsObject);
      res.render("index", hbsObject);
  });  
});

