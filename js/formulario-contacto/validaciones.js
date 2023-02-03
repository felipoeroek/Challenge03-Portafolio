export function validar(input) {

    const traerSpan = input.nextElementSibling.nextElementSibling;
    const validityInput = input.validity;
    const tipoInput = input.dataset.input;

    if(validityInput.valid == false){

        traerSpan.innerText = mostrarError(tipoInput, validityInput);
        traerSpan.style.display = 'block';
        mensajeCustomizado(input, mostrarError(tipoInput, validityInput));
    } else {

        traerSpan.style.display = 'none'
        mensajeCustomizado(input, '');
    }
}

function mensajeCustomizado(traerInput, mensaje) {
    
    traerInput.setCustomValidity(mensaje);
}

const tipoErrores = ['valueMissing', 'typeMismatch'];

function mostrarError(tipoDeInput, input) {
    
    let mensaje = '';

    tipoErrores.forEach(err => {

        if(input[err]){

            mensaje = mensajesErrores[tipoDeInput][err];
        }
    })

    return mensaje;
}

const mensajesErrores = {

    nombre: {

        valueMissing: 'Este campo no puede estar vacio'
    },

    email: {

        valueMissing: 'Este campo no puede estar vacio',
        typeMismatch: 'Debe contener por ejemplo: correo@ejemplo.com'
    },

    asunto: {

        valueMissing: 'Este campo no puede estar vacio'
    },

    area: {

        valueMissing: 'Este campo no puede estar vacio'
    }
}

const traerFooter = document.getElementById('texto-footer');
const fechaActual = new Date();
traerFooter.innerHTML = '&copy; ' + fechaActual.getFullYear();

