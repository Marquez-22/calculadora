class display {
    constructor(elementoValorAnterior, elementoValorActual) {
        this.elementoValorActual = elementoValorActual
        this.elementoValorAnterior = elementoValorAnterior;
        this.calculadora = new Calculadora();
        this.tipoOperacion = undefined;
        this.ValorActual = '';
        this.ValorAnterior = '';
        this.signos = {
            suma: '+',
            dividir:'%',
            multiplicar: 'x',
            restar: '-',
        }
    }
    borrar() {
        this.ValorActual = this.ValorActual.toString().slice(0, -1);
        this.imprimirvalores();
    }

    borrarTodo() {
        this.ValorActual = '';
        this.ValorAnterior = '';
        this.tipoOperacion = undefined;
        this.imprimirvalores();
    }


    computar(tipo) {
        this.tipoOperacion !== 'igual' && this.calcular();
        this.tipoOperacion = tipo;
        this.ValorAnterior = this.ValorActual || this.ValorAnterior;
        this.ValorActual = ''; 
        this.imprimirvalores();


    }



    agregarNumero(numero) {
        if (numero === '.' && this.ValorActual.includes('.')) return
        this.ValorActual = this.ValorActual.toString() + numero.toString();
        this.imprimirvalores();
    }

    imprimirvalores() {
        this.elementoValorActual.textContent = this.ValorActual;
        this.elementoValorAnterior.textContent = `${this.ValorAnterior} ${this.signos [this.tipoOperacion] || ''}` ;


    }

    calcular() {
        const ValorAnterior = parseFloat(this.ValorAnterior);
        const ValorActual = parseFloat(this.ValorActual);

        if (isNaN(ValorActual) || isNaN(ValorAnterior)) return
        this.ValorActual = this.calculadora[this.tipoOperacion](ValorAnterior, ValorActual);


    }

}


