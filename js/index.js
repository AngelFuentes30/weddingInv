function audioPlay(){
    var miAudio = document.getElementById('miAudio');
    miAudio.play();
}
// Fecha específica para el contador
var targetDate = new Date('2023-12-16T02:00:00Z');

function updateCountdown() {
    var currentDate = new Date();
    var timeDifference = targetDate - currentDate;

    if (timeDifference >= 0) {
        // Fecha futura: calcular el tiempo que falta
        var days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        var hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

        // Formato con ceros a la izquierda
        days = days < 10 ? `0${days}` : days;
        hours = hours < 10 ? `0${hours}` : hours;
        minutes = minutes < 10 ? `0${minutes}` : minutes;
        seconds = seconds < 10 ? `0${seconds}` : seconds;

        document.getElementById('timerBack').innerText = `${days} : ${hours} : ${minutes} : ${seconds}`;
    } else {
        // Fecha pasada: calcular cuánto tiempo ha transcurrido
        var pastDate = new Date(targetDate);
        var years = currentDate.getFullYear() - pastDate.getFullYear();
        var months = currentDate.getMonth() - pastDate.getMonth();
        var days = currentDate.getDate() - pastDate.getDate();

        if (days < 0) {
            months -= 1;
            var previousMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 0);
            days += previousMonth.getDate();
        }

        if (months < 0) {
            years -= 1;
            months += 12;
        }

        // Función para pluralizar
        function pluralize(value, singular, plural) {
            return value === 1 ? `${value} ${singular}` : `${value} ${plural}`;
        }

        document.getElementById('timerBack').innerText =
            `Han pasado\n` +
            `${pluralize(years, "año", "años")}\n` +
            `${pluralize(months, "mes", "meses")}\n` +
            `${pluralize(days, "día", "días")}`;
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
