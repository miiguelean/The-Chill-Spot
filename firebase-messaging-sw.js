// Importa los scripts de Firebase
importScripts('https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/9.23.0/firebase-messaging.js');

// Configura Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCLATOoJaHm1ik6fCWHJYAkPgIhMQ5B5O4",
  authDomain: "the-chill-spot-b94ae.firebaseapp.com",
  projectId: "the-chill-spot-b94ae",
  storageBucket: "the-chill-spot-b94ae.firebasestorage.app",
  messagingSenderId: "519997067329",
  appId: "1:519997067329:web:023cffe155db50c797f6c0",
  measurementId: "G-NS2XWVYFF2"
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

// Manejo de la notificación en segundo plano
messaging.onBackgroundMessage((payload) => {
  console.log('Recibida notificación en segundo plano:', payload);

  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: payload.notification.icon,
    click_action: payload.notification.click_action, // Abre la URL en caso de hacer clic
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});

// Manejando el evento de clic en la notificación
self.addEventListener('notificationclick', (event) => {
  console.log('Notificación clickeada:', event.notification);
  event.notification.close();
  // Abre la URL especificada en el `click_action`
  event.waitUntil(
    clients.openWindow(event.notification.click_action)
  );
});
