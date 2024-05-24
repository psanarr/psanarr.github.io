'use strict'

const grande = document.querySelector('.grande')
const puntos = document.querySelectorAll('.punto')

// Recorrer TODOS los puntos
puntos.forEach((cadaPunto, i) => {
    // Asignamos un CLICK a cadaPunto
    cadaPunto.addEventListener('click', () => {
        // Guardar la posición de ese PUNTO
        let posicion = i
        // Calculando el espacio que debe DESPLAZARSE el GRANDE
        let operacion = posicion * -25

        // MOVEMOS el grande
        grande.style.transform = `translateX(${operacion}%)`

        // Recorremos TODOS los puntos
        puntos.forEach((cadaPunto, i) => {
            // Quitamos la clase ACTIVO a TODOS los puntos
            cadaPunto.classList.remove('activo')
        })
        // Añadir la clase activo en el punto que hemos hecho CLICK
        cadaPunto.classList.add('activo')
    })
})
