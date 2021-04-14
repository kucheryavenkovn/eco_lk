
<test>
<?php
$title="Главная страница";
include "util/header.php"
?>
<h1>Добро пожаловать<h1>

<div>
    <form action="http://127.0.0.1/1ib/odata/standard.odata/Catalog_%D0%9A%D0%BE%D0%BD%D1%82%D1%80%D0%B0%D0%B3%D0%B5%D0%BD%D1%82%D1%8B?$format=json" method="get">
        <input type="submit" value="Войти"/>
<br/>
<?php 
// $name=123;
// $pwd=123;
// $login=321;
// $surname=526;
// $send= "{\\\"Description\\\": \\\"".$name." ".$surname."\\\", \\\"Пароль\\\":\\\"".$pwd."\\\", \\\"Логин\\\":\\\"".$login."\\\"}";
// print_r('<script type="text/javascript">
// var xhttp = new XMLHttpRequest();
// xhttp.open("Post","http://127.0.0.1/1ib/odata/standard.odata/Catalog_Контрагенты?$format=json");
// xhttp.setRequestHeader("Content-type", "text/json");
// xhttp.send("'.$send.'");
// </script>');?>

</div>
<?php include "util/footer.php"; ?>
