// 1. Realizar un programa donde el usuario ingrese dos números y me muestre por un alert cual es el mayor o si son iguales.1. Realizar un programa donde el usuario ingrese dos números y me muestre por un alert cual es el mayor o si son iguales.

let num1 = parseInt(prompt("Ingrese un numero"));
let num2 = parseInt(prompt("Ingrese un numero"));

if (num1 > num2) {
  alert(`El numero mayor es: ${num1}`);
}
else if (num1 < num2) {
  alert(`El numero mayor es: ${num2}`);
} else {
  alert(`Los dos numero ingresados son iguiales`);
}
