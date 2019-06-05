

var express = require("express");
var router = express.Router();

var burgers = require("../models/burgers.js");

router.get("/",function(req,res){
    burgers.selectAll(function(data){
        var burgersData = {
            burgers: data
        };
        res.render("index", burgersData);
    })
})

module.exports = router;