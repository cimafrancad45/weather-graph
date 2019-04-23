const mongoose = require("mongoose");

//schema constructor
let Schema = mongoose.Schema;

//stores mongodb data
let WeatherForecast = new Schema({
city: {
    type: String,
    required: true
},
state: {
    type: String,
    required: true
},

map: {
    type: String,
    required: true
},
fiveDay: {
    temperature: {
        type: String,
        required: true
    }
}

})