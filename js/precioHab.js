document.getElementById('fecha_inicioHab').addEventListener('change', calcularPrecioHab);
document.getElementById('fecha_finHab').addEventListener('change', calcularPrecioHab);

function calcularPrecioHab() {
  const fechaInicio = new Date(document.getElementById('fecha_inicioHab').value);
  const fechaFin = new Date(document.getElementById('fecha_finHab').value);

  if (isNaN(fechaInicio) || isNaN(fechaFin)) {
    document.getElementById('totalPrecio').innerText = 0;
    return;
  }

  // Calcular la diferencia en milisegundos
  let diferencia = fechaFin - fechaInicio;

  if (diferencia < 0) {
    document.getElementById('totalPrecio').innerText = 0;
    return;
  }

  // Convertir la diferencia en días
  let dias = diferencia / (1000 * 60 * 60 * 24);

  // Calcular el precio
  let precio = dias * 30;

  // Actualizar el total en el calendario
  document.getElementById('totalPrecio').innerText = precio;
}

