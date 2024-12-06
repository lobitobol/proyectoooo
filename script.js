// Obtener referencias a los elementos del DOM
const weightInput = document.getElementById('weight');
const polesInput = document.getElementById('poles');
const calculateBtn = document.getElementById('calculateBtn');
const resultDiv = document.getElementById('result');

// Función para calcular la fuerza
function calculateForce() {
    const weight = parseFloat(weightInput.value);
    const poles = parseInt(polesInput.value);

    // Validar que los valores sean correctos
    if (weight > 0 && poles > 0) {
        const force = weight / poles;
        resultDiv.textContent = `La fuerza en cada palo es: ${force.toFixed(2)} N`;
    } else {
        resultDiv.textContent = 'Por favor, ingresa valores válidos.';
    }
}

// Agregar evento al botón
calculateBtn.addEventListener('click', calculateForce);
