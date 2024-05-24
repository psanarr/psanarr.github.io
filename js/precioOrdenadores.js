document.getElementById('fecha_inicioOrd').addEventListener('change', calcularPrecioCama);
document.getElementById('fecha_finOrd').addEventListener('change', calcularPrecioCama);
document.getElementById('tipoOrd').addEventListener('change', calcularPrecioCama);

function calcularPrecioCama() {
    var fechaInicio = new Date(document.getElementById('fecha_inicioOrd').value);
    var fechaFin = new Date(document.getElementById('fecha_finOrd').value);
    var selector = document.getElementById('tipoOrd').value;

    // Calcular la diferencia en milisegundos
    var diferenciaC = fechaFin - fechaInicio;
    
    if (diferenciaC < 0) {
        document.getElementById('totalPrecioOrd').innerText = 0;
        return;
      }

    // Convertir la diferencia en días
    var diasC = diferenciaC / (1000 * 60 * 60 * 24);

    // Calcular el precio
    var precioC = diasC * 10 * selector;

    // Actualizar el total en el calendario
    if (!isNaN(precioC)) {
      document.getElementById('totalPrecioOrd').innerText = precioC;
    }
}

