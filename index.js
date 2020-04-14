$(document).ready(function () {
    var proxy = "https://cors-anywhere.herokuapp.com/"


    var cityName = "";
    var countryCode = "840";
    var today = new Date();
    var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    var scattClouds = $('<p><img src=http://www.iconarchive.com/download/i43445/oxygen-icons.org/oxygen/Status-weather-many-clouds.ico></p>');
    var hevRain = $('<p><img src=https://cdn.imgbin.com/18/24/24/imgbin-rain-clouds-0zwt913Wwug2GjY0zb4yP8PyF.jpg></p>');
    var overClouds = $('<p><img src=https://cdn.pixabay.com/photo/2013/04/01/09/22/clouds-98536_960_720.png></p>');
    var clearSky = $('<p><img src=https://img.pngio.com/yellow-sky-pattern-sun-with-cloud-png-clip-art-image-png-sun-with-clouds-png-900_440.jpg></p>');
    var lightRain = $('<p><img src=https://cdn4.iconfinder.com/data/icons/weather-forecast-classic/512/light-rain-sun-01-512.png></p>');


    $('#button-addon1').click(function (event) {

        $("#weatherHere").empty();
        var cityChoice = $("#cityInput").val().trim();
        $(cityName).append(cityChoice);
        $("#citySearch").text(cityChoice)
        $("#todayDate").text(today + "" + date)
        var cityName = cityChoice;
        var buttonElement = $('<button>').text(cityName);
        $('#buttons-view').append(buttonElement);


        var queryURL = "https://api.openweathermap.org/data/2.5/forecast/daily?q=" + cityName + "," + countryCode + "&cnt=5&units=imperial&appid=" + "166a433c57516f51dfab1f7edaed8413"
        console.log(queryURL);

        $.ajax({
            url: queryURL,
            method: 'GET',

        }).then(function (response) {
            $('<div>').text(JSON.stringify(response));
            console.log(response);
            for (var i = 0; i < response.list.length; i++) {

                var temp = response.list[i].temp.day;
                var weather = response.list[i].weather[0].description;
                console.log(response.list[i].temp.day)
                console.log(response.list[i].weather[0].description)
                console.log(response.city.name)
                console.log(weather)

                var pictures = function (weather) {
                    if (weather === "scattered Clouds") {
                        return $("#weatherHere").append(scattClouds);
                    } else if (weather === "heavy intensity rain") {
                        return $("#weatherHere").append(hevRain);
                    } else if (weather === "overcast clouds") {
                        return $("#weatherHere").append(overClouds);
                    } else if (weather === "sky is clear") {
                        return $('#weatherHere').append(clearSky);
                    } else if (weather === "light rain") {
                        return $("#weatherHere").append(lightRain);

                    }
                }
                var getPictures = pictures(weather)
                console.log(getPictures);

                var forecast = $("<p>" + weather + "<br>" + temp + " degrees" + "<br>" + getPictures +  "</p>");
                var divElement = $('<div>');
                $(divElement).append("<p>");
                $("#weatherHere").append(forecast)


            }
        })
    });

});

