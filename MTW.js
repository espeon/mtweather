

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
    }
  console.log(hourlyLocal[0].temperature);
  console.log(longLocal[0].temperature)

  //document.getElementById("test").innerHTML= longLocal[0].temperature;



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





//mtsuWeather();

directedWeather('Nashvillre','Tennessee');



//console.log(longPeriodData);