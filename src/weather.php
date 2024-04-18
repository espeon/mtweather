<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Weather App</title>
    <link rel="stylesheet" type="text/css" href="/post.css">
    <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
</head>

<body class="base">
    <center class="base flex items-center justify-center">
        <div class="bg-[#f0f0f0] dark:bg-[#1f2937] rounded-lg max-w-3xl w-full shadow-md p-6 mt-8 md:p-8 flex flex-col items-center justify-center">
            <div id="firstHour" class="flex flex-col items-center justify-center">
                <div class="text-5xl text-[#2563eb] dark:text-[#93c5fd]">Loading</div>
                <div class="flex items-center">
                    <span class="text-lg font-medium text-[#6b7280] dark:text-[#9ca3af]">Sunny</span>
                </div>
            </div>
            <div id="hourlyForecast" class="max-w-3xl w-full grid grid-cols-4 md:grid-cols-8 gap-2 mt-8 md:mt-8 lg:mt-8">
            </div>
            <div id="error" class="text-red-500"></div>
    </center>
    <script>
        const testing = true;
        const hourlyForecastDisplay = document.getElementById('hourlyForecast');
        const firstHourDisplay = document.getElementById('firstHour');
        const errorDisplay = document.getElementById('error');

        function convertWeatherToNormalizedIcon(weather) {
            const match = weather.match(/\/land\/([a-z]+)\/([a-z_]+),\d+/);
            let weatherCode;
            let dayNight;
            if (!match) {
                console.log('no match for ' + weather);
                return 'sun.svg';
            } else {
                console.log(match)
                weatherCode = match[2];
                dayNight = match[1];
            }

            let icon = 'sun.svg';
            switch ((weatherCode + dayNight)) {
                case ('skcday'):
                    name = 'clear-day.svg';
                    break;

                case ('skcnight'):
                    name = 'clear-night.svg';
                    break;

                case 'fewday':
                    name = 'partly-cloudy-day.svg';
                    break;

                case 'fewnight':
                    name = 'partly-cloudy-night.svg';
                    break;
                case 'sctday':
                    name = 'partly-cloudy-day.svg';
                    break;

                case 'sctnight':
                    name = 'partly-cloudy-night.svg';
                    break;

                case 'bknday':
                case 'bknnight':
                    name = 'cloudy.svg';
                    break;

                case 'ovcday':
                    name = 'overcast-day.svg';
                    break;

                case 'ovcnight':
                    name = 'overcast-night.svg';
                    break;

                case 'snday':
                case 'snnight':
                    name = 'snow.svg';
                    break;

                case 'ra_snday':
                case 'ra_snnight':
                    name = 'sleet.svg';
                    break;

                case 'raipday':
                case 'raipnight':
                    name = 'rain.svg';
                    break;

                case 'ra_fzraday':
                case 'ra_fzranight':
                case 'fzra_snday':
                case 'fzra_snnight':
                    name = 'sleet.svg';
                    break;

                case 'ipday':
                case 'ipnight':
                    name = 'hail.svg';
                    break;

                case 'minus_raday':
                case 'minus_ranight':
                    name = 'drizzle.svg';
                    break;

                case 'raday':
                case 'ranight':
                case 'shraday':
                case 'shranight':
                    name = 'rain.svg';
                    break;

                case 'hi_shwrzday':
                case 'hi_shwrznight':
                    name = 'rain.svg';
                    break;

                case 'tsraday':
                case 'tsra_hiday':
                case 'tsra_sctday':
                    name = 'thunderstorms-day-rain.svg';
                    break;

                case 'tsranight':
                case 'tsra_hinight':
                case 'tsra_sctnight':
                    name = 'thunderstorms-night-rain.svg';
                    break;

                case 'scttsraday':
                case 'hi_tsraday':
                    name = 'thunderstorms-day.svg';
                    break;

                case 'scttsranight':
                case 'hi_tsranight':
                    name = 'thunderstorms-night.svg';
                    break;

                case 'fcday':
                case 'fcnight':
                case 'torday':
                case 'tornight':
                    name = 'tornado.svg';
                    break;

                default:
                    name = 'not-available.svg?' + (weatherCode + dayNight);
            }

            return "https://basmilius.github.io/weather-icons/production/line/all/" + name;
        }


        function getCurrentPosition(options = {}) {
            console.log("getting current position");
            return new Promise((resolve, reject) => {
                if (!navigator.geolocation) {
                    reject(new Error('Geolocation is not supported by your browser'));
                    return;
                }

                navigator.geolocation.getCurrentPosition(resolve, reject, options);
            });
        }

        getCurrentPosition({
                timeout: 500
            })
            .then((position) => {
                const latitude = position.coords.latitude;
                const longitude = position.coords.longitude;

                getWeather(`${latitude},${longitude}`);
            })
            .catch((error) => {
                console.error('Error getting location:', error);
                if (testing == true) getWeather("middle tennessee state university");
                else {
                    errorDisplay.innerHTML = '<p class="text-red-500">Error fetching weather data from browser API, trying to get location from IP </p>';
                    fetch('https://jsonip.com/')
                        .then(response => response.json())
                        .then(data => {
                            // fetch from current url ipinfo endpoint
                            fetch(`${window.location.origin}/ipinfo.php?ip=${data.ip}`)
                                .then(response => response.json())
                                .then(data => {
                                    errorDisplay.innerHTML = ''
                                    getWeather(`${data.loc}`);
                                });
                        });
                }
            });

        function getWeather(location) {
            console.log("getting weather");

            let locationName = 'Loading name';

            function handleLocationResponse(locationResponse) {
                if (!locationResponse.ok) {
                    throw new Error('Location not found');
                }
                return locationResponse.json();
            }

            function handleLocationData(locationData) {
                if (locationData.length === 0) {
                    throw new Error('Location not found');
                }
                locationName = locationData[0].display_name;
                console.log(locationName)
                const latitude = locationData[0].lat;
                const longitude = locationData[0].lon;
                return fetch(`https://api.weather.gov/points/${latitude},${longitude}`);
            }

            function handleWeatherResponse(weatherResponse) {
                if (!weatherResponse.ok) {
                    throw new Error('Weather data not available');
                }
                return weatherResponse.json();
            }

            function handleWeatherData(weatherData) {
                return fetch(weatherData.properties.forecastHourly);
            }

            function handleForecastResponse(forecastResponse) {
                if (!forecastResponse.ok) {
                    throw new Error('Forecast data not available');
                }
                return forecastResponse.json();
            }

            function handleForecastData(forecastData) {
                console.log(forecastData);
                const hourlyForecast = forecastData.properties.periods;

                // pop first off
                const firstHour = hourlyForecast.shift();
                firstHourDisplay.innerHTML = `
      <div class="text-5xl text-[#2563eb] dark:text-[#93c5fd]">${firstHour.temperature}° - ${firstHour.shortForecast}</div>
      <div class="flex items-center space-x-2 md:space-x-4 lg:space-x-6">
        <span id="location" class="text-lg font-medium text-[#6b7280] dark:text-[#9ca3af]">${locationName.split(',').slice(-5).join()}</span>
      </div>`;

                for (const forecast of hourlyForecast.slice(0, 8)) {
                    hourlyForecastDisplay.innerHTML += `
        <div class="flex flex-col items-center justify-cente">
          <img src="${convertWeatherToNormalizedIcon(forecast.icon)}" alt="${forecast.shortForecast}" class="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20">
          <span class="text-sm md:text-base lg:text-lg font-small text-[#6b7280] dark:text-[#9ca3af]">${new Date(forecast.startTime).toLocaleTimeString([], { hour: "numeric", minute: "2-digit" })}</span>
          <span class="text-sm md:text-base lg:text-lg font-medium text-[#2563eb] dark:text-[#93c5fd]">${forecast.temperature}°</span>
        </div>`;
                }
            }

            function handleError(error) {
                console.error('Error fetching data:', error);
                errorDisplay.innerHTML = '<p class="text-red-500">Error fetching weather data. Please try again later.</p>';
            }

            let latitude;
            let longitude;

            try {
                if (!location.includes(',')) {
                    // if we get a name (somehow) we get coordinates
                    fetch(`https://nominatim.openstreetmap.org/search?q=${location}&format=json&limit=1`)
                        .then(handleLocationResponse)
                        .then(handleLocationData)
                        .then(handleWeatherResponse)
                        .then(handleWeatherData)
                        .then(handleForecastResponse)
                        .then(handleForecastData)
                        .catch(handleError);
                } else {
                    // we just use the coordinates
                    [latitude, longitude] = location.split(',');
                    // get place name from lat/long
                    fetch(`https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`)
                        .then(res => res.json())
                        .then(data => {
                            locationName = data.display_name;
                            document.getElementById("location").innerHTML = locationName.split(',').slice(-5).join()
                            console.log(locationName)
                        });
                    fetch(`https://api.weather.gov/points/${latitude},${longitude}`)
                        .then(handleWeatherResponse)
                        .then(handleWeatherData)
                        .then(handleForecastResponse)
                        .then(handleForecastData)
                        .catch(handleError);
                }
            } catch (error) {
                handleError(error);
            }
        }
    </script>
</body>

</html>