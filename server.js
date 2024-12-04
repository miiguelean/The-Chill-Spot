// server.js

const express = require('express');
const webPush = require('web-push');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json()); // Permite parsear cuerpos JSON

// Configuración de VAPID
const vapidKeys = {
  publicKey: 'BNMMP6oIPW8h_DwovXqjWhw3l8dVNBG41fkbImNI5I7-Ekl0sWAV1DNr9PlxBFiHKmON7u_FCsrshhKcrUCARcI',  // Cambia esto por tu clave pública generada
  privateKey: 'cDrkmzC0aB6e2kYtKwhiKuI_AwJ2n7B20Fv7O6rKokA'   // Cambia esto por tu clave privada generada
};

// Configura VAPID para web-push
webPush.setVapidDetails('mailto:miiguelean@gmail.com', vapidKeys.publicKey, vapidKeys.privateKey);

// Almacenar suscripciones (deberías usar una base de datos en una aplicación real)
let subscriptions = [];

// Endpoint para manejar suscripciones
app.post('/subscribe', (req, res) => {
  const subscription = req.body;          // Obtener la suscripción del cuerpo de la solicitud
  subscriptions.push(subscription);       // Almacenar la suscripción
  console.log('Nueva suscripción:', subscription);
  res.status(201).json({});                // Responder con un estado 201
});

// Endpoint para enviar notificaciones
app.post('/sendNotification', (req, res) => {
  const notificationPayload = {
    notification: {
      title: 'Notificación de ejemplo',
      body: '¡Tienes una nueva notificación!',
      icon: 'img/icon-192x192.png',       // Ruta al icono de la notificación
    },
  };

  const promises = subscriptions.map(subscription =>
    webPush.sendNotification(subscription, JSON.stringify(notificationPayload))
  );

  Promise.all(promises)
    .then(() => res.sendStatus(200))       // Responder con estado 200 si todo fue bien
    .catch(err => {
      console.error('Error al enviar notificación:', err);
      res.sendStatus(500);                  // Responder con estado 500 en caso de error
    });
});

// Iniciar el servidor
const PORT = 3000; // Cambia esto al puerto que desees
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});