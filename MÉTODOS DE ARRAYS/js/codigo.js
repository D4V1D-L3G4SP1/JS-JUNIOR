document.write("<b style='color:red'>MÉTODOS TRANSFORMADORES</b>" + "<br>");
// pop() Elimina el último elemento de un array y lo devuelve.
let nombres = ["Pedro","María","Matías"];
document.write("<b>Array Original: </b>" + nombres);
let resultado = nombres.pop();
document.write("<br><b>Elemento Removido: </b>" + resultado + "<br>");
document.write("<b>Elementos que quedan: </b>" + nombres + "<br>");


document.write("----------------------------------------------------------" + "<br>");

// shift() Elimina el primer elemento de un array y lo devuelve.
let integrantes = ["Mamá","Papá","Hermano","Hermana","Primo"]
document.write("<b>Array Original: </b>" + integrantes);
let resultado2 = integrantes.shift();
document.write("<br><b>Elemento Removido: </b>" + resultado2 + "<br>");
document.write("<b>Elementos que quedan: </b>" + integrantes + "<br>");

document.write("----------------------------------------------------------" + "<br>");

// push() Agrega un elemento al array al final de la lista, y devuelve como valor la cantidad
//de elementos, o como la posición del nuevo elemento que agregamos.
let familia = ["José","María","Yonathan","Yoana","David"];
document.write("<b>Array Original: </b>" + familia + "<br>");
let resultado3 = familia.push("Matías","Armando");
document.write("<b>La cantidad de elementos, o la posición del nuevo elemento que agregamos: </b>" + resultado3 + "<br>")
document.write("<b>Elementos que quedan: </b>" + familia + "<br>");

document.write("----------------------------------------------------------" + "<br>");

// reverse() Invierte el orden de los elementos de un array.
let animales = [" Perro"," Pájaro"," Gato"];
document.write("<b>Array Original: </b>" + animales + "<br>");
let resultado4 = animales.reverse();
document.write("<b>Array invertido con reverse: </b>" + animales + "<br>");
document.write("<b>Array invertido con reverse: </b>" + resultado4 + "<br>");

document.write("----------------------------------------------------------" + "<br>");

//unshift() Agrega uno o más elementos al inicio del array, y devuelve la nueva longitud del array.
let numeros = [3,4,5];
document.write("<b>Array Original: </b>" + numeros + "<br>");
let resultado5 = numeros.unshift(0,1,2);
document.write("<b>Array con el método unshift(): </b>" + numeros + "<br>");
document.write("<b>La cantidad de elementos, o la posición del nuevo elemento que agregamos: </b>" + resultado5 + "<br>");

document.write("----------------------------------------------------------" + "<br>");

//sort() Ordena los elementos alfabéticamente y númericamente de un array, devolviendo el array ordenado.
let electronicos = [" Laptop"," Computadora de escritorio"," Monitor"];
document.write("<b>Array Original de electrónicos: </b>" + electronicos + "<br>");
let numaleatorios = [5,34,2,73,21,1];
document.write("<b>Array Original de números: </b>" + numaleatorios + "<br>");
let resultado6 = electronicos.sort();
let resultado7 = numaleatorios.sort();
document.write("<b>Electrónicos ordenados alfabéticamente con sort(): </b>" + resultado6 + "<br>");
document.write("<b>Numeros ordenados con sort(): </b>" + resultado7 + "<br>");

document.write("----------------------------------------------------------" + "<br>");

// splice() Cambia el contenido de un array eliminando elementos existentes y/o agregando nuevos elementos.
// splice(desdedondeempiezo,cantidadelementoseliminar,"elementos","agregar");
let frutas = [" pera"," manzana"," durazno", " mango"];
document.write("<b>Array Original: </b>" + frutas + "<br>");
let resultado8 = frutas.splice(0,2);
document.write("<b>Array con splice(): </b>" + resultado8 + "<br>");

document.write("+++++++++++++++++++++++++++++++++++++++++++++++++++++++" + "<br>");

document.write("<b style='color:red'>MÉTODOS ACCESORES</b>" + "<br>");
// join () Une a todos los elementos de una matriz (u objeto similar), en una cadena y la devuelve.
// join("caracterseparadorelementos")
let muebles = [" sillon"," mesa"," sillas"," ropero"];
document.write("<b>Array Original sin join() aplicado: </b>" + muebles + "<br>");
let resultado9 = muebles.join("<br>Mueble: ");
document.write("Mueble: " + resultado9 + "<br>");
let resultado10 = muebles.join(" - ");
document.write(resultado10 + "<br>");

document.write("----------------------------------------------------------" + "<br>");

// slice() Devuelve una parte del array dentro de un nuevo array, empezando por inicio hasta fin. (fin no incluido)
let decoraciones = [" lámpara", " esquinero", " madera"];
document.write("<b>Array Original sin slice() aplicado: </b>" + decoraciones + "<br>");
let resultado11 = decoraciones.slice(0,2);
document.write(resultado11 + "<br>");

document.write("----------------------------------------------------------" + "<br>");

//toString(), indexOf(), lastIndexOf(), includes()
document.write("<b>toString</b>" + "<br>")
document.write("<b>Array Original: </b>" + decoraciones + "<br>");
let resultado12 = decoraciones.toString();
document.write(resultado12 + "<br>");

document.write("----------------------------------------------------------" + "<br>");
document.write("<b>indexOf</b>" + "<br>")
document.write("<b>Array Original: </b>" + decoraciones + "<br>");
let resultado13 = decoraciones.indexOf(" madera");
document.write(resultado13 + "<br>");

document.write("----------------------------------------------------------" + "<br>");
document.write("<b>lastIndexOf</b>" + "<br>")
document.write("<b>Array Original: </b>" + decoraciones + "<br>");
let resultado14 = decoraciones.lastIndexOf(" ssss");
document.write(resultado14 + "<br>");

document.write("----------------------------------------------------------" + "<br>");
document.write("<b>indexOf</b>" + "<br>")
document.write("<b>Array Original: </b>" + decoraciones + "<br>");
let resultado15 = decoraciones.includes("pedro");
document.write(resultado15 + "<br>");