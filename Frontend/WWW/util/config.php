<?php
$dbuser="nikitin2727a";
$dbpasswd="nikitin2727a";
try{
	$db= new PDO("mysql:host=;dbname=nikitin2727a;charset=utf8",$dbuser,$dbpasswd);
} catch(PDOException $er){
	echo'Connection failed: ' . $er->getMessage();
}
?>