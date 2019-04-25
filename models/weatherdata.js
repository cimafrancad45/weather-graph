const mongoose = require("mongoose");

//schema constructor
let Schema = mongoose.Schema;

//stores mongodb data
let WeatherForecast = new Schema({
city: {
    type: String,
    required: true
},
country: {
    type: String,
    required: true
},

map: {
    type: String,
    required: true
},
temperature: {
    type: String,
    required: true
}

})