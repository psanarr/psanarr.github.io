const botonResetReu = document.getElementById("botonResetReu");
let precioReu = document.getElementById("totalPrecio");
botonResetReu.addEventListener("click", function () {
    precioReu.textContent = 0;
    let divErrores = document.getElementById("erroresReu");
    divErrores.style.display = "none";
});

const botonResetOrd = document.getElementById("botonResetOrd");
let precioOrd = document.getElementById("totalPrecioOrd");
botonResetOrd.addEventListener("click", function () {
    precioOrd.textContent = 0;
    let divErrores = document.getElementById("erroresOrd");
    divErrores.style.display = "none";
});