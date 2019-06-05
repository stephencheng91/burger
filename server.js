var express = require("express");

var PORT = process.env.PORT || 3000;

var app = express();

// Use public folder for styling and image
app.use(express.static("public"));

// Parse application body as JSON
app.use(express.urlencoded({extended: true}));
app.use(express.json());

//setup Handlebars.
var exphbs = require("express-handlebars");

//default web layout is using main handlebars
app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");

//Import route and the server access
var router = require("./controllers/burgers_controller.js");

app.use(router);

app.listen(PORT, function(){
    console.log("Server listening on http://localhost" + PORT);
});