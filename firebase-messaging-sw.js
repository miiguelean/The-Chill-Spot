// Importa los scripts de Firebase para la mensajería
importScripts('https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/9.23.0/firebase-messaging.js');

// Configura Firebase en el Service Worker
const firebaseConfig = {
  apiKey: "AIzaSyCLATOoJaHm1ik6fCWHJYAkPgIhMQ5B5O4",
  authDomain: "the-chill-spot-b94ae.firebaseapp.com",
  projectId: "the-chill-spot-b94ae",
  storageBucket: "the-chill-spot-b94ae.firebasestorage.app",
  messagingSenderId: "519997067329",
  appId: "1:519997067329:web:023cffe155db50c797f6c0",
  measurementId: "G-NS2XWVYFF2"
};

// Inicializa Firebase
firebase.initializeApp(firebaseConfig);

// Obtén la instancia de Firebase Messaging
const messaging = firebase.messaging();

// Maneja los mensajes push en segundo plano (cuando la app no está activa)
messaging.onBackgroundMessage(function(payload) {
  console.log('Recibido mensaje en segundo plano:', payload);

  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: payload.notification.icon,
    badge: payload.notification.badge
  };

  // Muestra la notificación
  self.registration.showNotification(notificationTitle, notificationOptions);
});
