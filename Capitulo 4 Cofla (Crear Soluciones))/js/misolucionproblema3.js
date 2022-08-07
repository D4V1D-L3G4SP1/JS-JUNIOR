const Inscribir = (materia) =>{
    let inscripcion = prompt(`Cofla, ¿En cuál materia deseas inscribirte? 
    1:Desarrollo Web
    2:Programacion
    3:Sistemas Operativos
    Recuerda que si hay 10 alumnos inscritos no podrás inscribirte`);
    let desarrollo = ["Pedro","Matias","Fernando","Mirla","Alicia","Jesús","Andrea","Josefina","Mónica","Andrés"];
    let programacion = ["Pedro","Matias","Fernando","Alicia","Jesús","Mirta","Josefina","Mónica","Andrés","Andrea"];
    let sistemasOperativos = ["Jesús","Mirta","Josefina","Mónica","Andrés","Andrea"];

    if (inscripcion == 1){
        if (desarrollo.length == 10){
            alert(`Hay ${desarrollo.length} alumnos inscritos por lo tanto NO puedes inscribirte porque están inscritos 10 alumnos, para ser precisos: \n ${desarrollo.join(` \n `)}`);
        } else {
            alert(`Puedes inscribirte ya que hay ${desarrollo.length} alumnos inscritos entonces adelante`);
            desarrollo.push("Cofla");
            alert(`Procesando... \n un momento...`);
            alert(`Listo ya estás inscrito, tus compañeros serán:${desarrollo.join(" \n ")}`);
        }
    } else if (inscripcion == 2){
        if (programacion.length == 10){
            alert(`Hay ${programacion.length} alumnos inscritos por lo tanto NO puedes inscribirte porque están inscritos 10 alumnos, para ser precisos: \n ${desarrollo.join(` \n `)}`);
        } else {
            alert(`Puedes inscribirte ya que hay ${programacion.length} alumnos inscritos entonces adelante`);
            programacion.push("Cofla");
            alert(`Procesando... \n un momento...`);
            alert(`Listo ya estás inscrito, tus compañeros serán:${programacion.join(" \n ")}`);
        }
    } else if(inscripcion == 3){
        if (sistemasOperativos.length == 10){
            alert(`Hay ${sistemasOperativos.length} alumnos inscritos por lo tanto NO puedes inscribirte porque están inscritos 10 alumnos, para ser precisos: \n ${sistemasOperativos.join(` \n `)}`);
        } else {
            alert(`Puedes inscribirte ya que hay ${sistemasOperativos.length} alumnos inscritos entonces adelante`);
            sistemasOperativos.push("Cofla");
            alert(`Procesando... \n un momento...`);
            alert(`Listo ya estás inscrito, tus compañeros serán: ${sistemasOperativos.join(" \n ")}`);
        }
    } else {
        alert("No existe esa opción")
    }


}

Inscribir();


