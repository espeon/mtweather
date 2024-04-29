<?php
//Starting a session to store user id locally.
session_start();
//Store server IP.
define('SERVER', 'localhost');
//Store database username.
define('USERNAME', 'root');
//Store database password.
define('PASSWORD', 'Anubis12$');
//Store database name.
define('DATABASE', 'CSCI5410');

function consoleLog($output, $forward = true)
{
    $logger = 'console.log(' . json_encode($output, JSON_HEX_TAG) . ');';
    if ($forward) {
        $logger = '<script>' . $logger . '</script>';
    }
    echo $logger;
}

/*
 * userValidation
 * Compares given records to those in the database.
 *
 */
function userValidation($value, $mysqli, $id)
{
    // SQL to pull the asked for record.
    $stmt = $mysqli -> prepare("SELECT " . $id ." FROM UserInfo WHERE " . $id . " = ?");
    $stmt -> bind_param("s", $value);
    $stmt -> execute();
    $result = $stmt -> get_result();
    // Save associative array in $data
    $data = $result -> fetch_assoc();
    // Make sure the array isn't null
    if ($data != null) {
        return 0;
    }
    return 1;
}

/*
 * registerUser
 * Runs safety and logic checks on user signup information, then if valid adds
 * the user info to the database.
 *
 */
function registerUser($username, $password)
{
    // Attempt to connect to the database.
    $mysqli = new \MySQLi(SERVER, USERNAME, PASSWORD, DATABASE);
    if ($mysqli->connect_error != 0) {
        consoleLog("Bad Connection: " . $mysqli->connect_error);
        return -1;
    }

    // Trim input.
    $username = trim($username);
    $password = trim($password);

    // Verify input
    $args = func_get_args();
    foreach ($args as $value) {
        if (empty($value)) {
            consoleLog("Input cannot be left empty!");
            return -1;
        } elseif (preg_match("/([<|>])/", $value)) {
            consoleLog("<> characters are not allowed!");
            return -1;
        }
    }

    // Check if email address or username already exist.
    if (userValidation($username, $mysqli, "username") == 0) {
        consoleLog("Username already exists!");
        return -1;
    }

    // Check password length.
    if (strlen($password) > 32) {
        consoleLog("Password is too long!");
        return -1;
    }

    // Encrypt user password.
    $hashedPassword = password_hash($password, PASSWORD_DEFAULT);

    // Insert the new user into the database.
    $stmt = $mysqli -> prepare("INSERT INTO UserInfo(Username, Password) VALUES(?,?)");
    $stmt -> bind_param("ss", $username, $hashedPassword);
    $stmt -> execute();
    if ($stmt -> affected_rows != 1) {
        consoleLog("An error occurred. Please try again :c");
        return -1;
    } else {
        // Redirect to homepage
        header("location: MTW.php");
        exit();
    }
}

function saveCity($id, $city, $state) {
    // Attempt to connect to the database.
    $mysqli = new \MySQLi(SERVER, USERNAME, PASSWORD, DATABASE);
    if ($mysqli->connect_error != 0) {
        consoleLog("Bad Connection: " . $mysqli->connect_error);
        return -1;
    }

    $city = trim($city);
    $state = trim($state);

    $stmt = $mysqli -> prepare("INSERT INTO UserCities(UserID, CityName, State) VALUES(?,?,?)");
    $stmt -> bind_param("iss", $id, $city, $state);
    $stmt -> execute();

    if ($stmt -> affected_rows != 1) {
        return 0;
    }
}

function removeCity($id, $city, $state) {
    // Attempt to connect to the database.
    $mysqli = new \MySQLi(SERVER, USERNAME, PASSWORD, DATABASE);
    if ($mysqli->connect_error != 0) {
        consoleLog("Bad Connection: " . $mysqli->connect_error);
        return -1;
    }

    $city = trim($city);
    $state = trim($state);

    $stmt = $mysqli -> prepare("DELETE FROM UserCities WHERE (UserID, CityName, State) = (?, ?, ?)");
    $stmt -> bind_param("iss", $id, $city, $state);
    $stmt -> execute();

    if ($stmt -> affected_rows != 1) {
        return 0;
    }
}

/*
 * loginUser
 * Verifies given information and signs in the user if it is correct.
 *
 */
function loginUser($username, $password)
{
    // Attempt to connect to the database.
    $mysqli = new \MySQLi(SERVER, USERNAME, PASSWORD, DATABASE);
    if ($mysqli -> connect_error != 0)
        return "Bad Connection: " . $mysqli -> connect_error;

    // Trim input.
    $username = trim($username);
    $password = trim($password);

    if ($username == "" || $password == "") {
        return "Both fields are required";
    }

    // SQL command for lookup
    $sql = "SELECT * FROM UserInfo WHERE Username = ?";
    // Find record in database
    $stmt = $mysqli -> prepare($sql);
    $stmt -> bind_param("s", $username);
    $stmt -> execute();
    $result = $stmt -> get_result();
    // Store.
    $data = $result -> fetch_assoc();

    // Check if the given password matches the saved one.
    if ($data == null || !password_verify($password, $data["Password"])) {
        return "Wrong username or password";
    } else {
        // Save username to sessionid
        $_SESSION["user"] = $data["UserID"];
        // Redirect to account details page
        header("location: MTW.php");
        exit();
    }
}

/*
 * logoutUser
 * Removes sessionid to logout user.
 *
 */
function logoutUser() {
    // Delete client-side sessionid
    session_destroy();
    // Redirect to homepage
    header("location: MTW.php");
    exit();
}
