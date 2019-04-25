//dependencies using express js and mongodb NPMs
var express = require("express");
var bodyParser = require("body-parser");
var mongojs = require("mongojs");


//express js initialization with port number for testing purposes.
var app = express();
var PORT = process.env.PORT || 3030;

//database config
var databaseUrl = "forecasts";
var collections = ["temperature"];

var db = mongjos(databaseUrl, collections);

//error check
db.on("error", function(error) {
  console.log("Database Error:", error);
});


// BodyParser for JSON data
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Mongodb connection
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/weathergraph";

// Set mongoose to leverage built in JavaScript ES6 Promises
// Connect to the Mongo DB
mongoose.Promise = Promise;
mongoose.connect(MONGODB_URI);


routes
require("./routes/htmlRoutes.js")(app);
require("./routes/weatherapi.js")(app);

//port listener
app.listen(PORT, function() {

    // Log (server-side) when our server has started
    console.log("server on PORT: "+ PORT);
  });
  