class Celular {
    constructor(color,peso,tamaño,rdc,ram){
        this.color = color;
        this.peso = peso;
        this.tamaño = tamaño;
        this.resolucionDeCamara = rdc;
        this.memoriaRam = ram;
        this.encendido = false;
    }

    presionarBotonEncendido(){
        if (this.encendido == false) {
            alert("Celular prendido");
            this.encendido = true;
        } else {
            alert("Celular apagado");
            this.encendido = false;
        }
    }

    reiniciar(){
        if(this.encendido == true) {
            alert("Reiniciando celular");
        } else {
            alert("El celular está apagado");
        }
    }

    tomarFoto(){
        alert(`Foto tomada en una resolución de: ${this.resolucionDeCamara}`);
    }

    grabarVideo(){
        alert(`Grabando vídeo en ${this.resolucionDeCamara}`);
    }

    mobileinfo(){
        return `
        Color: <b>${this.color}</b><br>
        Peso: <b>${this.peso}</b><br>
        Tamaño: <b>${this.tamaño}</b><br>
        Resolución de Cámara y Vídeo: <b>${this.resolucionDeCamara}</b><br>
        Memoria RAM: <b>${this.memoriaRam}</b><br>`
    }
}

/*Aplicamos herencia */
class CelularAltaGama extends Celular {
    constructor(color,peso,tamaño,rdc,ram,rdce){
        super(color,peso,tamaño,rdc,ram);
        this.resolucionDeCamaraExtra = rdce;
    }
    grabarVideoLento(){
        document.write("EStás grabando en cámara lenta");
    }
    reconocimientoFacial(){
        document.write("Vamoss a iniciar un reconocimiento facial");
    }
    infoAltaGama(){
        return this.mobileinfo() + `Resolución de Cámara extra: ${this.resolucionDeCamaraExtra}` + "<br>";
    }
}
const celular1 = new Celular("rojo","150gr","5'","hd","1GB");
const celular2 = new Celular("negro","155gr","5.4'","full hd","2GB");
const celular3 = new Celular("blanco","146gr","5.9'","full hd","2GB");

const celular4 = new CelularAltaGama("ROJO","130gr","5.2","4k","3gb","FULL HD");
const celular5 = new CelularAltaGama("Negro","142gr","6","4k","4gb", "HD");

document.write(`
    ${celular1.mobileinfo()} <br>
    ${celular2.mobileinfo()} <br>
    ${celular3.mobileinfo()} <br>
    
    ${celular4.infoAltaGama()} <br>
    ${celular5.infoAltaGama()} <br>
`);