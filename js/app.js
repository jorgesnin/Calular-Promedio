// pidenotas
let nota1 = parseFloat(prompt("Ingresa la nota 1:"));
let nota2 = parseFloat(prompt("Ingresa la nota 2:"));
let nota3 = parseFloat(prompt("Ingresa la nota 3:"));

// comprobar numeros
if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3)) {
    document.querySelector("#resultado").innerHTML = "Error: Debes ingresar números válidos.";
} else {
    // promedio
    let promedio = (nota1 + nota2 + nota3) / 3;

    // resultado
    if (promedio >= 6.0) {
        document.querySelector("#resultado").innerHTML = `¡Excelente! Tienes promedio ${promedio}.`;
    } else if (promedio >= 5.0) {
        document.querySelector("#resultado").innerHTML = `Tienes promedio ${promedio}. ¡Sigue adelante, puedes mejorar!`;
    } else if (promedio >= 4.0) {
        document.querySelector("#resultado").innerHTML = `Tienes promedio ${promedio}. Debes esforzarte más.`;
    } else {
        document.querySelector("#resultado").innerHTML = `Has reprobado con promedio ${promedio}. Continúa intentándolo.`;
    }
}
