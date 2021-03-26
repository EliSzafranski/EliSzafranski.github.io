$(document).ready(function(){

    navigator.geolocation.getCurrentPosition(success, error);
    function success(pos){
        var lat = pos.coords.latitude;
        var long = pos.coords.longitude; 
        weather(lat, long);
    }

    function error(){
        console.log("error");
    }

    function weather(lat, long){
        var URL = `https://fcc-weather-api.glitch.me/api/current?lat=${lat}&lon=${long}`
        $.getJSON(URL, function(data){
            updateDOM(data);
            console.log(data);
        });
    }

    function updateDOM(data){
        var city = data.name;
        var temp = data.main.temp;
        temp = Math.round((temp * (9/5)) + 32); 
        var desc = data.weather[0].description;
        var icon = data.weather[0].icon;
        var humd = data.main.humidity;
        var wind = data.wind.speed;
        $("#city").html(city); 
        $("#temp").html(temp);
        $("#desc").html(`Description: ${desc}`);
        $("#icon").attr("src", icon);
        $("#humd").html(`Humidity: ${humd}%`);
        $("#wind").html(`Wind: ${wind}`);


    }
});