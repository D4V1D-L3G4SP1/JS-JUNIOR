/*
const universidad = (materia) =>{
    let parametro = prompt("¿Cuál materia quieres ver?");
    let calculo = ["Arturo Guerra <br>", "Juan", "Pedro","Matías"];


    document.write(`Cálculo <br> Profesor: ${calculo[0]}, <br>
    Alumnos: ${calculo[1,-1]}`);
}

universidad();*/

const universidad = (materia)=>{
let calculo = ["Cálculo", "Arturo Guerra Hernandez","Juan","Pedro","Matías"]
    if (materia == ("Calculo" || "calculo")){
        document.write(`Materia: ${calculo[0]}<br>Profesor: ${calculo[1]}<br>Alumnos:${calculo[-1]}`);
    } else {
        document.write("No es cálculo");
    }
}

universidad("Calculo");