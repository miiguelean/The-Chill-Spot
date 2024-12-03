importScripts("https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/11.0.2/firebase-messaging.js");

// Configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCLATOoJaHm1ik6fCWHJYAkPgIhMQ5B5O4",
  authDomain: "the-chill-spot-b94ae.firebaseapp.com",
  projectId: "the-chill-spot-b94ae",
  storageBucket: "the-chill-spot-b94ae.appspot.com", // Corregido el dominio para el bucket de almacenamiento
  messagingSenderId: "519997067329",
  appId: "1:519997067329:web:023cffe155db50c797f6c0",
  measurementId: "G-NS2XWVYFF2",
};

// Inicializar Firebase en el Service Worker
firebase.initializeApp(firebaseConfig);

// Inicializar Firebase Messaging
const messaging = firebase.messaging();

// Manejo de mensajes en segundo plano
messaging.onBackgroundMessage((payload) => {
  console.log("[Service Worker] Mensaje recibido en segundo plano:", payload);

  // Configuración de la notificación
  const notificationTitle = payload.notification?.title;
  const notificationOptions = {
    body: payload.notification?.body,
    icon: payload.notification?.icon,
  };

  // Mostrar la notificación
  self.registration.showNotification(notificationTitle, notificationOptions);
});