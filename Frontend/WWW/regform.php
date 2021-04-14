<?php
$title="Регистрация	";
include "util/header.php";
?>
<h1>Регистрация профиля<h1>
<form action= "reg.php" method="post">
<table><tr><td>
<label for="surname"> ФSамилия</label></td><td>
<input name="surname" type="text" maxlength="50" size="30" required />
</td></tr><tr><td>
<label for="name"> Имя</label></td><td>
<input name="name" type="text" maxlength="50" size="30" required />
</td></tr><tr><td>
<label for="login"> Логин</label></td><td>
<input name="login" type="text" maxlength="50" size="30" required />
</td></tr><tr><td>
<label for="passwd"> Пароль</label></td><td>
<input name="passwd" type="password" maxlength="50" size="30" required />
</td></tr><tr><td>
<label for="passwd2"> Пароль</label></td><td>
<input name="passwd2" type="password" maxlength="50" size="30" required />
</td></tr><tr><td>
<input type="submit" value="Зарегестрировать" /></td><td>
<input type="reset" value="Сбросить" /></td></tr>
</table>
<?php 

include "util/footer.php";
?>