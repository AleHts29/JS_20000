// 2. Datos de registro. Pedir al usuario nombre y edad. Mostrar resultados por medio de un alert
// Si el usuario es mayor de edad ---> Bienvenido ‘usuario’
// Si usuario es menor de edad ----> No se permite el ingreso

let nombre = prompt("Ingrese su nombre");
let edad = parseInt(prompt("Ingrese su edad"));

let mayorDeEdad = 18;

if (edad >= mayorDeEdad) {
  alert(`Hola ${nombre}, bienvenido!`);
} else {
    alert(
        `Hola ${nombre}, lo sentimos aun te faltal ${mayorDeEdad - edad} años para poder ingresar..`
  );
}
