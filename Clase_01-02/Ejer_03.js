// 3. Para aprobar la cursada de la materia de algoritmos se requiere de un puntaje superior a 6.50, realizar un programa que le pida al usuario ingresar su calificación y devuelva por consola lo siguiente.
// Si calificación es mayor a 9 ---> Aprobado, no rinde final
// Si calificación esta entre 6.50 y 9 ---> Aprobado, rinde final.
// Si calificación es menor a 6.50 ----> Debe presentar recuperatorio.

let nombre = prompt("Ingrese su nombre");
let calificacion = parseFloat(prompt('Ingrese la calificacion obtenida en Algoritmos'))

// variables
const califUno = 9
const califDos = 6.50


if (calificacion > califUno){
    console.log(`Hola ${nombre}, tu calificacion es ${calificacion} por tanto no rindes final - Materia APROBADO`)
}
else if (calificacion > califDos && calificacion < califUno){
    console.log(`Hola ${nombre}, tu calificacion es ${calificacion} por debes rendir final - Cursada Aprobada`)
}
else{
   console.log(`Hola ${nombre}, tu calificacion es ${calificacion} debes presentar recuperatorio`)
}
