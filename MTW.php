<?php
require_once "db.php";

if (isset($_POST["login"])) {
    loginUser($_POST["username"], $_POST["password"]);
} elseif (isset($_POST["register"])) {
    registerUser($_POST["username"], $_POST["password"]);
} elseif (isset($_POST["logout"])) {
    logoutUser();
}

if (isset($_POST["Search"])) {
    echo '<script>directedWeather("' . $_POST["City"] . '", "' . $_POST["State"] . '")</script>';
} elseif (isset($_POST["Save"]) && isset($_SESSION["user"])) {
    saveCity($_SESSION["user"], $_POST["City"],$_POST["State"]);
} elseif (isset($_POST["delete"]) && isset($_SESSION["user"])) {
    removeCity($_SESSION["user"], $_POST["City"],$_POST["State"]);
}

?>

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
    <script src="db.php"></script>
    <link rel="stylesheet" href="MTW.css">
    <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
</head>

<body>
    <div class="w3-bar">
        <a href="#" class="w3-bar-item w3-button w3-border">Middle Tennessee Weather</a>
        <form method="post">
            <input id="City" name="City" type="text" class="w3-bar-item w3-input w3-border" placeholder="City">
            <input id="State" name="State" type="text" class="w3-bar-item w3-input w3-border" placeholder="State">
            <div class="w3-dropdown-hover">
                <button id="login" name="login" type="submit" class="w3-bar-item w3-button w3-border">Search</button>
                <div class="w3-dropdown-content w3-bar-block">
                    <button id="Search" name="Search" type="submit" class="w3-bar-item w3-button w3-border">Search</button>
                    <button id="Save" name="Save" type="submit" class="w3-bar-item w3-button w3-border">Save</button>
                </div>
            </div>
        </form>
        <div class="w3-dropdown-hover">
            <button class="w3-button">Saved Cities</button>
            <div class="w3-dropdown-content w3-bar-block w3-border">
                <?php
                if (isset($_SESSION["user"])) {
                    $mysqli = new \MySQLi(SERVER, USERNAME, PASSWORD, DATABASE);
                    $result = $mysqli->query("SELECT * FROM UserCities WHERE UserID = '" . $_SESSION["user"] . "'");
                    while($row = $result->fetch_assoc()) {
                        if ($row["CityName"] != null) {
                            echo '<a onclick="directedWeather(' . $row["CityName"] . ', ' . $row["State"] . ')" class="w3-bar-item w3-button" style="color: black">' . $row["CityName"] . ", " . $row["State"] . '                    
                            <form method="post"><input type="hidden" name="City" value="' . $row["CityName"] . '"><input type="hidden" name="State" value="' . $row["State"] . '"><button id="delete" name="delete" type="submit">🗑️</button></form>' . '</a>';
                        }
                    }
                }
                ?>
            </div>
        </div>
        <?php
        if (isset($_SESSION["user"])) {
            echo '<form method="post">';
            echo "<button id=\"logout\" name=\"logout\" type=\"submit\" class=\"w3-bar-item w3-button w3-right w3-border\">Logout</button>";
            echo '</form>';
        } else {
            echo '<form method="post">';
            echo '    <input type="text" class="w3-bar-item w3-input w3-left w3-border" placeholder="Username" name="username">';
            echo '    <input type="text" class="w3-bar-item w3-input w3-left w3-border" placeholder="Password" name="password">';
            echo '    <div class="w3-dropdown-hover">';
            echo '        <button id="login" name="login" type="submit" class="w3-bar-item w3-button w3-right w3-border">Login</button>';
            echo '        <div class="w3-dropdown-content w3-bar-block">';
            echo '            <button id="login" name="login" type="submit" class="w3-bar-item w3-button w3-right w3-border">Login</button>';
            echo '            <button id="register" name="register" type="submit" class="w3-bar-item w3-button w3-right w3-border">Register</button>';
            echo '        </div>';
            echo '    </div>';
            echo '</form>';
        }
        ?>
        
    </div>
    <div id="glance">
        <table>
            <tr>
                <th colspan="2">At a Glance</th>
            </tr>
            <tr>
                <td><img src="https://api.weather.gov/icons/land/night/ovc,9?size=small" width="150px" id="glance_icon"></td> <td id="glance_data">glance_data</td>
            </tr>
        </table>

    </div>

    <div id="current">
        <table>
            <tr>
                <th colspan="3">Currently</th>
            </tr>
            <tr>
                <td rowspan="4"><img src="https://api.weather.gov/icons/land/night/ovc,9?size=small" alt="" width="150px" id="current_icon"></td> 
                <td><img src="./weather_icons/thermometer.png" alt="" width="50px"></td> <td id="current_temp">current_temp</td>
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
                <td> <img src="./weather_icons/cloudy.png" alt="" width="150px" id="img_0"> </td> 
                <td> <img src="./weather_icons/cloudy.png" alt="" width="150px" id="img_1"> </td>
                <td> <img src="./weather_icons/cloudy.png" alt="" width="150px" id="img_2"> </td> 
                <td> <img src="./weather_icons/cloudy.png" alt="" width="150px" id="img_3"> </td> 
                <td> <img src="./weather_icons/cloudy.png" alt="" width="150px" id="img_4"> </td>
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
