<?php
session_start();
require_once 'db.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $username = trim($_POST['username']);
    $password = trim($_POST['password']);

    try {
        $stmt = $pdo->prepare('SELECT * FROM users WHERE username = :username');
        $stmt->execute(['username' => $username]);
        $user = $stmt->fetch(PDO::FETCH_ASSOC);

        if (!$user) {
            echo "<script>alert('Usuario no encontrado');</script>";
        } elseif ($password === $user['password']) {
            $_SESSION['user_id'] = $user['id'];
            header('Location: inicio.php');
            exit();
        } else {
            echo "<script>alert('Contraseña incorrecta');</script>";
        }
    } catch (Exception $e) {
        die('Error: ' . $e->getMessage());
    }
} else {
    header('Location: index.php');
    exit();
}
