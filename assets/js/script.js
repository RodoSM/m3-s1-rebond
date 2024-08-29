

function mostrarFecha() {

    var fecha = new Date();

    // Formatear la fecha
    const opcionesFecha = { year: 'numeric', month: 'long', day: 'numeric' };
    const fechaFormateada = fecha.toLocaleDateString('es-ES', opcionesFecha);

    document.getElementById('fecha').innerHTML = fechaFormateada;
}

mostrarFecha();

function mostrarHora() {
    var hora = new Date();

    // Formatear la hora
    const opcionesHora = { hour: 'numeric', minute: 'numeric', second: 'numeric' };
    const horaFormateada = hora.toLocaleTimeString('es-ES', opcionesHora);

    document.getElementById('hora').innerHTML = horaFormateada;
}

mostrarHora();

// Actualizar la hora cada segundo
setInterval(mostrarHora, 1000);
// Actualizar la fecha cada día (24 horas = 86400000 milisegundos)
setInterval(mostrarFecha, 86400000);


function numeroVuelo() {

    //agregamos math.floor para que el valor sea un numero entero, si solo lo dejamos como "var numeroAzar = (Math.random() * (2000) + 1; daria un numero entre 1 y 2000 pero con valores decimales
    var numeroAzar = Math.floor(Math.random() * (2000)) + 1;

    document.getElementById("vuelo").innerHTML = numeroAzar;
}

numeroVuelo()

function numeroTerminal() {

    var numeroAzarDos = Math.floor(Math.random() * (10)) + 1;

    document.getElementById("terminal").innerHTML = numeroAzarDos;
}

numeroTerminal()

// alerta y boton de cerrado

window.onload = function() {
    document.getElementById('alerta').style.display = 'block';
}

document.getElementById('cerrarAlerta').onclick = function() {
    document.getElementById('alerta').style.display = 'none';
}
