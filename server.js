var express = require("express");
var bodyParser = require("body-parser");
var exphbs = require("express-handlebars");
var path = require("path");
var routes = require("./controllers/burgers_controller.js");

var PORT = process.env.PORT || 8080;
var app = express();

//static content from the "public" directory
app.use(express.static("public"));

// parse application
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Set Handlebars.
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


app.use(routes);

// Server Start
app.listen(PORT, function() {
  // Log PORT
  console.log("Server listening on: http://localhost:" + PORT);
});