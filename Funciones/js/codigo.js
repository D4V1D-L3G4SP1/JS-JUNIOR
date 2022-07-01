/*FORMAS DE CREAR FUNCIONES*/
function saludar(){
    respuesta = prompt("¡Hola Lucas!, ¿Cómo fue tu día?");
    if (respuesta == "bien"){
        alert("Me alegro");
    } else {
        alert("Una pena");
    }
}
/*FORMAS DE MANDAR LLAMAR FUNCIONES*/
saludar();
saludar();
saludar();
document.write("<br><br>");

function saludar1(nombre){
    let frase = `¡Hola ${nombre}!, ¿Cómo estás?`;
    document.write(frase);
}

saludar1("Pedro");

function suma(num1, num2){
    let res = num1 + num2;
    return res;
}

let resultado = suma(20, 25);
document.write(resultado);

/*FUNCIONES FLECHA*/

const saludar3 = nombre2 => {
    frase2 = `¡HOLA ${nombre2}!, ¿Cómo estás?`;
    document.write(frase2);
}

saludar3("Ricardo");