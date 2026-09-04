<?php

session_start();

require_once "conexao.php";

$email = $_POST["loginInput"];
$senha = $_POST["senha"];

if (empty($email) || empty($senha)) {
    die("Preencha todos os campos.");
}

if($_SERVER["REQUEST_METHOD"] === "POST" 
    && isset($_POST["nome"]) 
    && isset($_POST["email"])
    && isset($_POST["senha"])
    && $_POST["nome"] != ""
    && $_POST["email"] != ""
    && $_POST["senha"] != "" ){

$sql = "SELECT * FROM usuarios WHERE email = :email";

$stmt = $pdo->prepare($sql);

$stmt->execute([
    ":email" => $email
]);

$usuario = $stmt->fetch();

if ($usuario && password_verify($senha, $usuario["senha"])) {

    $_SESSION["usuario_id"] = $usuario["id"];
    $_SESSION["usuario_nome"] = $usuario["nome"];
    $_SESSION["usuario_email"] = $usuario["email"];

    header("Location: painel.php");
    exit;

} else {

    echo "E-mail ou senha incorretos.";

}
}

?>