console.log('Mi calculadora');
let cantidadA, canttidadB;
/*
function sumar(){
    const formulario = document.getElementById('formulario');
    let operandoA = formulario['operandoA'];
    let operandoB = formulario['operandoB'];
    let resultado = parseInt(operandoA.value) + parseInt(operandoB.value);
    if(isNaN(resultado))
        resultado = 'No incluye numeros';
    document.getElementById('resultado').innerHTML = `Resultado ${resultado}`;
    console.log(`Resultado ${resultado}`);
}
*/

function concatenar1(){
    document.getElementById('cantidad').innerHTML += '1';
}
function concatenar2(){
    document.getElementById('cantidad').innerHTML += '2';
}
function concatenar3(){
    document.getElementById('cantidad').innerHTML += '3';
}
function concatenar4(){
    document.getElementById('cantidad').innerHTML += '4';
}
function concatenar5(){
    document.getElementById('cantidad').innerHTML += '5';
}
function concatenar6(){
    document.getElementById('cantidad').innerHTML += '6';
}
function concatenar7(){
    document.getElementById('cantidad').innerHTML += '7';
}
function concatenar8(){
    document.getElementById('cantidad').innerHTML += '8';
}
function concatenar9(){
    document.getElementById('cantidad').innerHTML += '9';
}
function concatenar0(){
    document.getElementById('cantidad').innerHTML += '0';
}
function concatenarpunto(){
    document.getElementById('cantidad').innerHTML += '.';
}
function sumar(){
    cantidadA = document.getElementById('cantidad').innerHTML;
    console.log(`Cantidad A ${cantidadA}`);
    document.getElementById('cantidad').innerHTML = '';
    operacion = '+';
    console.log(operacion);
}
function restar(){
    cantidadA = document.getElementById('cantidad').innerHTML;
    console.log(`Cantidad A ${cantidadA}`);
    document.getElementById('cantidad').innerHTML = '';
    operacion = '-';
    console.log(operacion);
}
function multiplicar(){
    cantidadA = document.getElementById('cantidad').innerHTML;
    console.log(`Cantidad A ${cantidadA}`);
    document.getElementById('cantidad').innerHTML = '';
    operacion = '*';
    console.log(operacion);
}
function dividir(){
    cantidadA = document.getElementById('cantidad').innerHTML;
    console.log(`Cantidad A ${cantidadA}`);
    document.getElementById('cantidad').innerHTML = '';
    operacion = '/';
    console.log(operacion);
}
function resultado(){
    cantidadB = document.getElementById('cantidad').innerHTML;
    console.log(`Cantidad B ${cantidadB}`);
    let res = eval(cantidadA + operacion + cantidadB);
    console.log(res);
    document.getElementById('cantidad').innerHTML = res;
    cantidadA = 0;
    cantidadB = 0;
}
function limpiar(){
    document.getElementById('cantidad').innerHTML = '';
    cantidadA = 0;
    cantidadB = 0;
}