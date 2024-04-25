<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>M.T. Weather</title>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/jsonld/1.0.0/jsonld.min.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
    <script src="weatherStorage.js"></script>
    <script src="MTW.js"></script>
    <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
    <link rel="stylesheet" href="MTW.css">
    
</head>

<body>
    <div class="w3-bar">
        <a href="#" class="w3-bar-item w3-button w3-border">Middle Tennesee Weather</a>
        <input type="text" class="w3-bar-item w3-input w3-border" placeholder="City, State">
        <a href="#" class="w3-bar-item w3-button w3-border">Search</a>
        <a href="#" class="w3-bar-item w3-button w3-right w3-border">Login</a>
        <input type="text" class="w3-bar-item w3-input w3-right w3-border" placeholder="Password" name="password">
        <input type="text" class="w3-bar-item w3-input w3-right w3-border" placeholder="Username" name="username">
        
    </div>
    <div id="glance">
        <table>
            <tr>
                <th colspan="2">At a Glance</th>
            </tr>
            <tr>
                <td><img src="./weather_icons/cloudy.png" alt="" width="150px" id="glance_icon"></td> <td id="glance_data">glance_data</td>
            </tr>
        </table>

    </div>

    <div id="current">
        <table>
            <tr>
                <th colspan="3">Currently</th>
            </tr>
            <tr>
                <td rowspan="4"><img src="./weather_icons/sunny.png" alt="" width="150px" id="current_icon"></td> <td><img src="./weather_icons/thermometer.png" alt="" width="50px"></td> <td id="current_temp">current_temp</td>
            </tr>
            <tr>
                <td><img src="./weather_icons/rain.png" alt="" width="50px"></td> <td id="current_rain_chance">current_rain_chance</td>
            </tr>
            <tr>
                <td><img src="./weather_icons/humidity.png" alt="" width="50px"></td> <td id="current_humidity">current_humidity</td>
            </tr>
            <tr>
                <td><img src="./weather_icons/wind-gauge.png" alt="" width="50px"></td> <td id="current_wind_speed">current_wind_speed</td>
            </tr>
            
        </table>

    </div>

    <div id="five_day">
        <table>
            <tr>
                <th id="day_0">day_0</th> <th id="day_1">day_1</th> <th id="day_2">day_2</th> <th id="day_3">day_3</th> <th id="day_4">day_4</th>
            </tr>
            <tr>
                <td> <img src="./weather_icons/cloudy.png" alt="" width="150px" id="img_0"> </td> <td> <img src="./weather_icons/sunny.png" alt="" width="150px" id="img_1"> </td> <td> <img src="./weather_icons/sunny.png" alt="" width="150px" id="img_2"> </td> <td> <img src="./weather_icons/sunny.png" alt="" width="150px" id="img_3"> </td> <td> <img src="./weather_icons/sunny.png" alt="" width="150px" id="img_4"> </td>
            </tr>
            <tr>
                <td id="high_0">high_0</td> <td id="high_1">high_1</td> <td id="high_2">high_2</td> <td id="high_3">high_3</td> <td id="high_4">high_4</td>
            </tr>
            <tr>
                <td id="rain_chance_0">rain_chance_0</td> <td id="rain_chance_1">rain_chance_1</td> <td id="rain_chance_2">rain_chance_2</td> <td id="rain_chance_3">rain_chance_3</td> <td id="rain_chance_4">rain_chance_4</td>
            </tr>
        </table>
    </div>

</body>
</html>