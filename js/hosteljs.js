const darkModeToggle = document.getElementById('dark-mode-toggle');
const body = document.body;

darkModeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode-on');
    if (body.classList.contains('dark-mode-on')) {
        darkModeToggle.textContent = 'Cambiar a modo claro';
    } else {
        darkModeToggle.textContent = 'Cambiar a modo oscuro';
    }
});

/* Carrusel */

document.addEventListener('DOMContentLoaded', function() {
    const prevButton = document.querySelector('.prev-button');
    const nextButton = document.querySelector('.next-button');
    const carouselImages = document.querySelectorAll('.carousel-images img');

    let counter = 0;
    const totalImages = carouselImages.length;

    nextButton.addEventListener('click', () => {
        if (counter < totalImages - 1) {
            carouselImages[counter].style.opacity = 0;
            counter++;
            carouselImages[counter].style.opacity = 1;
        }
    });

    prevButton.addEventListener('click', () => {
        if (counter > 0) {
            carouselImages[counter].style.opacity = 0;
            counter--;
            carouselImages[counter].style.opacity = 1;
        }
    });
});