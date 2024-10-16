function calcular(numero1, numero2, operacion) {
    let resultado;

    switch (operacion) {
        case 'suma':
            resultado = numero1 + numero2;
            break;
        case 'resta':
            resultado = numero1 - numero2;
            break;
        case 'multiplicacion':
            resultado = numero1 * numero2;
            break;
        case 'division':
            if (numero2 === 0) {
                console.error('Error: No se puede dividir por cero.');
                return;
            }
            resultado = numero1 / numero2;
            break;
        default:
            console.warn('Operación no válida.');
            return;
    }

    console.log(`El resultado de la ${operacion} es: ${resultado}`);
}

const input1 = prompt('Introduce el primer número:');
const numero1 = parseFloat(input1);

const input2 = prompt('Introduce el segundo número:');
const numero2 = parseFloat(input2);

const operacion = prompt('Introduce la operación a realizar (suma, resta, multiplicacion, division):').toLowerCase();


calcular(numero1, numero2, operacion);
