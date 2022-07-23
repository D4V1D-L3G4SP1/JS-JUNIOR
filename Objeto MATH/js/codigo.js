//OBJETO MATH -BÁSICO
document.write("------------------------------" + "<br>");
//MÉTODOS
// sqrt() - Devuelve la raíz cuadrada positiva de un número.
    let raizcuadrada = Math.sqrt(25);
    document.write(raizcuadrada + "<br>");

document.write("------------------------------" + "<br>");

// cbrt() - Devuelve la ráiz cúbica de un número.
    let raizcubica = Math.cbrt(27);
    document.write(raizcubica + "<br>");

document.write("------------------------------" + "<br>");

// max() - Devuelve el mayor de cero o más números.
    let nummax = Math.max(4,1,6,12,63,243,90);
    document.write(nummax + "<br>");

document.write("------------------------------" + "<br>");

// min() - Devuelve el más pequeño de cero o más números.
    let nummin = Math.min(4,1,6,12,63,243,90);
    document.write(nummin + "<br>");

document.write("------------------------------" + "<br>");

// random() - Devuelve un número peudo-aleatorio entre 0 y 1 cada vez que recargamos la página.
    let numrandomentre0al = Math.random();
    document.write(numrandomentre0al + "<br><p></p>");
    let numrandomentre0a100perosinel0niel100 = Math.random()*100;
    document.write(numrandomentre0a100perosinel0niel100 + "<br>");

document.write("------------------------------" + "<br>");

// round() -Devuelve el valor de un número redondeado al número entero más cercano (o sea, redondea hacia arriba)
// cada vez que recargamos la página.
    let numrandomredondeado = Math.random()*100;
    numrandomredondeado = Math.round(numrandomredondeado);
    document.write(numrandomredondeado);

document.write("<br>" + "------------------------------" + "<br>");

// floor() - Devuelve el mayor entero menor que o igual a un número. (o sea, redondea hacia abajo)
    let numrandomredondeado2 = Math.random()*100;
    numrandomredondeado2 = Math.floor(numrandomredondeado2);
    document.write(numrandomredondeado2);

document.write("<br>" + "------------------------------" + "<br>");

// fround() - Devuelve la representación flotante de precisión simple (4 bytes) más cercana de un número.

    let numlargo = Math.fround(9.577272949279429247);
    document.write(numlargo);

document.write("<br>" + "------------------------------" + "<br>");
// trunc() - DEvuelve la parte entera del numero x, la eliminación de los dígitos fraccionarios.

    let numsindecimal = Math.trunc(9.73847383);
    document.write(numsindecimal);

document.write("<br>" + "------------------------------" + "<br>");

// PI Radio de la circunsferencia de un círculo respecto a su diametro 3.1416
    let numpi = Math.PI;
    document.write(numpi);

document.write("<br>" + "------------------------------" + "<br>");

// SQRT1_2 -Raíz cuadrada de 1/2; Equivalente a 1 sobre la raíz cuadrada de 2, aprox 0.707
    let raizdeunmedio = Math.SQRT1_2;
    document.write(raizdeunmedio);

document.write("<br>" + "------------------------------" + "<br>");

// SQR2 - Raíz cuadrada de 2, aproximadamente 1.414.
    let raizde2 = Math.SQRT2;
    document.write(raizde2);

document.write("<br>" + "------------------------------" + "<br>");
    
//E -Constante de Euler, la base de los logaritmos naturales aprox. 2.71828182
    let euler = Math.E;
    document.write(euler);

document.write("<br>" + "------------------------------" + "<br>");

//LN2 -Logaritmo natural de 2, aproximadamente 0.693.
    let logaritmonaturalde2 = Math.LN2;
    document.write(logaritmonaturalde2);

document.write("<br>" + "------------------------------" + "<br>");

//LN10 -Logaritmo natural de 10, aproximadamente 2.303.
    let logaritmonaturalde10 = Math.LN10;
    document.write(logaritmonaturalde10);

document.write("<br>" + "------------------------------" + "<br>");

//LOG2E -Logaritma de E con base 2, aproximadamente 1.443.
    let logaritmodeEconbase2 = Math.LOG2E;
    document.write(logaritmodeEconbase2);
document.write("<br>" + "------------------------------" + "<br>");

//LOG10E -Logaritmo de E con base 10, aproximadamente 0.434
    let logaritmodeEconbase10 = Math.LOG10E;
    document.write(logaritmodeEconbase10);