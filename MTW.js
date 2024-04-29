

//default weather
async function mtsuWeather()
{
  //getting weather
  var data = await fetchMetaData(35.8486,-86.3669);//mtsu coordinates
  var hourlyForecast = await getForecastHourly(data);
  var longPeriodForecast = await getForecast(data);


  //Array declarations, forecast objects constructed and pushed into respective arrays
  let hourlyLocal = [];
  let longLocal = [];
  for (let i = 0; i < 12; i++){
  	hourlyLocal[i] = new hourlyWeather(hourlyForecast.properties.periods[i].number,
					   hourlyForecast.properties.periods[i].startTime,
					   hourlyForecast.properties.periods[i].endTime,
					   hourlyForecast.properties.periods[i].isDaytime,
					   hourlyForecast.properties.periods[i].temperature,
					   hourlyForecast.properties.periods[i].temperatureUnit,
					   hourlyForecast.properties.periods[i].probabilityOfPrecipitation,
					   hourlyForecast.properties.periods[i].dewpoint,
					   hourlyForecast.properties.periods[i].relativeHumidity,
					   hourlyForecast.properties.periods[i].windSpeed,
					   hourlyForecast.properties.periods[i].windDirection,
             hourlyForecast.properties.periods[i].icon,
					   hourlyForecast.properties.periods[i].shortForecast,
					   hourlyForecast.properties.periods[i].detailedForecast);
	//Output test in console log
	//console.log("Hourly number " + hourlyLocal[i].number);
	//console.log(hourlyLocal[i]);
  }

  for (let i = 0; i < 14; i++){
  	longLocal[i] = new longPeriodWeather(longPeriodForecast.properties.periods[i].number,
			 		     longPeriodForecast.properties.periods[i].startTime,
					     longPeriodForecast.properties.periods[i].endTime,
					     longPeriodForecast.properties.periods[i].isDaytime,
					     longPeriodForecast.properties.periods[i].temperature,
					     longPeriodForecast.properties.periods[i].temperatureUnit,
					     longPeriodForecast.properties.periods[i].probabilityOfPrecipitation,
					     longPeriodForecast.properties.periods[i].dewpoint,
					     longPeriodForecast.properties.periods[i].relativeHumidity,
					     longPeriodForecast.properties.periods[i].windSpeed,
					     longPeriodForecast.properties.periods[i].windDirection,
               longPeriodForecast.properties.periods[i].icon,
					     longPeriodForecast.properties.periods[i].shortForecast,
					     longPeriodForecast.properties.periods[i].detailedForecast);
               
	//console.log("Long Period number " + longLocal[i].number);
	//console.log(longLocal[i]);
    }

    // console.log(hourlyLocal[0].temperature);
}

//user location based weather
async function localWeather()
{

  var data = await fetchMetaData(loc[0],loc[1]);//mtsu coordinates
  var hourlyForecast = await getForecast(data);
  var longPeriodForecast = await getForecastHourly(data);

    //Array declarations, forecast objects constructed and pushed into respective arrays
    let hourlyLocal = [];
    let longLocal = [];
    for (let i = 0; i < 12; i++){
      hourlyLocal[i] = new hourlyWeather(hourlyForecast.properties.periods[i].number,
               hourlyForecast.properties.periods[i].startTime,
               hourlyForecast.properties.periods[i].endTime,
               hourlyForecast.properties.periods[i].isDaytime,
               hourlyForecast.properties.periods[i].temperature,
               hourlyForecast.properties.periods[i].temperatureUnit,
               hourlyForecast.properties.periods[i].probabilityOfPrecipitation,
               hourlyForecast.properties.periods[i].dewpoint,
               hourlyForecast.properties.periods[i].relativeHumidity,
               hourlyForecast.properties.periods[i].windSpeed,
               hourlyForecast.properties.periods[i].windDirection,
               hourlyForecast.properties.periods[i].shortForecast,
               hourlyForecast.properties.periods[i].detailedForecast);
    //Output test in console log
    console.log("Hourly number " + hourlyLocal[i].number);
    console.log(hourlyLocal[i]);
    }
  
    for (let i = 0; i < 14; i++){
      longLocal[i] = new longPeriodWeather(longPeriodForecast.properties.periods[i].number,
                 longPeriodForecast.properties.periods[i].startTime,
                 longPeriodForecast.properties.periods[i].endTime,
                 longPeriodForecast.properties.periods[i].isDaytime,
                 longPeriodForecast.properties.periods[i].temperature,
                 longPeriodForecast.properties.periods[i].temperatureUnit,
                 longPeriodForecast.properties.periods[i].probabilityOfPrecipitation,
                 longPeriodForecast.properties.periods[i].dewpoint,
                 longPeriodForecast.properties.periods[i].relativeHumidity,
                 longPeriodForecast.properties.periods[i].windSpeed,
                 longPeriodForecast.properties.periods[i].windDirection,
                 longPeriodForecast.properties.periods[i].shortForecast,
                 longPeriodForecast.properties.periods[i].detailedForecast);
    console.log("Long Period number " + longLocal[i].number);
    console.log(longLocal[i]);
    }
}

