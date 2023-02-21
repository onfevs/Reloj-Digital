function updateClock() {
    // Obtener la hora actual en Colombia
    let currentTime = new Date(new Date().toLocaleString("en-US", { timeZone: "America/Bogota" }));

    let currentHours = currentTime.getHours();
    let currentMinutes = currentTime.getMinutes();
    let currentSeconds = currentTime.getSeconds();

    let hourDigits = document.querySelectorAll(".digit")[0];
    let minuteDigits = document.querySelectorAll(".digit")[1];
    let secondDigits = document.querySelectorAll(".digit")[2];

    hourDigits.textContent = padNumber(currentHours);
    minuteDigits.textContent = padNumber(currentMinutes);
    secondDigits.textContent = padNumber(currentSeconds);

    let secondColon = document.querySelectorAll(".colon")[1];
    let secondNeon = document.querySelectorAll(".digit")[2];
    if (currentSeconds % 2 === 0) {
        secondColon.classList.remove("neon");
        secondNeon.classList.remove("neon");
    } else {
        secondColon.classList.add("neon");
        secondNeon.classList.add("neon");
    }
}

function padNumber(number) {
    return number < 10 ? "0" + number : number;
}


// Actualizar el reloj cada segundo
setInterval(updateClock, 1000);

