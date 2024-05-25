document.addEventListener('DOMContentLoaded', function () {
    const botonTodas = document.getElementById('botonTodas');
    const botonMisPelis = document.getElementById('botonMisPelis');
    const secTodas = document.getElementById('secTodas');
    const secMias = document.getElementById('secMias');

    botonTodas.addEventListener('click', function () {
        secTodas.classList.remove('section--hidden');
        secMias.classList.add('section--hidden');
        botonTodas.classList.add('todasSelect');
        botonMisPelis.classList.remove('misPelisSelect');

        const headerTitle = document.querySelector('.header__title h1');
        headerTitle.textContent = 'QUE MIRA EL RESTO';
    });

    botonMisPelis.addEventListener('click', function () {
        secMias.classList.remove('section--hidden');
        secTodas.classList.add('section--hidden');
        botonMisPelis.classList.add('misPelisSelect');
        botonTodas.classList.remove('todasSelect');

        const headerTitle = document.querySelector('.header__title h1');
        headerTitle.textContent = 'TUS PELIS FAVORITAS';
    });
});