//user defined location weather
async function directedWeather(city,state){

  
  var loc = await getCoordinates(city,state);
  if(loc==null){
    console.log("Location not found");
    return;
  }
  var data = await fetchMetaData(loc[0],loc[1]);//mtsu coordinates
  var hourlyForecast = await getForecast(data);
  var longPeriodForecast = await getForecastHourly(data);

    //Array declarations, forecast objects constructed and pushed into respective arrays
    let hourlyLocal = [];
    let longLocal = [];
    for (let i = 0; i < 12; i++){
      hourlyLocal[i] = new hourlyWeather(hourlyForecast.properties.periods[i].number,
               hourlyForecast.properties.periods[i].startTime,
               hourlyForecast.properties.periods[i].endTime,
               hourlyForecast.properties.periods[i].isDaytime,
               hourlyForecast.properties.periods[i].temperature,
               hourlyForecast.properties.periods[i].temperatureUnit,
               hourlyForecast.properties.periods[i].probabilityOfPrecipitation,
               hourlyForecast.properties.periods[i].dewpoint,
               hourlyForecast.properties.periods[i].relativeHumidity,
               hourlyForecast.properties.periods[i].windSpeed,
               hourlyForecast.properties.periods[i].windDirection,
               hourlyForecast.properties.periods[i].shortForecast,
               hourlyForecast.properties.periods[i].detailedForecast);
    //Output test in console log
    //console.log("Hourly number " + hourlyLocal[i].number);
    //console.log(hourlyLocal[i]);
    }
  
    for (let i = 0; i < 14; i++){
      longLocal[i] = new longPeriodWeather(longPeriodForecast.properties.periods[i].number,
                 longPeriodForecast.properties.periods[i].startTime,
                 longPeriodForecast.properties.periods[i].endTime,
                 longPeriodForecast.properties.periods[i].isDaytime,
                 longPeriodForecast.properties.periods[i].temperature,
                 longPeriodForecast.properties.periods[i].temperatureUnit,
                 longPeriodForecast.properties.periods[i].probabilityOfPrecipitation,
                 longPeriodForecast.properties.periods[i].dewpoint,
                 longPeriodForecast.properties.periods[i].relativeHumidity,
                 longPeriodForecast.properties.periods[i].windSpeed,
                 longPeriodForecast.properties.periods[i].windDirection,
                 longPeriodForecast.properties.periods[i].shortForecast,
                 longPeriodForecast.properties.periods[i].detailedForecast);
    //console.log("Long Period number " + longLocal[i].number);
    //console.log(longLocal[i]);

    //document.getElementById("test").innerHTML= longLocal[0].temperature;
    }
}

//In-built Geolocation API for HTML

async function fetchCoords(pos) {
  const crd = pos.coords;

  console.log("Your current position is:");
  console.log(`Latitude : ${crd.latitude}`);
  console.log(`Longitude: ${crd.longitude}`);
  console.log(`More or less ${crd.accuracy} meters.`);

  var testdata = await fetchMetaData(crd.latitude, crd.longitude);
  
  var forecast = await getForecast(testdata);
  console.log(forecast);
  console.log(forecast.properties.periods[0].temperature)
  

//var newdata = getForecastUrl(testdata);

//document.getElementById("test").innerHTML=accessForecastProperties(newdata);
}

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(fetchCoords);
  } else {
    print("Browser doesn't support geolocation");
  }
}

// Function to fetch JSON-LD weather data from the weather.gov API
async function fetchMetaData(latitude, longitude) {
    try {
      // Original coordinates: const url = `https://api.weather.gov/points/36.1627,-86.7816`;
      var url = `https://api.weather.gov/points/${latitude},${longitude}`;
      var response = await fetch(url);
      var data = await response.json();
      var newurl = data['properties']['forecast'];
      //console.log(newurl);
      return newurl;
    } catch (error) {
      console.error('Error fetching weather data:', error);
      return null;
    }
}

async function getForecast(url){
  //console.log(url);
  try {
    var response = await fetch(url);
    var data = await response.json();
    //console.log(data);
    
    return data;
  } catch (error) {
    console.error('Error fetching weather data:', error);
    return null;
  }


}

async function getForecastHourly(url){
  //console.log(url);
  url = url + '/hourly';
  try {
    var response = await fetch(url);
    var data = await response.json();
    //console.log(data);
    return data;

  } catch (error) {
    console.error('Error fetching weather data:', error);
    return null;
  }

}
  

