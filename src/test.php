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

<html>
	<head>
		<title>Visual Studio Code Remote :: PHP</title>
	</head>
	<body>
		<?php 
		
		sayHello('remote world, from VSCode');

		$result = mysqli_query($mysqli, "SELECT version() as version;");
		echo "<br>Running ";
		echo $result->fetch_object()->version;
			
		?>
	</body>
</html>