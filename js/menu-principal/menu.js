const traerMenuTablet = document.getElementsByClassName('menu-principal');
const traerFlecha = document.getElementById('flecha');
const traerFlechaAbajo = document.getElementById('flecha-abajo');

traerFlecha.addEventListener('click', () => {

    traerMenuTablet[0].classList.remove('menu-principal-translate-inverse')
    traerMenuTablet[0].classList.add('menu-principal-translate');
    traerFlecha.style.display = 'none';
    traerFlechaAbajo.style.display = 'block';
})

traerFlechaAbajo.addEventListener('click', () => {

    traerMenuTablet[0].classList.remove('menu-principal-translate')
    traerMenuTablet[0].classList.add('menu-principal-translate-inverse');
    traerFlechaAbajo.style.display = 'none';
    traerFlecha.style.display = 'block';
})