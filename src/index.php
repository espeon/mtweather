<?php

/*----------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See LICENSE in the project root for license information.
 *---------------------------------------------------------------------------------------*/
include_once("db.php");

function sayHello($name) {
	echo "Hello $name!";
}

?>


<!DOCTYPE HTML>
<html>
	<head>
		<title>Visual Studio Code Remote :: PHP</title>
		<link rel="stylesheet" type="text/css" href="post.css">
	</head>
	<body class="base">
		<center class="base">
		<div class="text-4xl">weather app</div>
		<?php 
		
		sayHello('remote world, from VSCode');

		$result = mysqli_query($mysqli, "SELECT version() as version;");
		echo "<br>Running ";
		echo $result->fetch_object()->version;
			
		?>
		</center>
	</body>
</html>