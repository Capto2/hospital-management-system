//jshint:6
//require modules
const express = require("express");
const bodyparser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");
const lodash = require("lodash");
const port = 3000;

//represent modules
const app = express();

app.use(bodyparser.urlencoded({extended: true}));
app.use(express.static("public"));
app.set("view engine", "ejs");

app.route("/").get(function(request, response){
    response.render("home");
}).post(function(request, response){
    const username = request.body.username;
});

app.listen(port, function(){
    console.log("server has started on port 3000");
}); //listening port.
