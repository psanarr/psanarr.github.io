function validarFormPagos() {
    const nombre = document.getElementById("nombre").value;
    const apellidos = document.getElementById("apellidos").value;
    const email = document.getElementById("email").value;
    const telefono = document.getElementById("telefono").value;
    const radios = document.getElementsByName('tipo_entrada');

    let errores = [];

    let expresion_regular_nombre = /[^a-zA-Z\s]/;

    if (nombre === "") {
        errores.push("Por favor, ingrese su nombre.")
    } else if (expresion_regular_nombre.test(nombre)) {
        errores.push("Por favor, introduce un nombre válido.")
    }

    if (apellidos === "") {
        errores.push("Por favor, ingrese su/s apellido/s.")
    } else if (expresion_regular_nombre.test(apellidos)) {
        errores.push("Por favor, introduce un apellido válido.")
    }

    let expresion_regular_email = /^[a-zA-Z0-9.-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (email === "") {
        errores.push("Por favor, introduce su correo electrónico");
    } else if (!expresion_regular_email.test(email)) {
        errores.push("Por favor, introduce una dirección de correo válida.");
    }

    let expresion_regular_telefono = /^\d{9}$/;

    if (telefono === "") {
        errores.push("Por favor, introduce su teléfono.")
    } else if (!expresion_regular_telefono.test(telefono)) {
        errores.push("Por favor, introduce un teléfono válido.")
    }

    let opcionSeleccionada = false;
    for (let i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            opcionSeleccionada = true;
            break;
        }
    }

    if (!opcionSeleccionada) {
        errores.push("Por favor, seleccione un método de pago.")
    }

    if (errores.length > 0) {
        mostrarErrores(errores);
        return false;
    }
    return true;
}

function mostrarErrores(errores) {
    let divErrores = document.getElementById("erroresPagos");
    divErrores.innerHTML="";

    let ul = document.createElement("ul");

    divErrores.style.display="block";

    errores.forEach(function(error) {
        
        let li = document.createElement("li");
        li.textContent = error;

        ul.appendChild(li);

    });

    divErrores.appendChild(ul);
}