function getDailyOffer() {
    const daysOfWeek = ['domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado'];
    const today = new Date().getDay();
    
    const offers = {
        0: "Domingo especial: ¡2x1 en Smooth Premium Beer!",
        1: "Lunes refrescante: ¡20% de descuento en Tropical Sunset!",
        2: "Martes de hamburguesas: ¡Big Cheese Burger a solo $8!",
        3: "Miércoles de pizzas: ¡Pepperoni Supreme a $18!",
        4: "Jueves de cocteles: ¡Berry Bliss Martini a solo $12!",
        5: "Viernes festivo: ¡Albahaca Twist con descuento del 10%!",
        6: "Sábado de relax: ¡Ocean Breeze a mitad de precio!"
    };

    return offers[today];
}

function checkConnection() {
    const offerDiv = document.createElement('div');
    offerDiv.id = 'daily-offer';
    document.body.insertBefore(offerDiv, document.body.firstChild);

    if (navigator.onLine) {
        offerDiv.innerHTML = `<p><strong>Oferta del día:</strong> ${getDailyOffer()}</p>`;
        offerDiv.style.display = 'block';
    } else {
        offerDiv.style.display = 'none';
    }
}

checkConnection();

window.addEventListener('online', checkConnection);
window.addEventListener('offline', checkConnection);
