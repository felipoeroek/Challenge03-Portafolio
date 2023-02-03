import { validar } from "./validaciones.js";

const traerInput = document.querySelectorAll('.formulario_contacto__grupo__input');

traerInput.forEach(input => {

    input.addEventListener('blur', (e) => {
        
        e.preventDefault();
        validar(e.target);
    });
})