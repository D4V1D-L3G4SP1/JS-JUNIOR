
const sumar = (num1,num2)=>{
    return parseInt(num1) + parseInt(num2);
}

const restar = (num1,num2)=>{
    return parseInt(num1) - parseInt(num2);
}

const multiplicar = (num1,num2)=>{
    return parseInt(num1 * parseInt(num2));
}

const dividir = (num1,num2)=>{
    return parseInt(num1) / parseInt(num2);
}

let opciones = prompt("1:SUMA 2:RESTA 3:MULTIPLICACIÓN 4:DIVISIÓN");

if (opciones == 1){
    let num1 = prompt("1er Numero a Sumar");
    let num2 = prompt("2do numero a Sumar");
    alert(resultado = sumar(num1,num2));
} else if (opciones == 2) {
    let num1 = prompt("1er número a restar");
    let num2 = prompt("2do número a restar");
    alert(resultado = restar(num1,num2));
} else if (opciones == 3){
    let num1 = prompt("1er número a Multiplicar");
    let num2 = prompt("2do número a multiplicar");
    alert(resultado = multiplicar(num1,num2));
} else if (opciones == 4){
    let num1 = prompt("1er número dentro de la casita de la división");
    let num2 = prompt("2do número de fuera de la casita de la división");
    alert(resultado = dividir(num1,num2));
} else {
    alert("No existe ese número imbécil");
}