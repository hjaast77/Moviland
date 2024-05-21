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
    });

    botonMisPelis.addEventListener('click', function () {
        secMias.classList.remove('section--hidden');
        secTodas.classList.add('section--hidden');
        botonMisPelis.classList.add('misPelisSelect');
        botonTodas.classList.remove('todasSelect');
    });
});