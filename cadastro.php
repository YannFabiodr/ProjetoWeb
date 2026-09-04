<?php

require_once "conexao.php";

if ($_SERVER["REQUEST_METHOD"] === "POST" 
    && isset($_POST["nome"]) 
    && isset($_POST["email"])
    && isset($_POST["senha"])
    && $_POST["nome"] != ""
    && $_POST["email"] != ""
    && $_POST["senha"] != "" ) {

    $nome = $_POST["nome"];
    $email = $_POST["email"];
    $senha = $_POST["senha"];

    // Criptografa a senha
    $senhaHash = password_hash($senha, PASSWORD_DEFAULT);

    $sql = "INSERT INTO usuarios (nome, email, senha)
            VALUES (:nome, :email, :senha)";

    try {

        $stmt = $pdo->prepare($sql);

        $stmt->execute([
            ":nome" => $nome,
            ":email" => $email,
            ":senha" => $senhaHash
        ]);

        echo "Usuário cadastrado com sucesso!";

    } catch (PDOException $e) {

        echo "Erro ao cadastrar usuário.";

    }
}

?>

