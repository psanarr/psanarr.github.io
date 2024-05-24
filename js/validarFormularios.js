function validarFormReu() {
    const fechaIni = document.getElementById("fecha_inicioReu").value;
    const fechaFin = document.getElementById("fecha_finReu").value;

    let errores = [];

    if (fechaIni === "") {
        errores.push("Por favor, introduzca una fecha de inicio.");
    }

    if (fechaFin === "") {
        errores.push("Por favor, introduzca una fecha de fin.");
    }

    if (errores.length > 0) {
        mostrarErrores('erroresReu', errores);
        return false;
    }
    return true;
}

function validarFormOrd() {
    const fechaIni = document.getElementById("fecha_inicioOrd").value;
    const fechaFin = document.getElementById("fecha_finOrd").value;
    const opcion = document.getElementById("tipoOrd").value;

    let errores = [];

    if (fechaIni === "") {
        errores.push("Por favor, introduzca una fecha de inicio.");
    }

    if (fechaFin === "") {
        errores.push("Por favor, introduzca una fecha de fin.");
    }

    if (opcion === "0") {
        errores.push("Por favor, seleccione un tipo de reserva.");
    }

    if (errores.length > 0) {
        mostrarErrores('erroresOrd', errores);
        return false;
    } else {
        // Redireccionar si no hay errores
        window.location.href = "Pagos.html"; // Cambiar por la ruta deseada
        return true;
    }
}

function validarFormHab() {
    const fechaIni = document.getElementById("fecha_inicioHab").value;
    const fechaFin = document.getElementById("fecha_finHab").value;
    

    let errores = [];

    if (fechaIni === "") {
        errores.push("Por favor, introduzca una fecha de inicio.");
    }

    if (fechaFin === "") {
        errores.push("Por favor, introduzca una fecha de fin.");
    }

    if (errores.length > 0) {
        mostrarErrores('erroresHab', errores);
        return false;
    }
    return true;
}

function validarFormCama() {
    const fechaIni = document.getElementById("fecha_inicioCama").value;
    const fechaFin = document.getElementById("fecha_finCama").value;
    const opcion = document.getElementById("selector").value;

    let errores = [];

    if (fechaIni === "") {
        errores.push("Por favor, introduzca una fecha de inicio.");
    }

    if (fechaFin === "") {
        errores.push("Por favor, introduzca una fecha de fin.");
    }

    if (opcion === "0") {
        errores.push("Por favor, seleccione un tipo de reserva.");
    }

    if (errores.length > 0) {
        mostrarErrores('erroresCama', errores);
        return false;
    }
    return true;
}

function mostrarErrores(id, errores) {
    let divErrores = document.getElementById(id);
    divErrores.innerHTML = "";

    let ul = document.createElement("ul");

    divErrores.style.display = "block";

    errores.forEach(function(error) {
        let li = document.createElement("li");
        li.textContent = error;
        ul.appendChild(li);
    });

    divErrores.appendChild(ul);
}