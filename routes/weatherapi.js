//console log test
console.log("Hello World!");
//dependencies
var axios = require("axios");

//city placeholder
var city = "Princeton";
//temporary key placeholder
var key = "a6c3a52792d6cceca183d2ac6d996b75";

var FiveDay = "http://api.openweathermap.org/data/2.5/forecast?q="+ city + "&APPID="+ key;
console.log(FiveDay)
// let SixteenDay = "http://api.openweathermap.org/data/2.5/forecast/daily?q=" + city + country + "&APPID=" + key;



app.get("/search", function(req, res){

    
});

this.FiveDayCast = function () {
    axios.get(FiveDay, key)
    .then(function(response) {
        var forecast = Object.values(
            JSON.parse(JSON.stringify(response.data))
        );
        // return forecast;
        console.log(forecast);
    }).catch(function(error) {
        console.log(error);
    })
}
