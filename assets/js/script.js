

function mostrarFecha() {

    var fecha = new Date();

    // Formatear la fecha
    const opcionesFecha = { year: 'numeric', month: 'long', day: 'numeric' };
    const fechaFormateada = fecha.toLocaleDateString('es-ES', opcionesFecha);

    // escribir la fecha en el div    
    document.getElementById('fecha').textContent = fechaFormateada;
}

mostrarFecha();

function mostrarHora() {
    const hora = new Date();

    // Formatear la hora
    const opcionesHora = { hour: 'numeric', minute: 'numeric', second: 'numeric' };
    const horaFormateada = hora.toLocaleTimeString('es-ES', opcionesHora);

    // escribir la hora en el div 
    document.getElementById('hora').textContent = horaFormateada;
}

mostrarHora();

// Actualizar la hora cada segundo
setInterval(mostrarHora, 1000);
// Actualizar la fecha cada día (24 horas = 86400000 milisegundos)
setInterval(mostrarFecha, 86400000);