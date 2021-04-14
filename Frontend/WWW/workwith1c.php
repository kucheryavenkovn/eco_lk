<?php
$title="Личный кабинет";
include "util/header.php"
?>

<?php 
 $xmldata = file_get_contents('http://127.0.0.1/1ib/odata/standard.odata/Catalog_Контрагенты?$format=json') or die("Failed to load");

 $array = json_decode($xmldata, true);
 var_dump($array);
  foreach($array['value'] as $kntl) 
 {         
 	print_r ($kntl["Логин"] . ", ");     
 	print_r ($kntl["Пароль"] . ", ");     
 	print_r ($kntl["Description"] . "<br/>"); 
 }

 ?> 
<?php 
include "util/footer.php";
?>