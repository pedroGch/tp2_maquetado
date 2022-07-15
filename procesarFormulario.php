<?php

if (isset($_POST["nombre"]) and $_POST["nombre"] != " "  and isset($_POST["email"]) and isset($_POST["mensaje"])){
  header("Location: gracias.html");
}
?>