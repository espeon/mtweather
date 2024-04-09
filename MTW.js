

// Function to fetch JSON-LD weather data from the weather.gov API
async function fetchMetaData(latitude, longitude) {
  try {
    const url = `https://api.weather.gov/points/36.1627,-86.7816`;
    const response = await fetch(url);
    const data = await response.json();
    //console.log(data);
    return data;
  } catch (error) {
    console.error('Error fetching weather data:', error);
    return null;
  }
}

async function fetchMetaData(latitude, longitude) {
    try {
      const url = `https://api.weather.gov/points/36.1627,-86.7816`;
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      console.log(data.properties.forecast);
      return data;
    } catch (error) {
      console.error('Error fetching weather data:', error);
      return null;
    }
}

function getForecastUrl(metadata) {
    try {
      // Check if metadata and properties.forecast exist
      if (!metadata || !metadata.properties || !metadata.properties.forecast) {
        console.error('Forecast URL not found in metadata');
        return null;
      }
      // Return the forecast URL
      return metadata.properties.forecast;
    } catch (error) {
      console.error('Error getting forecast URL:', error);
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

var testdata = fetchMetaData(36.1627,-86.7816);
//var newdata = getForecastUrl(testdata);

//document.getElementById("test").innerHTML=accessForecastProperties(newdata);