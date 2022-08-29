/*
EL DOM (Document Object Model)
    Es cómo una interfaz que contiene todos los objetos estándares que nos permiten representar un Documento HTML, XML, XHTML
    que a su vez tiene otra interfaz para decir que cosas combina con cada cosa y otra que nos permite trabajarla con un
    lenguaje como Javascript.

    NODO:
        Un nodo en el DOM es cualquier etiqueta del cuerpo, como un párrafo, el mismo body o incluso las etiquetas en una lista.
            Nota: Los nodos no son siempre etiquetas a veces suelen ser otro tipo de elementos.

    NODO*DOCUMENT:
        El nodo Document es el nodo raíz, a partir del cuál derivan el resto de nodos.
    
    NODO*ELEMENT:
        Nodo definido por etiquetas html, es decir una etiqueta crea un nodo, pero no todos los nodos son etiquetas...
        son cosas diferentes.

    NODO*TEXT:
        El texto dentro de un nodo element se considera un nuevo nodo hijo del tipo text (texto).
            <h1>NODOTEXT</h1>

    NODO*ATTRIBUTE:
        Los atributos de las etiquetas definen nodos, (en JS no los veremos como nodos, sino como informacióm asociada 
            al nodo de tipo element).

    NODO*COMENTARIOS Y OTROS:
        Los comentarios y otros elementos como las declaraciones DOCTYPE en cabecera de los documentos HTML generan nodos.


********************************************************************
document.Métodos de selección de elementos 

getElementById() -Selecciona un elemento por ID.
        HTML
            <p id="parrafo">Seguime En SoyDalto</p>
        JS
            parrafo = document.getElementById("parrafo");
            document.write(parrafo);
        Vista
            [object HTMLParagraphElement]

getElementsByTagName() -Selecciona todos los elementos que coincidan con el nombre de la etiqueta especificada.
        HTML
            <p id="parrafo">Seguime En SoyDalto</p>
            <p id="parrafo">Seguime En SoyDalto</p>
        JS
            parrafo = document.getElementsByTagName("p");
            document.write(parrafo[0]);
        Vista
            [object HTMLCollection]    

querySelector() -Devuelve el 1er elemento que coincida con el grupo especificado de selectores.
        HTML
            <p class="parrafo">Seguime...</p>
        JS
            parrafo = document.querySelector(".parrafo");
            document.write(parrafo);
        HTML        
            <p id="rancio">Cualquier cosa</p>
        JS    
            parrafo = document.querySelector("#rancio");
            document.write(parrafo);
        Vista    
        [object HTMLParagraphElemenet]    

querySelectorAll() -Devuelve todos los elementso que coincidan con el grupo especificado de selectores.
        HTML
            <p id="rancio">Cualquier cosa</p>
            <p id="rancio">Cualquier cosa</p>
            <p id="rancio">Cualquier cosa</p>
            <p id="rancio">Cualquier cosa</p>
        JS
            parrafo = document.querySelectorAll("#rancio");
            document.write(parrafo);
            o también es posible escribir:
            document.write(parrafo[4])
            [object Nodelist]


********************************************************************
Métodos para Definir, Obtener y Eliminar atributos

setAttribute() - Modifica el valor de un atributo.
        HTML
            <input type="range" class="rangoEtario">
            <label>Rango De Edad</label>
        JS
            const rangoEtario = document.querySelector(".rangoEtario");
            rangoEtario.setAttribute("type","rancio");
        Vista    
            Le presionamos Inspeccionar
            y efectivamente vemos que el atributo type fue modificado.

getAttribute() - Obtiene el valor de un atributo.
        HTML
            <input type="range" class="rangoEtario">
            <label>Rango De Edad</label>            
        JS
            const rangoEtario = document.querySelector(".rangoEtario");
            document.write(rangoEtario.getAttribute("type"));
        Vista
            Muestra de que type es, en éste caso de range
            
removeAttribute() - Remueve el valor de un atributo.
        HTML
            <input type="range" class="rangoEtario">
            <label>Rango De Edad</label>
        JS
            const rangoEtario = document.querySelector(".rangoEtario");
            valorDelAtributo = rangoEtario.removeAttribute("type");
        Vista
            Le presionamos Inspeccionar
            y efectivamente vemos que el atributo type fue modificado.

********************************************************************

Atributos Globales
Son los atributos globales los que contienen todos los elementos en común, todos los elementos HTML
tienen éstos atributos.

contentEditable - Indica si el elemento puede ser modificable por el usuario (booleano).
      HTML
        <h1 class="titulo">Éste es un título</h1>      
      JS  
        const titulo = document.querySelector(".titulo");
        titulo.setAttribute("contentEditable","true");    
            Pero si le ponemos false no te deja modificarlo
      Vista
            En ésta ocasión, si hacemos clic sobre el texto 
            vamos a ver que lo podremos modificar, además si presionamos enter 
            y si lo vemos en Inspeccionar percibiremos que nos crea divs de forma dinámica.

dir - Indica la direccionalidad del texto.
    HTML
        <h1 class="titulo">Éste es un título</h1>      
    JS  
        const titulo = document.querySelector(".titulo");
        titulo.setAttribute("dir","rtl");    //rtl= right to left // ltr=left to right
    Vista
        Se cambia la dirección del texto dependiendo de lo que le hayamos puesto.

hidden - Indica si el elemento aún no es, o ya no es, relevante.
    HTML
        <h1 class="titulo">Éste es un título<h1>
    JS
        const titulo = document.querySelector(".titulo");
        titulo.setAttribute("hidden","true");   
    Vista
        Se oculta al elemento independientemente si es true o false.

tabindex - Indica si el elemento puede obtener un focus de input, es útil para cuando hagamos
formularios, es decir agregamos valores númericos tabindex="1" para indicarle el orden en que
la tecla Tab siga.
    HTML
        <h1 class="titulo">Éste es un título<h1>
    JS
        const titulo = document.querySelector(".titulo");
        titulo.setAttribute("tabindex","2"); //Debe de ir un número para seguir 

title - Contiene un texto con información relacionada al elemento al que pertenece, 
es decir al pasar el mouse por encima se muestra esa información.
    HTML
        <h1 class="titulo">Éste es un título<h1>
    JS
        const titulo = document.querySelector(".titulo");
        titulo.setAttribute("title","jajajajajajaja xd");


********************************************************************
ATRIBUTOS DE INPUTS

className - Muestra el nombre de la clase.
    HTML
        <input type="text" class="input-normal">
    JS
        const input = document.querySelector(".input-normal");
        document.write(input.className);

value -Dice el valor del input.
    HTML
        <input type="text" class="input-normal">
    JS
        const input = document.querySelector(".input-normal");
        document.write(input.value);

type -Dice el tipo de input.
    HTML
        <input type="text" class="input-normal">
    JS
        const input = document.querySelector(".input-normal");
        document.write(input.type = "number");

accept -Se usa para los input type="file" ya que se hace una especie de validación.
        Haciendo así que se nos abra el explorador de archivos buscando archivos por ejemplo .png.
    HTML
        <input type="file" class="input-normal">
    JS
        const input = document.querySelector(".input-normal");
        input.accept = "image/png";

form -Funciona para hacer un input parte de un formulario que no esté dentro de las 
     etiquetas <form></form>
     HTML
        <form id="formulario">
            <input type="text" name="">
            <input type="submit" name="">
        </form>
            <input type="submit" form="formulario">

            NOTA;***REcordemos que una etiqueta form que contenga un input de type="submit"
            lo que hace es enviar los valores del formulario a un Servidor.

minLength -Atributo que nos permite especificar cuántos caracteres son los mínimos requeridos para enviar
            el formulario.
    HTML
        <form>
            <input type="text" id="input-normal" minlength="4">
            <input type="submit">
        </form>
            NOTA:***Sí éste atributo lo usamos desde JS tendremos que hacer uso del CamelCase.

placeholder -Añade un texto dentro del recuadro del input.
    HTML
        <form>
            <input type="text" class="input-normal" minlength="4">
            <input type="submit">
        </form>
    JS
        const input = document.querySelector(".input-normal");
        input.placeholder = "A QUE NO PUEDES ESCRIBIR";

required -Atributo que nos permite especificar si el campo es requerido o no.
    HTML
        <form>
            <input type="text" class="input-normal" minlenght="4">
            <input type="submit">
        </form>
    JS
        const input = document.querySelector(".input-normal");
        input.required = " ";


********************************************************************
ATRIBUTO GLOBAL: STYLE = Modificar el estilo.
    HTML
        <h1 class="titulo">Elemento a Modificar</h1>
    JS
        const titulo = document.querySelector(".titulo");
        titulo.style.color = "#32b"; ->Azul Oscuro

    Otro ejemplo codigo js:

        const titulo = document.querySelector(".titulo");
        titulo.style.backgroundColor = "#32b"; ->Azul Oscuro
                                Podemos observar que se hace uso del CamelCase.

********************************************************************
CLASES, classList y Métodos de ClassList

add() -Añade una clase.
    HTML
        <h1 class="titulo">Elemento a Modificar</h1>
    JS
        const titulo = document.querySelector(".titulo");
        titulo.classList.add("grande");

remove() -Remueve una clase.
    HTML
        <h1 class="titulo chiquito">Elemento a Modificar</h1>
    JS
        const titulo = document.querySelector(".titulo");
        titulo.classList.remove("chiquito");}
        HTML
        <h1 class="titulo">Elemento a Modificar</h1>
                ----->Como podemos ver se quita la clase chiquito.

item() -Devuelve la clase del índice específicado, pero no para modificar las clases.
    HTML
        <h1 class="titulo chiquito rojo">Elemento a Modificar</h1>
    JS
        const titulo = document.querySelector(".titulo");
        valor = titulo.classList.item(1);
        document.write(valor); // Y nos muestra la clase "chiquito"

contains() -Verifica si ese elemento posee o no, la clase especificada. TRUE O FALSE
    HTML
        <h1 class="titulo chiquito">Elemento a Modificar</h1>
    JS
        const titulo = document.querySelector(".titulo");
        valor = titulo.classList.contains("chiquito");

    if (valor) {
        document.write("La clase existe"); /// --->Arrojando la siguiente sentencia porque la clase si existe
    } else {
        document.write("La clase NO EXISTE");
    }

toggle() -Si no tiene la clase especificada, la agrega, si ya la tiene la elimina.
    HTML
        <h1 class="titulo chiquito">Elemento a Modificar</h1>
    Js
        const titulo = document.querySelector(".titulo");
        nombreDEClase = "chiquito";
        let valor = titulo.classList.contains(nombreDeClase);

        titulo.classList.toggle("chiquito"); //Como ya la tiene, la elimina.
    HTML MODIFICADO
        <h1 class="titulo chiquito">Elemento a Modificar</h1>

    DE igual forma posee otro parámetro,

        titulo.classList.toggle("chiquito",true); //En caso de que la tenga, no va a retirar la clase.
        titulo.classList.toggle("chiquito",false); //Siempre saca la clase.

replace() -Reemplaza una clase por otra.
    HTML
        <h1 class="titulo grande">Elemento a MOdificar</h1>
    JS
        const titulo = document.querySelector(".titulo");
        let valor = titulo.classList.replace("grande","chico"); //Reemplaza la clase grando por chiquito.
    
********************************************************************
OBTENCIÓN Y MODIFICACIÓN DE ELEMENTOS

textContent -Devuelve el texto de cualquier nodo. OJOOOOO DEvuelve solo el texto no el HTML
    HTML
        <p class="titulo">Elemento a <b>Modificar</b></p>
    JS
        const titulo = document.querySelector(".titulo");
        let resultado = titulo.textContent;
        document.write(resultado);

innerHTML -Devuelve el contenido HTML de un elemento.
    HTML
        <p class="titulo">Elemento a <b>MOdificar</b></p>
    JS
        const titulo = document.querySelector(".titulo");
        let resultado = titulo.innerHTML;
        alert(resultado); //Nos muestra elemento a <b>Modificar</b>

outerHTML -Devuelve el código HTML completo del elemento.
    HTML
        <p class="titulo">Elemento a <b>MOdificar</b></p>
    JS
        const titulo = document.querySelector(".titulo");
        let resultado = titulo.outerHTML;
        alert(resultado); //Nos muestra <p class="titulo">Elemento a <b>MOdificar</b></p>


********************************************************************
CREACIÓN DE ELEMENTOS
createElements()
    HTML
        <div class="contenedor"></div>
    JS
        const contenedor = document.querySelector(".contenedor");
        const item = document.createElement("LI"); ->IMportante el elemento a ser creado debe ser en mayúsculas.

createTextNode() Es un método que se aplica al padre, pero toma como párametro al hijo.
    HTML
        <div class="contenedor"></div>
    JS
        const contenedor = document.querySelector(".contenedor");
        const item = document.createElement("LI");
        const textDelItem = document.createTextNode("Este es un item de la lista");
        item.innerHTML = textDelItem;
        console.log(item);

        appendChild() ->Método para acceder a los hijos.
            HTML
                <div class="contenedor"></div>
            JS
                const contenedor = document.querySelector(".contenedor");
                const item = document.createElement("LI");
                const textDelItem = document.createTextNode("Este es un item de la lista");
                item.appendChild(textDelItem);
                console.log(item);

createDocumentFragment() ->Método usado para ahorrar recursos del navegador.
    HTML
        <div class="contenedor"></div>
    JS
        const contenedor = document.querySelector(".contenedor");
        const fragmento = document.createDocumentFragment();

        for (i=0; i < 20; i++){
            const item = document.createElement("LI");
            item.innerHTML = "Este es un item de la lista";
            fragmento.appendChild(item);
        }

        contenedor.appendChild(fragmento);
        console.log(contenedor);

********************************************************************
OBTENCIÓN Y MODIFICACIÓN DE CHILDS (HIJOS)
    HTML
        <div class="contenedor">
            <h2>Un título común</h2>
            <h4>Un h4 común</h4>
        </div>
    JS

firstChild - Selecciona al 1er hijo del contenedor padre.
        const contenedor = document.querySelector(".contenedor");
        const primerHijo = contenedor.firstChild;
        console.log(primerHijo);

lastChild -Selecciona al último hijo del contenedor padre.
        const contenedor = document.querySelector(".contenedor");
        const ultimoHijo = contenedor.lastChild;
        console.log(ultimoHijo);

firstElementChild -Selecciona al 1er elemento hijo.
        const contenedor = document.querySelector(".contenedor");
        const primerElementoHijo = contenedor.firstElementChild;
        console.log(primerElementoHijo);

lastElementChild -Selecciona al último elemento hijo.
        const contenedor = document.querySelector(".contenedor");
        const ultimoElementoHijo = contenedor.lastElementChild;
        console.log(ultimoElementoHijo);

childNodes - DEvuelve todos los nodos hijos. NOTA: NO ES UN ARRAY.}
        const contenedor = document.querySelector(".contenedor");
        const hijos = contenedor.childNodes;
        console.log(hijos); //NOS MUESTRA A TODOS LOS HIJOS
        console.log(hijos[0]); //NOS MUESTRA AL 1ER ELEMENTO DE LOS HIJOS.

children - Devuelve sólo las etiquetas HTML.
        const contenedor = document.querySelector(".contenedor");
        const hijos = contenedor.children;

        for (hijo in hijos){
            console.log(hijo); //FOR IN NOS MUESTRA LOS ÍNDICES.
        }

        for (hijo of hijos){
            console.log(hijo); //FOR OF NOS MUESTRA LOS ELEMENTOS EN SÍ.
        }

********************************************************************
Métodos de Childs
    HTML
        <div class="contenedor">
            <h2 class="h2">Un H2 común</h2>
            <h4>Un h4 común</h4>
            <p>Un simple párrafo</p>
        </div>
    JS
replaceChild() -Reemplaza un hijo.
        const contenedor = document.querySelector(".contenedor");

        const parrafo = document.createElement("P").innerHTML = "Párrafo";
        const h2_nuevo = document.createElement("H2");
        h2_nuevo.innerHTML = "Titulo";

        h2_antiguo = document.querySelector("h2");

        contenedor.replaceChild(h2_nuevo,h2_antiguo);

removeChild() -Remueve el que no queremos.
        const contenedor = document.querySelector(".contenedor");

        const parrafo = document.createElemente("P").innerHTML = "Párrafo";
        const h2_nuevo = document.createElement("H2");
        h2_nuevo.innerHTML = "Titulo";

        h2_antiguo = document.querySelector("h2");

        contenedor.removeChild(h2_antiguo);

hasChildNodes() -Para verificar si tiene un elemento hijo o no.
        const contenedor = document.querySelector(".contenedor");

        const parrafo = document.createElement("P").innerHTML = "Párrafo";
        const h2_nuevo = document.createElement("H2");
        h2_nuevo.innerHTML = "Titulo";

        const h2_antiguo = document.querySelector(".h2");
        let respuesta = h2_antiguo.hasChildNodes();
        if (respuesta){
            document.write("El elemento tiene hijos");
        } else {
            document.write("El elemento NO tiene hijos");
        }
********************************************************************
PROPIEDADES DE PARENTS (PADRES)
    HTML
        <body>
            <div class="contenedor">
                <h2>Un h2 común</h2>
                <h4>Un h4 común</h4>
                <p>Un simple párrafo</p>
            </div>
        </body>
    JS

parentElement() -Selecciona el Padre elemento dónde busca etiquetas HTML.
        const contenedor = document.querySelector(".contenedor");
        const parrafo = document.createElement("P").innerHTML = "Párrafo";
        const h2_nuevo = document.createElement("H2");
        const h2_antiguo = document.querySelector(".h2");
        console.log(h2_antiguo.parentElement);

parentNode() -Lo que hace es elegir el padre Node, el padre Nodo, es decir,
    selecciona el padre de un Elemento, no necesariamente etiquetas HTML.
        const contenedor = document.querySelector(".contenedor");
        const parrafo = document.createElement("P").innerHTML = "Párrafo";
        const h2_nuevo = document.createElement("H2");
        const h2_antiguo = document.querySelector(".h2");
        console.log(h2_antiguo.parentNode);


********************************************************************
PROPIEDADES DE SIBLINGS (HERMANOS)
    HTML
        <div class="contenedor">
            <h2>Un h2 común</h2>
            <h4>Un h4 común</h4>
            <p>Un simple párrafo</p>
        </div>
    JS
nextSibling -Arroja el siguiente nodo.
        const contenedor = document.querySelector(".contenedor");
        const parrafo = document.createElement("P").innerHTML = "Párrafo";
        const h2_nuevo = document.createElement("H2");
        const h2_antiguo = document.querySelector(".h2");
        console.log(contenedor.nextSibling);

previousSibling -Arroja el último nodo.
        const contenedor = document.querySelector(".contenedor");
        const parrafo = document.createElement("P").innerHTML = "Párrafo";
        const h2_nuevo = document.createElement("H2");
        const h2_Antiguo = document.querySelector(".h2");
        console.log(contenedor.previousSibling);

nextElementSibling -Arroja el elemento más alejado.
        const contenedor = document.querySelector(".contenedor");
        const parrafo = document.createElement("P").innerHTML = "Párrafo";
        const h2_nuevo = document.createElement("H2");
        const h2_antiguo = document.querySelector(".h2");
        console.log(contenedor.nextElementSibling); //<p>Un simple párrafo</p>

previousElementSibling -Arroja el elemento anterior.
        const contenedor = document.querySelector(".contenedor");
        const parrafo = document.createElement("P").innerHTML = "Párrafo";
        const h2_nuevo = document.createElement("H2");
        const h2_antiguo = document.querySelector(".h2");
        console.log(contenedor.previousElementSibling); //<h4>Un h4 común</h4>

NODOS - EXTRAS
    closest() -Selecciona el elemento ascendente más cercano que coincida con nuestro
    selector, es decir busca el contenedor más cercano, en otras palabras, busca al
    contenedor que contenga ese elemento más cercano.
        HTML
            <div class="div">
                DIV 1
                    <div class="div">
                        DIV 2
                            <div class="div-3"></div>
                    </div>
            </div>
        JS
        const div = document.querySelector(".div-3");
        console.log(div.closest(".div")); --->PODEMOS OBSERVAR QUE SE TRABAJA CON SELECTORES
        ARROJANDO ASÍ A LA CONSOLA:
            <div class="div">
                ..
                    DIV 2
                        ..
                    <div class="div-3"></div>
            </div>

 */
const input = document.querySelector(".input-normal");
input.required = " ";