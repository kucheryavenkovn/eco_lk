<?php
$surname = addslashes($_POST['surname']);
#echo $surname;
$name = addslashes($_POST['name']);
$login = addslashes($_POST['login']);
$pwd=$_POST['passwd'];
if ( !$login || !$pwd ||!$name)
{echo "<p>Вы не задали все параметры.</p>";exit;}
if($_POST['passwd2'] <> $pwd){
echo "<p>Пароли не совпадают.</p>";exit;}
$pwd=SHA1(MD5($pwd));
#echo $query;
$send= "{\\\"Description\\\": \\\"".$name." ".$surname."\\\", \\\"Пароль\\\":\\\"".$pwd."\\\",\\\"Логин\\\":\\\"".$login."\\\"}";
print_r('<script type="text/javascript">
var xhttp = new XMLHttpRequest();
xhttp.open("Post","http://127.0.0.1/1ib/odata/standard.odata/Catalog_Контрагенты?$format=json");
xhttp.setRequestHeader("Content-type", "text/json");
xhttp.send("'.$send.'");
</script>');?
echo "<html><head><meta http-equiv='refresh' content='5; url=index.php'/></head><body> <p> Новый пользователь добавлен в базу данных</p> </body></html>";
?>
