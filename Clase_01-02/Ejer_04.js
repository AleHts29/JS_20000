// 4. Realizar un programa para una tienda de autos. Mostrar por consola
// Si la marca del auto es un ford y el modelo es fiesta ---> tiene un descuento del 5%
// Si la marca del auto es un ford y el modelo es focus---> tiene un descuento del 10%


// Variables descuentos
let descuentoUno = 5;
let descuentoDos = 10;
const priceFordFiesta = 11000;
const priceFordFocus  = 12500;


let menuOpciones = (prompt(
    "Auto Store\n"+
    "1: Ford Fiesta - Precio: " + priceFordFiesta + " USD\n"+
    "2: Ford Focus  - Precio: " + priceFordFocus + " USD"
    ));


// calculo de un porcentaje 
// si quiero saber el 32 % de 517, --> (Ej: (32 x 517)/100 = 165,44 )

if (menuOpciones == '1'){
    let calculoDescuento = (descuentoUno * priceFordFiesta)/100
    let totalConDescuento = priceFordFiesta - calculoDescuento;
    alert(`El total a pagar es: $${totalConDescuento} - descuento del 5% incluido `);
}
else if (menuOpciones == '2'){
    let calculoDescuento = (descuentoDos * priceFordFocus)/100
    let totalConDescuento = priceFordFocus - calculoDescuento;
    alert(`El total a pagar es: $${totalConDescuento} - descuento del 10% incluido `);
}else{
    alert('Opcion no valida');
}
