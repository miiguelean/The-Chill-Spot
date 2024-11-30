<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login</title>
    <link rel="stylesheet" href="css/estilos-login.css">
</head>
<body>
    <div class="login-container">
        <form action="login.php" method="POST" class="login-form">
            <h2 class="login-title">Iniciar Sesión</h2>
            <div class="input-group">
                <input type="text" name="username" id="username" required>
                <label for="username">Usuario</label>
            </div>
            <div class="input-group">
                <input type="password" name="password" id="password" required>
                <label for="password">Contraseña</label>
            </div>
            <button type="submit" class="login-btn">Entrar</button>
        </form>
    </div>
</body>
</html>
