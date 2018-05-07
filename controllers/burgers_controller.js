var express = require("express");
var router = express.Router();
// Import the model to use its database functions.
var burger = require("../models/burger.js");

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

//post to db
router.post("/api/burgers", function(req, res)  {
    burger.insertOne(["burger_name", "devoured"],
    [
        req.body.name, req.body.devoured
    ], function(result)   {
        //send back the id
        res.json({ id: result.insertId});
    });
});

//update a burger
router.put("/api/burgers/:id", function(req, res)   {
    var condition = "id = " + req.params.id;
    console.log("condition", condition);

    burger.updateOne({
        devoured: req.body.devoured
    }, condition, function(result)  {
        if (result.changedRows == 0)    {
            //no rows chagned, no id exists
            return res.status(404).end();
        }
        else {
            res.statusCode(200).end();
        }
    });
});
//export for server.js
module.exports = router;