let cadena = "cadena de prueba prueba prueba";
let cadena2 = " cadena 2";

// concat() junta dos o más cadenas y retorna una nueva.
let resultado = cadena.concat(cadena2);
document.write(resultado);
document.write("<br>--------<br>");

// startsWith() si una cadena comienza con los caracteres de otra cadena, devuelve true, sino devuelve false.
let resultado2 = cadena.startsWith(cadena2);
document.write(resultado2);
document.write("<br>--------<br>");

// endsWith() si una cadena termina con los caracteres de otra cadena, devuelve true, sino devuelve false.
let resultado3 = cadena.endsWith(cadena2);
document.write(resultado3);
document.write("<br>--------<br>");

// includes() si una cadena puede encontrarse dentro de otra cadena, devuelve true sino devuelve false.
let resultado4 = cadena.includes(cadena2);
document.write(resultado4);
document.write("<br>--------<br>");

//indexOf devuelve el índice del primer caracter de la cadena, si no existe, devuelve -1. Es decir devuelve
//el número de la posición.
let resultado5 = cadena.indexOf("prueba");
document.write(resultado5);
document.write("<br>--------<br>");

//lastIndexOf devuelve el último índice del primer caracter de la cadena, si no existe devuelve -1.
//Es decir devuelve el número de la posición
let resultado6 = cadena.lastIndexOf("prueba");
document.write(resultado6);
document.write("<br>--------<br>");

//padStart() -Rellenar cadena al principio con los caracteres deseados.
let cadena3 = "abc";
let resultado7 = cadena3.padStart(10,"12");
document.write(resultado7);
document.write("<br>--------<br>");

//padEnd() -Rellenar cadena al final con los caracteres deseados.
let resultado8 = cadena3.padEnd(10,"12");
document.write(resultado8);
document.write("<br>--------<br>");

//repeat(numeroquequeramosqueserepita) -Devuelve la misma cadena, pero repetida la cantidad.
let resultado9 = cadena3.repeat(2);
document.write(resultado9);
document.write("<br>--------<br>");

//split() divide la cadena como le pidamos, devolviendo así un array.
let cadena5 = "Hola como estas";
let resultado10 = cadena5.split(" ");
document.write(resultado10[2]);
document.write("<br>--------<br>");

//substring() Nos retorna un pedazo de la cadena que seleccionamos.
let cadena6 = "ABCDEFG";
let resultado11 = cadena6.substring(0,5);
document.write(resultado11);
document.write("<br>--------<br>");

//toLowerCase()- Convierte una cadena a minúscula.
let resultado12 = cadena6.toLowerCase();
document.write(resultado12);
document.write("<br>--------<br>");

//toUpperCase()- Convierte una cadena a Mayúscula.
let resultado13 = cadena.toUpperCase();
document.write(resultado13);
document.write("<br>--------<br>");

//toString() -Método devuelve una cadena que representa al objeto especificado.
let cadena7 = 50;
let resultado14 = cadena.toString();
document.write(2 + resultado);
//nota, solo funciona cuando usamos + y no cuando usamos otros operadores, ya que ejecuta la operación.
document.write("<br>--------<br>");

//trim() -Elimina los espacios en blanco al principio y al final de una cadena.
//trimEnd() -ELimina los espacios en blanco al final de una cadena.
//trimStart() -Elimina los espacios en blanco al comienzo de una cadena.
//lenght no es un método, es una propiedad que cuenta cuantos caracteres contiene un string.
let cadena4 = "    pedro    ";
let resultado15 = cadena4.trim();
let resultado16 = cadena4.trimEnd();
let resultado17 = cadena4.trimStart();
document.write(resultado15.length);
document.write(resultado15);
document.write("<br>--------<br>");

document.write(resultado16.length);
document.write(resultado16);
document.write("<br>--------<br>");

document.write(resultado17.length);
document.write(resultado17);
document.write("<br>--------<br>");
