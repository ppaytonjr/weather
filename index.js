$(document).ready(function(){
    var proxy = "https://cors-anywhere.herokuapp.com/"


var cityName = "";
var countryCode= "840";
var today = new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();

  

$('#button-addon1').click(function(event){ 

    $("#weatherHere").empty();
    console.log(event)    
    var cityChoice =$("#cityInput").val().trim();
    console.log(cityChoice)
    $(cityName).append(cityChoice);
    $("#citySearch").text(cityChoice)
    $("#todayDate").text(today + "" + date)
    
    var cityName = cityChoice;
    var buttonElement = $('<button>').text(cityName);
    $('#buttons-view').append(buttonElement);


var queryURL = "https://api.openweathermap.org/data/2.5/forecast/daily?q=" + cityName + "," + countryCode + "&cnt=7&appid=" + "166a433c57516f51dfab1f7edaed8413"
console.log(queryURL);

$.ajax({
    url:queryURL,
    method:'GET',

}).then(function(response) {
    $('<div>').text(JSON.stringify(response));
    console.log(response);
    for (var i = 0; i < response.list.length; i++) {
var weather = $("<p>" + response.list[i].weather[0].description + "</p>")
var divElement = $('<div>');
$(divElement).append("<p>");
$("#weatherHere").append(weather);
        console.log(response.list[i].temp.day)
    console.log(response.list[i].weather[0].description)
    console.log(response.city.name)
    }
    var days = ["Today", "Day 1", "Day2", "Day3", "Day4", "Day5", "Day6"]
    for (var i=0; i<=days.length; i++)
    console.log
});
});
});
