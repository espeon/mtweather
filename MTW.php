<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>M.T.W.</title>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/jsonld/1.0.0/jsonld.min.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
    <script src="weatherStorage.js"></script>
    <script src="MTW.js"></script>
    <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
    <link rel="stylesheet" href="MTW.css">
    
</head>

<body>
    <div class="w3-bar">
        <a href="#" class="w3-bar-item w3-button">Home</a>
        <a href="#" class="w3-bar-item w3-button">Link 1</a>
        <a href="#" class="w3-bar-item w3-button">Link 2</a>
    </div>
    <div id="glance_hr">
        <table>
            <tr>
                <th>At a Glance</th>
            </tr>
            <tr>
                <td><img src="" alt=""></td> <td>At a Glance Data</td>
            </tr>
        </table>

    </div>

    <div id="current_hr">
        <table>
            <tr>
                <th>Start</th> <th>End</th>
            </tr>
            <tr>
                <td id="start_time">start_time</td> <td id="end_time">end_time</td>
            </tr>
            <tr>
                <td rowspan="4"><img src="" alt=""></td> <td>Current Temp:</td>
            </tr>
            <tr>
                <td>Rain Chance: </td>
            </tr>
            <tr>
                <td>Humidity: </td>
            </tr>
            <tr>
                <td>Wind Speed: </td>
            </tr>
            
        </table>

    </div>

    <div id="TBD_hr">

    </div>
</body>
</html>