
/*let nombre = "roberto";

if (nombre == "lucas") {
    alert(`tu nombre es ${nombre} malardo `);
}

else if(nombre == "dalto") {
    document.write(`Tu nombre es ${nombre} buenardo`);
}

else if(nombre == "rey") {

    alert(`tu nombre es ${nombre}`);
}

else if(nombre == "roberto") {
    document.write(`Tu nombre es ${nombre}`);
}

else{
    alert("tu nombre es otro");
}*/

let usd, helagua, helacrema, heladix, heladovich, helardo, confites, bote250, pedro, roberto, cofla;

helagua = 0.6;
helacrema = 1;
heladix = 1.6;
heladovich = 1.7;
helardo = 1.8;
confites = 2.9;
bote250 = 2.9;
nada = 0.6;

usd = prompt("¿Cuánto dinero tienes?");

if (usd >= confites && bote250) {
    alert(`Lo que puedes comprar es confites al precio de ${confites} o bote de 1/4 por ${bote250}
    y te sobraría ` + (usd - confites) + " USD");
}

else if (usd >= helardo) {
    alert(`Lo que puedes comprar es el helardo por ${helardo}
    y te sobraría ${usd - helardo} USD`);
}

else if (usd >= heladovich) {
    alert(`Lo que puedes comprar es el heladovich por ${heladovich}
    y te sobraría ${usd - heladovich}`);
}

else if (usd >= heladix) {
    alert(`Lo que puedes comprar es el heladix por ${heladix}
    y te sobraría ${usd - heladix}`);
}

else if (usd >= helacrema) {
    alert(`Lo que puedes comprar es el helacrema por ${helacrema}
    y te sobraría ${usd - helacrema}`);
}

else if (usd >= helagua) {
    alert(`Lo que puedes comprar es el helagua por ${helagua}
    y te sobraría ${usd - helagua}`);
}

else if(usd < nada) {
    alert(`No ajustas nada pobre`);
}