// Function to access forecast properties using jsonld library
async function accessForecastProperties(data) {
  try {
    // Flatten the JSON-LD data
    const flattened = await jsonld.flatten(data);
    
    // Access forecast properties
    const forecastProperties = flattened['@graph']
      .filter(node => node['@type'] === 'Forecast')
      .map(forecast => ({
        name: forecast.name,
        detailedForecast: forecast.detailedForecast
      }));

    return forecastProperties;
  } catch (error) {
    console.error('Error accessing forecast properties:', error);
    return null;
  }
}

async function getCoordinates(city, state) {
  try {
    const url = `https://nominatim.openstreetmap.org/search?city=${encodeURIComponent(city)}&state=${encodeURIComponent(state)}&format=json`;
    const response = await fetch(url);
    const data = await response.json();
    if (data.length > 0) {
      // Get the first result (most relevant)
      const result = data[0];
      const latitude = result.lat.toString(); // Convert latitude to string
      const longitude = result.lon.toString(); // Convert longitude to string
      return [latitude, longitude]; // Return latitude and longitude as an array of strings
    } else {
      console.error('No results found');
      return null;
    }
  } catch (error) {
    console.error('Error fetching coordinates:', error);
    return null;
  }
}


$(document).ready(() => {
    // mtsuWeather()
    $("#glance_data").html(test_data["glance"])
    $("#glance_icon").prop('src', weather_icons["sunny"])

    $("#current_icon").prop('src', weather_icons["sunny"])
    $("#current_temp").html(test_data["current"][4] + "&deg" + test_data["current"][5])
    $("#current_rain_chance").html(100*test_data["current"][6] + "% chance")
    $("#current_humidity").html(100*test_data["current"][8] + "% humidity")
    $("#current_wind_speed").html(test_data["current"][9] + " " + test_data["current"][10])
    
    $("#img_0").prop('src', weather_icons["sunny"])
    $("#img_1").prop('src', weather_icons["cloudy"])
    $("#img_2").prop('src', weather_icons["rain"])
    $("#img_3").prop('src', weather_icons["cloudy"])
    $("#img_4").prop('src', weather_icons["sunny"])
    $("#high_0").html(test_data["five_day"][0][4] + "&deg" + test_data["five_day"][0][5])
    $("#high_1").html(test_data["five_day"][1][4] + "&deg" + test_data["five_day"][1][5])
    $("#high_2").html(test_data["five_day"][2][4] + "&deg" + test_data["five_day"][2][5])
    $("#high_3").html(test_data["five_day"][3][4] + "&deg" + test_data["five_day"][3][5])
    $("#high_4").html(test_data["five_day"][4][4] + "&deg" + test_data["five_day"][4][5])
    $("#rain_chance_0").html(100*test_data["five_day"][0][6] + "% chance")
    $("#rain_chance_1").html(100*test_data["five_day"][1][6] + "% chance")
    $("#rain_chance_2").html(100*test_data["five_day"][2][6] + "% chance")
    $("#rain_chance_3").html(100*test_data["five_day"][3][6] + "% chance")
    $("#rain_chance_4").html(100*test_data["five_day"][4][6] + "% chance")
    


})

let test_data = {      
    "glance": "Sunny with a high of 75&degF. No chance of rain.",
    //          0      1        2        3    4   5     6   7    8        9          10            11               12           
    "current": [1, "6:00pm", "7:00pm", true, 71, "F", 0.09, 40, 0.32, "9 mph", "from North", "short forecast", "detailed forecast"],
    //
    "five_day": [
    //   0     1          2         3    4   5     6    7    8     9           10              11               12           
        [1, "12:00am", "11:59pm", true, 75, "F", 0.09, 40, 0.32, "9 mph", "from North", "short forecast", "detailed forecast"],
        [2, "12:00am", "11:59pm", true, 73, "F", 0.04, 47, 0.47, "4 mph", "from Northeast", "short forecast", "detailed forecast"],
        [3, "12:00am", "11:59pm", true, 78, "F", 0.7, 52, 0.52, "15 mph", "from South", "short forecast", "detailed forecast"],
        [4, "12:00am", "11:59pm", true, 81, "F", 0.25, 51, 0.51, "17 mph", "from South", "short forecast", "detailed forecast"],
        [5, "12:00am", "11:59pm", true, 83, "F", 0.25, 47, 0.47, "14 mph", "from South", "short forecast", "detailed forecast"]
    ]
}

let weather_icons = {
    "cloudy": "./weather_icons/cloudy.png",
    "moon": "./weather_icons/moon.png",
    "rain": "./weather_icons/rain.png",
    "snow": "./weather_icons/snow.png",
    "sunny": "./weather_icons/sunny.png"
}