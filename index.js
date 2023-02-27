const elementoValorAnterior = document.getElementById('valor-anterior');
const elementoValorActual = document.getElementById('valor-actual');
const botonesNumeros = document.querySelectorAll('.numero');
const botonesOperadores = document.querySelectorAll('.operador');

const elementoDisplay = new display(elementoValorAnterior, elementoValorActual);

botonesNumeros.forEach(boton => {


    boton.addEventListener("click",
        () => {
            elementoDisplay.agregarNumero(boton.innerHTML);

        }
    )
})

botonesOperadores.forEach(boton => {
    boton.addEventListener('click', () => elementoDisplay.computar(boton.value))

})



