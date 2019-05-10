var express = require("express");
var burger = require("../models/burger.js"); 

// Create the router App and export router at the end....

var router = express.Router();

// Index route
router.get("/", function(req, res){
    res.redirect("/burgers");
});

router.get("/burgers", function(req, res){
    // express callback response burger.selectAllBurger
    burger.all(function(burgerData){
        // orm.js that using MySQL query call back will return burger_data
        res.render("index", {burger_data: burgerData});
    });
});

module.exports = router;
