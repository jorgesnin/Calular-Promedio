// Pedir las 3 notas
let nota1 = parseFloat(prompt("Ingresa la nota 1:"));
let nota2 = parseFloat(prompt("Ingresa la nota 2:"));
let nota3 = parseFloat(prompt("Ingresa la nota 3:"));

// Calcular promedio
let promedio = (nota1 + nota2 + nota3) / 3;

// Evaluar y mostrar resultado
if (promedio >= 6.0) {
    alert(`¡Excelente! Tienes promedio ${promedio}.`);
} else if (promedio >= 5.0) {
    alert(`Tienes promedio ${promedio}. ¡Sigue adelante, puedes mejorar!`);
} else if (promedio >= 4.0) {
    alert(`Tienes promedio ${promedio}. Debes esforzarte más.`);
} else {
    alert(`Has reprobado con promedio ${promedio}. Continúa intentándolo.`);
}