class Calculadora {
    constructor(){

    }
sumar(num1,num2){
    return parseInt(num1) + parseInt(num2);
}

restar(num1,num2){
    return parseInt(num1) - parseInt(num2);
}

multiplicar(num1,num2){
    return parseInt(num1 * parseInt(num2));
}

dividir(num1,num2){
    return parseInt(num1) / parseInt(num2);
}
potenciar(num,exp){
    return num**exp;
}
raizcuadrada(num){
    return Math.sqrt(num);
}
raizcubica(num){
    return Math.cbrt(num);
}
}

const calculadora = new Calculadora();

alert("¿Qué operación deseas realizar?");
let opciones = prompt("1:SUMA 2:RESTA 3:MULTIPLICACIÓN 4:DIVISIÓN 5:POTENCIACIÓN 6:RAIZ CUADRADA 7:RAÍZ CÚBICA");

if (opciones == 1){
    let num1 = prompt("1er Numero a Sumar");
    let num2 = prompt("2do numero a Sumar");
    resultado = calculadora.sumar(num1,num2);
    alert(`Tu resultado es ${resultado}`);
} else if (opciones == 2) {
    let num1 = prompt("1er número a restar");
    let num2 = prompt("2do número a restar");
    resultado = calculadora.restar(num1,num2);
    alert(`Tu resultado es ${resultado}`);
} else if (opciones == 3){
    let num1 = prompt("1er número a Multiplicar");
    let num2 = prompt("2do número a multiplicar");
    resultado = calculadora.multiplicar(num1,num2);
    alert(`Tu resultado es ${resultado}`);
} else if (opciones == 4){
    let num1 = prompt("1er número dentro de la casita de la división");
    let num2 = prompt("2do número de fuera de la casita de la división");
    resultado = calculadora.dividir(num1,num2);
    alert(`Tu resultado es ${resultado}`);
} else if (opciones == 5){
    let num1 = prompt("Número a potenciar");
    let num2 = prompt("Exponente");
    resultado = calculadora.potenciar(num1,num2);
    alert(`Tu resultado es ${resultado}`);
} else if (opciones == 6){
    let num1 = prompt("Conocer la raíz cuadrada de:");
    resultado = calculadora.raizcuadrada(num1);
    alert(`Tu resultado es ${resultado}`);
} else if (opciones == 7){
    let num1 = prompt("Conocer la raíz cúbica de:");
    resultado = calculadora.raizcubica(num1);
    alert(`Tu resultado es ${resultado}`);
} else {
    alert("No existe esa opción");
}
