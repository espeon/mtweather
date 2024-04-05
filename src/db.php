<?php
// Basic connection settings
$databaseHost = $_ENV["DATABASE_HOST"];
$databaseUsername = $_ENV["DATABASE_USER"];
$databasePassword = $_ENV["DATABASE_PASSWORD"];
$databaseName = $_ENV["DATABASE_NAME"];

// Connect to the database
$mysqli = mysqli_connect($databaseHost, $databaseUsername, $databasePassword, $databaseName); 
?>