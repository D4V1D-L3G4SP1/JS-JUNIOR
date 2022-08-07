const sumar = (num1,num2)=>{
    return parseInt(num1) + parseInt(num2);
}

const restar = (num1,num2)=>{
    return parseInt(num1) - parseInt(num2);
}

const multiplicar = (num1,num2)=>{
    return parseInt(num1) * parseInt(num2);
}

const dividir = (num1,num2)=>{
    return parseInt(num1) / parseInt(num2);
}

const potencia = (num1,num2)=>{
    return parseInt(Math.pow(num1,num2));
}

const raizcuadrada = (num1)=>{
    return parseInt(Math.sqrt(num1));
}

const raizcubica = (num1)=>{
    return parseInt(Math.cbrt(num1));
}

let operacion = prompt("¿Qué operación deseas realizar? \n 1:Suma \n 2:Resta \n 3:Multiplicacion \n 4:División \n 5:Potencias \n 6:Raíz Cuadrada \n 7:Raíz Cúbica \n");

if (operacion == 1){
    let num1 = prompt(`1er numero a sumar`);
    let num2 = prompt(`2do número a sumar con ${num1}`);
    let resultado = sumar(num1,num2);
    alert(`El resultado es: ${resultado}`);
} else if (operacion == 2){
    let num1 = prompt(`1er número a restar`);
    let num2 = prompt(`2do número a restar de ${num1}`);
    let resultado = restar(num1,num2);
    alert(`El resultado es: ${resultado}`);
} else if (operacion == 3){
    let num1 = prompt(`1er número a Multiplicar`);
    let num2 = prompt(`2do número a multiplicar con ${num1}`);
    let resultado = multiplicar(num1,num2);
    alert(`El resultado es: ${resultado}`);
} else if (operacion == 4){
    let num1 = prompt(`Número de adentro de la casita`);
    let num2 = prompt(`Número de afuera de la casita`);
    let resultado = dividir(num1,num2);
    alert(`El resultado es: ${resultado}`);
} else if (operacion == 5){
    let num1 = prompt("Calcular potencia de:");
    let num2 = prompt("Potencia elevada a:");
    alert(resultado = potencia(num1,num2));
} else if (operacion == 6){
    let num1 = prompt("Calcular raíz cuadrada de:");
    alert(resultado = raizcuadrada(num1));
} else if (operacion == 7){
    let num1 = prompt("Calcular raíz cúbica de:");
    alert(resultado = ranum2izcubica(num1));
} else {
    alert("Escoge un número del 1 al 7");   
}

