// 5. Realizar un programa para la conversión de divisas (pesos, reales, dólares estadounidenses y euros). Realizar las validaciones que considere necesarias. Se debe ingresar un valor por prompt y preguntar la opción de conversión al usuario

let menuOpciones = parseInt(prompt(
    "Conversion de divisas\nLas cotizaciones incluyen impuestos: +30% +35%\n"+
    "1: Pesos a Dolar\n"+
    "2: Pesos a Euro\n"+
    "3: Pesos a Real\n"
    ));

// constantes de conversion
const dolar = 178.14
const euro = 202.50
const real = 34.37


if(isNaN(menuOpciones) || menuOpciones < 1 || menuOpciones > 3 ){
    alert('Opcion no valida!..')
}
else{
    let monto = parseFloat(prompt('Ingrese el monto en pesos ARG: '));

    // el .toFixed(2), me toma solo dos decimales
    if(menuOpciones == 1){
        let totalMonto = (monto/dolar).toFixed(2);
        alert(`$${monto}ARG son $${totalMonto}USD `);
    }
    if(menuOpciones == 2){
        let totalMonto = (monto/euro).toFixed(2);
        alert(`$${monto}ARG son $${totalMonto}EUR `);
    }
    if(menuOpciones == 3){
        let totalMonto = (monto/real).toFixed(2);
        alert(`$${monto}ARG son $${totalMonto}BRL `);
    }
}