//dependencies using express js and mongodb NPMs
const express = require("express");
const mongojs = require("mongodb");

//express js initialization
let app = express();

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