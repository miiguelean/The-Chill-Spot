// Cargar Firebase y el SDK de Messaging en el Service Worker
importScripts('https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/9.23.0/firebase-messaging.js');

// Configuración de Firebase (debe coincidir con la configuración en el main.js)
const firebaseConfig = {
  apiKey: "AIzaSyCLATOoJaHm1ik6fCWHJYAkPgIhMQ5B5O4",
  authDomain: "the-chill-spot-b94ae.firebaseapp.com",
  projectId: "the-chill-spot-b94ae",
  storageBucket: "the-chill-spot-b94ae.firebasestorage.app",
  messagingSenderId: "519997067329",
  appId: "1:519997067329:web:023cffe155db50c797f6c0",
  measurementId: "G-NS2XWVYFF2"
};

// Inicializar Firebase en el Service Worker
firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

// Manejar notificaciones en segundo plano
messaging.onBackgroundMessage((payload) => {
  console.log('Mensaje recibido en segundo plano:', payload);

  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: payload.notification.icon,
    click_action: payload.notification.click_action,
  };

  // Mostrar la notificación
  self.registration.showNotification(notificationTitle, notificationOptions);
});

// Manejo del clic en la notificación
self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  event.waitUntil(clients.openWindow(event.notification.click_action));
});
