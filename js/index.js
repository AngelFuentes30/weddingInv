function audioPlay(){
    var miAudio = document.getElementById('miAudio');
    miAudio.play();
}
// Fecha específica para el contador
var targetDate = new Date('2023-12-15T20:00:00Z');

function updateCountdown() {
    var currentDate = new Date();
    var timeDifference = targetDate - currentDate;

    // Cálculo de días, horas, minutos y segundos
    var days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    var hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
    // Añadir un 0 a la izquierda si el número es menor que 10
    if (days < 10) {
        days = `0${days}`;
    }
    if (hours < 10) {
        hours = `0${hours}`
    }
    if (minutes < 10) {
        minutes = `0${minutes}`
    }
    if (seconds < 10) {
        seconds = `0${seconds}`
    }
    // Actualización del contador
    if (timeDifference < 0) {
        document.getElementById('timerBack').textContent = 'ES HOY!';
    } else {
        document.getElementById('timerBack').textContent = `${days} : ${hours} : ${minutes} : ${seconds}`
        // console.log(`${days}:${hours}:${minutes}:${seconds}`);
    }
}

// Actualizar el contador cada segundo
setInterval(updateCountdown, 1000);

/* --------------------------- redireccionamientos -------------------------- */
function linkGPS1(){
    window.open('https://goo.gl/maps/pSK5zcoUe3xeXmNj6', '_blank');
}
function linkGPS2(){
    window.open('https://goo.gl/maps/6B2KDs9zL2C1hEqH8', '_blank');
}
function linkMRL(){
    window.open('https://mesaderegalos.liverpool.com.mx/milistaderegalos/51175828', '_blank');
}
function linkMRM(){
    window.open('https://www.mesaderegalos.lamarina.com.mx/mesa-de-regalos/evento#BODA-DE-ISIS-&-ROGELIO/eyJpZEV2ZW50byI6Ik1SLTAwMDAxNDE0IiwiZ3Vlc3QiOnRydWUsImlkQ2x1c3RlciI6MTk4MH0=', '_blank');
}
function linkWA(){
    window.open('https://api.whatsapp.com/send?phone=523123119665&text=Holaa!%20Confirmo%20mi%20asistencia%20a%20su%20boda,%20¡Será%20un%20placer%20acompañarlos!🤗', '_blank');
}
