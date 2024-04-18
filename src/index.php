<?php

/*----------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See LICENSE in the project root for license information.
 *---------------------------------------------------------------------------------------*/
include_once("db.php");

function sayHello($name)
{
	echo "<div class=\"mb-2\">Hello $name!</div>";
}

function isDocker(): bool
{
	return is_file("/.dockerenv");
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
		<div class="text-4xl pt-16 pb-2">weather app</div>
		<?php

		if (isDocker()) {
			sayHello('remote world, from VSCode');
		} else {
			sayHello('from XAMPP');
		}

		echo "PHP version "
			. phpversion();

		echo "<br> Apache version ";
		$apa = apache_get_version();
		# trim "Apache/"
		echo substr($apa, 7);

		$result = mysqli_query($mysqli, "SELECT version() as version;");
		echo "<br>MySQL version ";
		echo $result->fetch_object()->version;

		echo "<br>Running on ";
		$os = "cat /etc/*-release | grep \"PRETTY_NAME\" | sed 's/PRETTY_NAME=//g' | sed 's/\"//g'";
		echo shell_exec($os);
		?>
	</center>
</body>

</html>