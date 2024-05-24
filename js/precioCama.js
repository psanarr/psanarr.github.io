document.getElementById('fecha_inicioCama').addEventListener('change', calcularPrecioCama);
document.getElementById('fecha_finCama').addEventListener('change', calcularPrecioCama);
document.getElementById('selector').addEventListener('change', calcularPrecioCama);

function calcularPrecioCama() {
  const fechaInicioC = new Date(document.getElementById('fecha_inicioCama').value);
  const fechaFinC = new Date(document.getElementById('fecha_finCama').value);
  const selector = document.getElementById('selector').value;

  if (isNaN(fechaInicioC) || isNaN(fechaFinC)) {
    document.getElementById('totalPrecioC').innerText = 0;
    return;
  }

  // Calcular la diferencia en milisegundos
  let diferenciaC = fechaFinC - fechaInicioC;

  if (diferenciaC < 0) {
    document.getElementById('totalPrecioC').innerText = 0;
    return;
  }

  // Convertir la diferencia en días
  let diasC = diferenciaC / (1000 * 60 * 60 * 24);

  // Calcular el precio
  let precioC = diasC * 10 * selector;

  // Actualizar el total en el calendario
  document.getElementById('totalPrecioC').innerText = precioC;
}

