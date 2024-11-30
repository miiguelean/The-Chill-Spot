<?php
session_start();
require_once 'db.php';

// Verificar si el usuario está autenticado
$username = isset($_SESSION['user_id']) ? obtenerUsername($pdo, $_SESSION['user_id']) : null;

function obtenerUsername($pdo, $userId) {
    $stmt = $pdo->prepare('SELECT username FROM users WHERE id = :id');
    $stmt->execute(['id' => $userId]);
    $user = $stmt->fetch(PDO::FETCH_ASSOC);
    return $user ? $user['username'] : null;
}
?>
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta
      name="viewport"
      content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"
    />
    <link rel="icon" href="img/icon.ico" type="image/x-icon">
    <link
      href="https://fonts.googleapis.com/css?family=Open+Sans:400,300,600,300italic,700"
      rel="stylesheet"
      type="text/css"
    />
    <link rel="stylesheet" href="css/estilos.css" />
    <link rel="manifest" href="manifest.json" />
    <title>The Chill Spot</title>
  </head>
  <body>
    <header>
      <div class="contenedor">
        <nav class="menu">
          <a href="#" id="btn-acerca-de">Acerca de</a>
          <a href="#" id="btn-menu">Menú</a>
          <a href="#" id="btn-galeria">Galería</a>
          <a href="#" id="btn-ubicacion">Ubicación</a>
          <?php if ($username): ?>
            <a href="perfil.php" class="nav-username">Bienvenid@, <?= htmlspecialchars($username); ?></a>
          <?php else: ?>
            <a href="index.php" class="login-link">Iniciar sesión</a>
          <?php endif; ?>
        </nav>

        <div class="textos">
          <h1 class="nombre">The <span>Chill</span> Spot</h1>
          <h3>Un lugar para relajarte, disfrutar y saborear lo mejor.</h3>
        </div>
      </div>
    </header>

    <section class="main">
      <section class="acerca-de" id="acerca-de">
        <div class="contenedor">
          <div class="foto">
            <img src="img/acerca-de.jpg" alt="" />
          </div>
          <article>
            <h3>Acerca de</h3>
            <p>
              En The Chill Spot, ofrecemos una experiencia gastronómica única
              con una fusión de sabores que deleitarán tus sentidos. Nuestro
              menú cuenta con una selección de platillos clásicos reinventados,
              desde crujientes hamburguesas hasta pizzas artesanales.
            </p>

            <p>
              Además, podrás disfrutar de una refrescante variedad de cócteles y
              bebidas que te transportarán a un ambiente relajado y moderno.
              Nuestro compromiso es ofrecerte el mejor servicio y una
              experiencia inolvidable en cada visita. Ya sea para disfrutar con
              amigos o relajarte después de un largo día, The Chill Spot es el
              lugar perfecto para ti.
            </p>
          </article>
        </div>
      </section>

      <section class="menu">
        <div class="contenedor">
          <h3 class="titulo" id="platillos">Menú</h3>
          <div class="contenedor-menu">
            <div class="contenedor-menu2">
              <article>
                <p class="categoria">De Comer</p>
                <div class="platillo">
                  <p class="nombre">Pollo Crunch Deluxe</p>
                  <p class="precio">$15</p>
                  <p class="descripcion">
                    Tierna pechuga de pollo empanizada, servida con papas fritas
                    doradas y una fresca ensalada mixta.
                  </p>
                </div>
                <div class="platillo">
                  <p class="nombre">Big Cheese Burger</p>
                  <p class="precio">$10</p>
                  <p class="descripcion">
                    Deliciosa carne de res a la parrilla con queso derretido,
                    lechuga, tomate y cebolla fresca.
                  </p>
                </div>
                <div class="platillo">
                  <p class="nombre">Pepperoni Supreme</p>
                  <p class="precio">$20</p>
                  <p class="descripcion">
                    Crujiente base con pepperoni, pimientos frescos y
                    champiñones sobre una salsa de tomate casera.
                  </p>
                </div>
                <div class="platillo">
                  <p class="nombre">Albahaca Twist</p>
                  <p class="precio">$35</p>
                  <p class="descripcion">
                    Exquisita pizza de pepperoni, cubierta con hojas frescas de
                    albahaca y un toque de queso parmesano.
                  </p>
                </div>
              </article>

              <article>
                <p class="categoria">De Tomar</p>
                <div class="platillo">
                  <p class="nombre">Tropical Sunset</p>
                  <p class="precio">$15</p>
                  <p class="descripcion">
                    Una vibrante mezcla de jugo de piña, ron y un toque de
                    naranja, perfecta para disfrutar un atardecer tropical.
                  </p>
                </div>
                <div class="platillo">
                  <p class="nombre">Berry Bliss Martini</p>
                  <p class="precio">$15</p>
                  <p class="descripcion">
                    Elegante martini con un delicioso licor de frutos rojos y un
                    toque de cítricos para un balance perfecto.
                  </p>
                </div>
                <div class="platillo">
                  <p class="nombre">Ocean Breeze</p>
                  <p class="precio">$15</p>
                  <p class="descripcion">
                    Refrescante cóctel de vodka, lima y menta, con una brisa de
                    curaçao azul evocando el mar en cada sorbo.
                  </p>
                </div>
                <div class="platillo">
                  <p class="nombre">Smooth Premium Beer</p>
                  <p class="precio">$15</p>
                  <p class="descripcion">
                    Una cerveza ligera y refrescante, con un suave toque maltoso
                    y un final limpio, perfecta para cualquier ocasión.
                  </p>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section class="galeria" id="galeria">
        <div class="foto">
          <img src="img/1.jpg" alt="" />
        </div>
        <div class="foto">
          <img src="img/2.jpg" alt="" />
        </div>
        <div class="foto">
          <img src="img/3.jpg" alt="" />
        </div>
        <div class="foto">
          <img src="img/4.jpg" alt="" />
        </div>
        <div class="foto">
          <img src="img/5.jpg" alt="" />
        </div>
        <div class="foto">
          <img src="img/6.jpg" alt="" />
        </div>
        <div class="foto">
          <img src="img/7.jpg" alt="" />
        </div>
        <div class="foto">
          <img src="img/8.jpg" alt="" />
        </div>
      </section>

      <section class="ubicacion" id="ubicacion">
        <div class="contenedor">
          <h3 class="titulo">Ubicación</h3>
          <div class="direccion">
            <p class="calle">2915 Primrose Lane<br />Anaheim, CA 92806</p>
            <p class="telefono">(503) 400-5479</p>
            <p class="correo">contacto@correo.com</p>
          </div>
          <div class="horarios" id="horarios">
            <h4>Horarios</h4>
            <p class="entre-semana">Lunes a Viernes<br />8:00am - 9:00pm</p>
            <p class="fin-semana">Sabados y Domingos<br />11:00am - 11:00pm</p>
          </div>
        </div>
      </section>

      <section class="mapa">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m21!1m12!1m3!1d3733.3836847970842!2d-103.39386822512469!3d20.653963595389975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m6!3e0!4m0!4m3!3m2!1d20.6544405!2d-103.391583!5e0!3m2!1ses!2smx!4v1460436070427"
          width="1600"
          height="552"
          frameborder="0"
          style="border: 0"
          allowfullscreen
        ></iframe>
      </section>
    </section>

    <footer>
      <div class="contenedor">
        <div class="copyright">
          <p>Copyright &copy; The Chill Spot</p>
        </div>
      </div>
    </footer>

    <script>
      if ("serviceWorker" in navigator) {
        navigator.serviceWorker.register("sw.js");
      }
    </script>
    <script src="js/jquery-1.12.3.min.js"></script>
    <script src="js/parallax.js"></script>
    <script src="js/efectos.js"></script>
    <script src="js/ofertas.js"></script>
  </body>
</html>
