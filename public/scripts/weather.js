//API request script
const axios = "axios";
const FiveDay = "http://api.openweathermap.org/data/2.5/forecast?q="+ city + "&APPID="+ key;
const SixteenDay = "http://api.openweathermap.org/data/2.5/forecast/daily?q=" + city + country + "&APPID=" + key;
//temporary key placeholder
const key = "insert key here";

//user input variable placeholders for API calls
let city = "Princeton Junction"