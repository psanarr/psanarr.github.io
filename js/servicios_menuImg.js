let dropdown = document.getElementById('submenuReservas');
let submenu = dropdown.querySelector('.submenu');

dropdown.addEventListener('click', function() {
    if (submenu.style.display === 'grid') {
        submenu.style.display = 'none';
    } else {
        submenu.style.display = 'grid';
    }
});

let drop = document.getElementById('cuerpo');

document.addEventListener('click', function(event) {
    if (!dropdown.contains(event.target)) {
        submenu.style.display = 'none';
    }
});
