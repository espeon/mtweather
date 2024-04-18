<?php
// Check if there's an IP address provided. This is a basic validation.
if (!isset($_GET['ip']) || empty($_GET['ip'])) {
    die("IP Address is required.");
}

$ipAddress = $_GET['ip'];

// Perform some basic sanitation on the IP address
if (!filter_var($ipAddress, FILTER_VALIDATE_IP)) {
    die("Invalid IP Address.");
}

// Your API token
$apiToken = 'd9e038a9e7693f';

// The URL you're proxying the request to
$url = "https://ipinfo.io/$ipAddress/json?token=$apiToken";

// Initialize cURL session
$ch = curl_init();

curl_setopt($ch, CURLOPT_URL, $url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

// Execute the cURL session
$response = curl_exec($ch);

// Check for errors
if(curl_errno($ch)){
    echo 'cURL error: ' . curl_error($ch);
}

// Close cURL session
curl_close($ch);

// Forward the JSON response from the API to the client
header('Content-Type: application/json');
echo $response;
?>