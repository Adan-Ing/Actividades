let currentInput = '';

function addToDisplay(value) {
    currentInput += value;
    document.getElementById('display').textContent = currentInput;
}

document.getElementById('calculate').addEventListener('click', function() {
    const historyDiv = document.getElementById('history');
    const errorDiv = document.getElementById('error');

    errorDiv.textContent = ''; // Limpiar mensajes de error

    // Extraer los números y la operación del input actual
    const num1 = parseFloat(currentInput.split(/[\+\-\*\/]/)[0]);
    const num2 = parseFloat(currentInput.split(/[\+\-\*\/]/)[1]);
    const operation = currentInput.match(/[\+\-\*\/]/)[0];

    let resultado;
    let operacionTexto = '';

    switch (operation) {
        case '+':
            resultado = num1 + num2;
            operacionTexto = "suma";
            break;
        case '-':
            resultado = num1 - num2;
            operacionTexto = "resta";
            break;
        case '*':
            resultado = num1 * num2;
            operacionTexto = "multiplicación";
            break;
        case '/':
            if (num2 === 0) {
                errorDiv.textContent = 'Error: No se puede dividir por cero.';
                return;
            }
            resultado = num1 / num2;
            operacionTexto = "división";
            break;
        default:
            errorDiv.textContent = 'Error: Operación no válida.';
            return;
    }

    const resultText = `El resultado de la ${operacionTexto} es: ${resultado}`;
    historyDiv.innerHTML += `<div>${resultText}</div>`; // Mostrar resultado en el historial
    console.log(resultText); // Para depuración

    // Limpiar la entrada después de calcular
    currentInput = '';
    document.getElementById('display').textContent = '';
});
