importScripts('https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/11.0.2/firebase-messaging.js');

// Configuración de Firebase
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

messaging.onBackgroundMessage((payload) => {
    console.log('Notificación recibida en segundo plano:', payload);
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
        icon: payload.notification.icon
    };

    self.registration.showNotification(notificationTitle, notificationOptions);
});
