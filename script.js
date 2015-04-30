/**
 * Created by aaronsawyer on 4/30/15.
 */
var cityData = null;
var cityHtml = null;
var numCities = 0;
var cityName, cityPop, cityArea, cityDensity;

$(document).ready(function(){
    $("#get-city-btn").on("click", function(){
        if(numCities == 0) {
            $.get('cities.html', function (data) {
                $("#cityList").append(data);
            });
        } else if(numCities == 4) {
            numCities = 0;
            $("#cityListed").empty();
        }

        $.get('data.json', function(data) {
            cityData = data;
            cityName = cityData.cities[0].name;
            cityPop = cityData.cities[0].population;
            cityArea = cityData.cities[0].landArea;
            cityDensity = cityData.cities[0].density;
            $(".citiesListed").append("<div class='oneCity'><p>Name:</p></div>");

            numCities++;
        });


    });

});