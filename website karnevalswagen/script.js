// Ziel-Datum für den Countdown
const karnevalDate = new Date("February 12, 2025 00:00:00").getTime();

// Element auswählen
const countdown = document.getElementById("countdown");

function updateCountdown() {
    const now = new Date().getTime(); // Aktuelle Zeit
    const distance = karnevalDate - now; // Differenz zum Ziel-Datum

    // Berechnung von Tagen, Stunden, Minuten, Sekunden
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Countdown-Text mit Emojis und Formatierung aktualisieren
    countdown.innerHTML = `🎉 Noch <span>${days}</span> Tage 
        <span>${hours}</span> Stunden 
        <span>${minutes}</span> Minuten 
        <span>${seconds}</span> Sekunden 🎭`;

    // Wenn der Countdown vorbei ist
    if (distance < 0) {
        countdown.innerHTML = "🎊 Karneval ist da! 🎉";
        clearInterval(countdownInterval); // Stoppt das Intervall
    }
}

// Countdown jede Sekunde aktualisieren
const countdownInterval = setInterval(updateCountdown, 1000);

// Starte den Countdown direkt beim Laden
updateCountdown();
