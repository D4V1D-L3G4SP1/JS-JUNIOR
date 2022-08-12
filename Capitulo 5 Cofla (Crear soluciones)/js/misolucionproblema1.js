
console.info(`REQUISITOS PARA APROBAR:
            -Contar por al menos el 90% de asistencias
            -Al menos el 75% de los trabajos prácticos entregados
            -El promedio por materia debe de ser de al menos 7/10
            `)

const evaluacion = (asistenciasTotales,asistenciaCofla,trabajosTotales,trabajosCofla)=>{
    let promedio = (((asistenciaCofla/2*0.35)+(trabajosCofla/2*0.65)));
    if (asistenciaCofla >= (asistenciasTotales*0.9)){
        console.info(`Tienes por lo menos 90% de asistencias, así que no repruebas por asistencias`);
        if (trabajosCofla >= (trabajosTotales*0.75)){
            console.info(`Tienes por lo menos el 75% de trabajos prácticos entregados, para ser precisos ${trabajosCofla} de ${trabajosTotales} trabajos totales`);
            let resultado = console.log("Tu promedio es de :" + Math.round(promedio) + " %cAsi que estás aprobado", "background:green;");
        } else {
            console.log(`%cDirectamente, estás reprobado por falta de trabajos, para ser precisos son: 
            ${trabajosTotales} de los cuales solo entregaste ${trabajosCofla}`, "color:black;background:red;");
        }
    } else {
        console.log("%cDirectamente, estás reprobado por inasistencias","color:black;background:red;");
    }
    
}

evaluacion(31,28,15,12);
evaluacion(31,31,15,15);
evaluacion(31,28,15,11);



/*SI ASISTENCIAS VALE EL 35%, LOS TRABAJOS VALEN 65%*/
