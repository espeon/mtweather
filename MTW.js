

//default weather
async function mtsuWeather()
{
  //getting weather
  var data = await fetchMetaData(35.8486,-86.3669);//mtsu coordinates
  var hourlyForecast = await getForecastHourly(data);
  var longPeriodForecast = await getForecast(data);

  $("#glance_title").html("MTSU At A Glance")


    $("#glance_data").html(longPeriodForecast.properties.periods[0].shortForecast + ". High of " + longPeriodForecast.properties.periods[0].temperature + "&deg" + longPeriodForecast.properties.periods[0].temperatureUnit)
    $("#glance_icon").prop('src', longPeriodForecast.properties.periods[0].icon)

    $("#current_temp").html(hourlyForecast.properties.periods[0].temperature + "&deg" + hourlyForecast.properties.periods[0].temperatureUnit)
    $("#current_rain_chance").html(hourlyForecast.properties.periods[0].probabilityOfPrecipitation.value + "% chance of rain")
    $("#current_humidity").html(hourlyForecast.properties.periods[0].relativeHumidity.value + "% humidity")
    $("#current_wind_speed").html(hourlyForecast.properties.periods[0].windSpeed + " " + hourlyForecast.properties.periods[0].windDirection)
    $("#current_icon").prop('src', hourlyForecast.properties.periods[0].icon)

    //Display 5 days (long periods) forecast, where i = 0: today, and any 2 "periods" forward means a day
    for (let i = 0; i < 5; i++){
	let dayTag = "#day_" + i;
	let imgTag = "#img_" + i;
	let highTag = "#high_" + i;
	let rainTag = "#rain_chance_" + i;
	
		$(dayTag).html(longPeriodForecast.properties.periods[i].name)
	
	$(imgTag).prop('src', longPeriodForecast.properties.periods[i].icon)
	$(highTag).html(longPeriodForecast.properties.periods[i].temperature + "&deg" + longPeriodForecast.properties.periods[i*2].temperatureUnit)
	if (longPeriodForecast.properties.periods[i].probabilityOfPrecipitation.value === null)
		$(rainTag).html("0% chance")
    	else
    		$(rainTag).html(longPeriodForecast.properties.periods[i].probabilityOfPrecipitation.value + "% chance")
    }
    console.log("mtsuWeather() has been called.");
}

//user location based weather
async function localWeather()
{

  var data = await fetchMetaData(loc[0],loc[1]);//mtsu coordinates
  var hourlyForecast = await getForecastHourly(data);
  var longPeriodForecast = await getForecast(data);

  $("#glance_title").html("Your Location At A Glance")


    $("#glance_data").html(longPeriodForecast.properties.periods[0].shortForecast + ". High of " + longPeriodForecast.properties.periods[0].temperature + "&deg" + longPeriodForecast.properties.periods[0].temperatureUnit)
    $("#glance_icon").prop('src', longPeriodForecast.properties.periods[0].icon)

    $("#current_temp").html(hourlyForecast.properties.periods[0].temperature + "&deg" + hourlyForecast.properties.periods[0].temperatureUnit)
    $("#current_rain_chance").html(hourlyForecast.properties.periods[0].probabilityOfPrecipitation.value + "% chance of rain")
    $("#current_humidity").html(hourlyForecast.properties.periods[0].relativeHumidity.value + "% humidity")
    $("#current_wind_speed").html(hourlyForecast.properties.periods[0].windSpeed + " " + hourlyForecast.properties.periods[0].windDirection)
    $("#current_icon").prop('src', hourlyForecast.properties.periods[0].icon)

    //Display 5 days (long periods) forecast, where i = 0: today, and any 2 "periods" forward means a day
    for (let i = 0; i < 5; i++){
	let dayTag = "#day_" + i;
	let imgTag = "#img_" + i;
	let highTag = "#high_" + i;
	let rainTag = "#rain_chance_" + i;
	
	$(dayTag).html(longPeriodForecast.properties.periods[i].name)
	
	$(imgTag).prop('src', longPeriodForecast.properties.periods[i].icon)
	$(highTag).html(longPeriodForecast.properties.periods[i].temperature + "&deg" + longPeriodForecast.properties.periods[i].temperatureUnit)
	if (longPeriodForecast.properties.periods[i].probabilityOfPrecipitation.value === null)
		$(rainTag).html("0% chance")
    	else
    		$(rainTag).html(longPeriodForecast.properties.periods[i].probabilityOfPrecipitation.value + "% chance")
    }
    
    console.log("localWeather() has been called.");
}

//user defined location weather
async function directedWeather(city,state){

  
  var loc = await getCoordinates(city,state);
  if(loc==null){
    console.log("Location not found");
    $("#glance_data").html("City not found")
    return;
  }
  var data = await fetchMetaData(loc[0],loc[1]);//mtsu coordinates
  var hourlyForecast = await getForecastHourly(data);
  var longPeriodForecast = await getForecast(data);
  $("#glance_title").html(city + " At A Glance")


    $("#glance_data").html(longPeriodForecast.properties.periods[0].shortForecast + ". High of " + longPeriodForecast.properties.periods[0].temperature + "&deg" + longPeriodForecast.properties.periods[0].temperatureUnit)
    $("#glance_icon").prop('src', longPeriodForecast.properties.periods[0].icon)

    $("#current_temp").html(hourlyForecast.properties.periods[0].temperature + "&deg" + hourlyForecast.properties.periods[0].temperatureUnit)
    $("#current_rain_chance").html(hourlyForecast.properties.periods[0].probabilityOfPrecipitation.value + "% chance of rain")
    $("#current_humidity").html(hourlyForecast.properties.periods[0].relativeHumidity.value + "% humidity")
    $("#current_wind_speed").html(hourlyForecast.properties.periods[0].windSpeed + " " + hourlyForecast.properties.periods[0].windDirection)
    $("#current_icon").prop('src', hourlyForecast.properties.periods[0].icon)

    //Display 5 days (long periods) forecast, where i = 0: today, and any 2 "periods" forward means a day
    for (let i = 0; i < 5; i++){
      let dayTag = "#day_" + i;
      let imgTag = "#img_" + i;
      let highTag = "#high_" + i;
      let rainTag = "#rain_chance_" + i;
      
      $(dayTag).html(longPeriodForecast.properties.periods[i].name)
      
      $(imgTag).prop('src', longPeriodForecast.properties.periods[i].icon)
      $(highTag).html(longPeriodForecast.properties.periods[i].temperature + "&deg" + longPeriodForecast.properties.periods[i].temperatureUnit)
      if (longPeriodForecast.properties.periods[i].probabilityOfPrecipitation.value == null)
        $(rainTag).html("0% chance")
          else
            $(rainTag).html(longPeriodForecast.properties.periods[i].probabilityOfPrecipitation.value + "% chance")
        }
    console.log("directedWeather() has been called.");
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
      console.log(newurl);
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


mtsuWeather()
    


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

// adding a comment to mess around!
// adding another comment for messing around!