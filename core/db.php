<?php
include 'medoo.php';
$production = false;
if ( $production ) {

	$db = new medoo([
	// required
		'database_type' => 'mysql',
		'database_name' => 'u702758025_cfweb',
		'server' => 'mysql.hostinger.es',
		'username' => 'u702758025_cfweb',
		'password' => 'a5mjky2GKmED9Y',
		'charset' => 'utf8',
		'port' => 3306,
		'option' => [ PDO::ATTR_CASE => PDO::CASE_NATURAL]
	]);
	
} else {
	
	$db = new medoo([
	// required
		'database_type' => 'mysql',
		'database_name' => 'cfweb',
		'server' => 'localhost',
		'username' => 'root',
		'password' => '',
		'charset' => 'utf8',
		'port' => 3306,
		'option' => [ PDO::ATTR_CASE => PDO::CASE_NATURAL]
	]);

}