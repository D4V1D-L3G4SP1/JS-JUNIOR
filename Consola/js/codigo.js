/*
La consola es uno de los tantos objetos o API´s que podemos llegar a encontrar tanto en el navgador
como en JS principalmente verificar los errores

PARA ESCRIBIR DESDE LA CONSOLA AÑADIMOS LOS SIGUIENTE:
console.log("Texto/parametro");

EJEMPLO:
let name = "David";
alert(name);
*/
/***********/

/*FUNCIONES DE REGISTRO */

/*
    assert() Aparece un mensaje de error en la consola si la afirmación es falsa. Si la afirmación es
    verdadera, no aparecerá nada. [NO ESTÁNDAR]

        consol.assert(7 > 5); //NO APARECE NADA PORQUE LA AFIRMACIÓN ES VERDADERA
        consol.assert(7 < 5); //APARECE UN MENSAJE DE ERROR

    clear() Limpia la consola, es decir quita todas las líneas de código que hayamos escrito en la consola.
    
        console.clear();

    error() Muestra un mensaje de error en la consola Web.

        console.error("Che CAPO, ¿Qué hiciste?"); //Che CAPO, ¿Qué hiciste?

    info() Emite un mensaje informativo a la Consola Web. En Firefox y Chrome se muestra un pequeño 
    icono "i" junto a estos elementos en el registro de la Consola Web.

        console.info("Che muy bien tu trabajo eh, pero ya no se usa más");
        // Che muy bien tu trabajo eh, pero ya no se usa más

    log() Muestra un mensaje en la consola web (o del intérpreteser un JS)

         console.log("Che muy bien tu trabajo eh, pero ya no se usa más");
        // Che muy bien tu trabajo eh, pero ya no se usa más

            NOTA: La diferencia entre los 2 es que console.info() es para mostrar un mensaje
            informativo, mientras que console.log() es un mensaje de depuración.
    
    table() Ésta función toma un argumento obligatorio: data, que debe ser un array o un objeto,
    y un parámetro adicional: columns y nos muestra una tabla en consola.
    
        console.table([4,5,64,4,3,2]); //Y nos muestra una tabla en consola

    warm() Imprime un mensaje de advertencia en la Consola Web.

        console.warn("CHE CAPO, VENÍS BIEN, PERO CUIDADO PORQUE...");
        //CHE CAPO, VENÍS BIEN, PERO CUIDADO PORQUE...

    dir() Despliega una lista interactiva de las propiedades del objeto JS especificado [NO ESTÁNDAR]

        console.dir([5,2,4,6,6]);
        //ARRAY
        5
        2
        4
        6
        6

*/

/*FUNCIONES DE CONTEO */

/*
    count() -Registra el número de veces que se llama a count(). Esta función toma como argumento
    opcional una etiqueta.

        console.count() //default: 1
        console.count() //default: 2

    countReset() -Resetea el contador.

        console.countReset();
*/

/*FUNCIONES DE AGRUPACION */

/*
    group() -Crear un nuevo grupo en línea en el registro de la consola web.

        console.group(); //SE CREA EL GRUPO
        console.group("frutas") //SE CREAR EL GRUPO CON NOMBRE DE FRUTAS

    groupEnd() -Remueve un grupo en línea en el registro de la consola web.

        console.groupEnd(); //ELIMINA EL GRUPO, ES DECIR PODEMOS PONER GRTUPOS DENTRO DE OTROS GRUPOS
                            Y QUITARLOS.

    groupCollased() -Crea un grupo en línea pero contraído, el usuario debe expandirlo para verlo.

        console.groupCollapsed();
        console.groupCollapsed("verduras"); //Y LO MUESTRA COLAPSADO
*/

/*FUNCIONES DE TEMPORIZACIÓN */

/*
    time() -Inicia un temporizador
    timeEnd() -Registra el valor actual de un temporizador.
    timeLog() -Detiene un temporizador.

        console.time(); //INICIA TEMPORIZADOR
        console.timeLog(); //MUESTRA EL TIEMPO TRANSCURRIDO
        console.timeEnd(); //Se detiene y muestra el tiempo final.
*/

/*TRUCO PARA MODIFICAR EL ESTILO DEL TEXTO EN CONSOLA "%c","css"*/

/*
    console.log("%crancio","color:red; background:black");
*/