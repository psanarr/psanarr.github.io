// Formulario
const FORM = document.querySelector("#formulario-contacto");

// Validar telefono
function validarTelefono(telefono) {
  let soloNumeros = /^\d+$/;
  if (telefono.match(soloNumeros)) {
    return true;
  } else {
    alert("Ingresa un teléfono válido");
    return false;
  }
}

// Validar Nombre
function validarNombre(nombre) {
  let soloCaracteres = /^[A-Za-z]+$/;
  if (nombre.match(soloCaracteres)) {
    return true;
  } else {
    alert("Ingresa un nombre válido");
    return false;
  }
}

// Validar Email
function validarEmail(email) {
  let filtroEmail =
    /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

  if (filtroEmail.test(email)) {
    return true;
  } else {
    alert("Ingresa un email válido");
    return false;
  }
}

// Añadir funcionalidad al formulario despues de evento "ENVIAR"
FORM.addEventListener("submit", function (event) {
  // Parar la ejecución normal del formulario
  event.preventDefault();

  // Datos del formulario
  let nombre = document.getElementById("nombre").value;
  let email = document.getElementById("email").value;
  let telefono = document.getElementById("telefono").value;
  let mensaje = document.getElementById("mensaje").value;

  // Validar sensibilidad de la informacion
  let esNombreOK = validarNombre(nombre);
  let esEmailOK = validarEmail(email);
  let esTelefonoOK = validarTelefono(telefono);

  if (esEmailOK && esNombreOK && esTelefonoOK) {
    alert("Le contáctaremos en breve, gracias!");
    FORM.reset();
  }
});
