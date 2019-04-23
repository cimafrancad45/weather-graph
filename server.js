//dependencies using express js and mongodb NPMs
const express = require("express");
const mongojs = require("mongodb");
const bodyParser = require("body-parser");

//express js initialization
var app = express();
var PORT = process.env.PORT || 3030;

// BodyParser for JSON data handling by express
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
//folder for express js

// Database configuration
let databaseUrl = "weather";
let collections =["state"]

let db = mongojs(databaseUrl, collections);

//error logging 
db.on("error", function(error){
    console.log("Database Error:", error)
});

//checks for server response
app.get("/", function (req, res) {
    res.send("Hello world!")
});

app.get("/all", function(req, res) {
    db.state.find({}, function(error, found) {
        if(error) {
            console.log(error);
        }
        else {
            res.json(found);
        }
    });
});

app.get("/weather", function (req, res) {};)