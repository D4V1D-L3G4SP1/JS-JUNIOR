/*Formas de hacer ARRAYS*/

let frutas = ["banana","manzana", "pera", 2,5, "Pedro"];

document.write(frutas[2] + "<br><br>");
/*ARRAY ASOCIATIVO*/

let pc1 = {
    nombre: "DaltoPC",
    procesador: "Intel Core i7",
    ram: "16GB",
    espacio: "1TB",
};

let nombre = pc1["nombre"];
let procesador = pc1["procesador"];
let ram = pc1["ram"];
let espacio = pc1["espacio"];

let frase = `El nombre de PC es: <b>${nombre}</b> <br>
            El procesador es: <b>${procesador}</b> <br>
            La Memoria RAM es: <b>${ram}</b> <br>
            El espacio en Disco es de: <b>${espacio}</b> <br>`

document.write(frase + "<br><br>");
/*FIN ARRAY ASOCIATIVO*/
/**BUCLES*/

/*BUCLE WHILE*/
let numero = 0;

while (numero <= 6) {
    numero++;

    document.write(numero + "<br><br>");
}
/*FIN BUCLE WHILE*/
/*BUCLE DO WHILE*/
let numero2 = 0;

do {
    document.write(numero2 + "<br><br>");
    numero2++;
} 
while (numero2 > 6);
/*FIN BUCLE DO WHILE*/
/*BUCLE CON BREAK*/

let numero3 = 0;

while(numero3 < 1000){
    numero3++;
    document.write(numero3);
    if (numero3 == 10) {
        break;
    }
}

document.write("fin" + "<br><br>");
/*FIN BUCLE CON BREAK*/
/*BUCLE FOR*/
for (let i=6; i >= 0; i--) {
    document.write(i + "<br>");
}

/*OTRA FORMA*/
let i2;
for (i2=6; i2>= 0; i2--) {
    document.write(i2 + "<br>");
}

/*OTRA FORMA*/
let i3 = 6;
for (i3; i3>= 0; i3--) {
    document.write(i3 + "<br> <br>");
}
/*FIN BUCLE FOR*/

/*BUCLE FOR CON CONTINUE*/
for (let i4 = 1; i4 <= 5; i4++){
    if(i4 == 4){
        continue;
    }
    document.write(i4 + "<br>");
}
/*FIN BUCLE FOR CON CONTINUE*/

document.write("<h1>For in For Of</h1>" + "<br>");

/*INICIO FOR IN, FOR OF*/
let animales = ["gato", "perro", "tiranosaurio rex"];

for (animal in animales){
    document.write(animal + "<br>");
}

document.write("<br>");

for (animal of animales){
    document.write(animal + "<br>");
}
/*Final FOR IN, FOR OF*/

/*Bucle FOR dentro de otro FOR con la sentencia LABEL*/
let array1 = ["maria", "josefa", "roberta"];
let array2 = ["pedro", "marcelo", array1, "josefina"];

forRancio: /*Sentencia LABEL*/
for (let array in array2){
    if (array == 2){
        for (let array of array1){
            document.write(array + "<br>");
            break forRancio;
        }
    } else {
        document.write(array2[array] + "<br>");
    }
}
/*Final Bucle FOR dentro de otro FOR con la sentencia LABEL*/
