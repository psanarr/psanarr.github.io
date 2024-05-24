document.getElementById('fecha_inicioReu').addEventListener('change', calcularPrecioHab);
document.getElementById('fecha_finReu').addEventListener('change', calcularPrecioHab);

function calcularPrecioHab() {
    var fechaInicio = new Date(document.getElementById('fecha_inicioReu').value);
    var fechaFin = new Date(document.getElementById('fecha_finReu').value);

    // Calcular la diferencia en milisegundos
    var diferencia = fechaFin - fechaInicio;

    if (diferencia < 0) {
        document.getElementById('totalPrecio').innerText = 0;
        return;
    }

    // Convertir la diferencia en días
    var dias = diferencia / (1000 * 60 * 60 * 24);

    // Calcular el precio
    var precio = dias * 20;

    // Actualizar el total en el calendario
    if (!isNaN(precio))  {
    document.getElementById('totalPrecio').innerText = precio;
  }
}

