class celular {
    constructor(color,peso,resolucion,camara,ram){
        this.color = color;
        this.peso = peso;
        this.resolucion =  resolucion;
        this.camara = camara;
        this.ram = ram;
    }
    mobileinfo(){
        return `
        Color: <b>${this.color}</b><br>
        Peso: <b>${this.peso}</b><br>
        Resolución: <b>${this.resolucion}</b><br>
        Cámara y Vídeo: <b>${this.camara}</b><br>
        Memoria RAM: <b>${this.ram}</b><br>`
    }
    encender(){
        return ("El celular Prende");
    }

    apagar(){
        return ("El celular se apaga");
    }

    reiniciar(){
        return ("El celular se reinicia");
    }

    tomarFotos(){
        return ("El celular puede tomar Fotos");
    }

    grabar(){
        return ("El celular puede grabar");
    }


}
/*AQUÍ APLICAMOS HERENCIA*/

class lgg8xthinq extends celular {
    constructor(color,peso,resolucion,camara,ram){
        super(color,peso,resolucion,camara,ram);
    }
    slowMotion(){
        return("Además el celular puede grabar en cámara lenta");
    }

    reconocimientoFacial(){
        return("Es un gama alta, ya que posee reconocimiento facial");
    }

    tomarFotosCamaraExtra(){
        return("Toma fotos con otra camara extra");
    }
}

class iphonexr extends celular {
    constructor(color,peso,resolucion,camara,ram){
        super(color,peso,resolucion,camara,ram);
    }
    slowMotion(){
        return("Además el celular puede grabar en cámara lenta");
    }

    reconocimientoFacial(){
        return("Es un gama alta, ya que posee reconocimiento facial");
    }

    tomarFotosCamaraExtra(){
        return("Toma fotos con otra camara extra");
    }
}

class samsungs22 extends celular {
    constructor(color,peso,resolucion,camara,ram){
        super(color,peso,resolucion,camara,ram);
    }
    slowMotion(){
        return("Además el celular puede grabar en cámara lenta");
    }

    reconocimientoFacial(){
        return("Es un gama alta, ya que posee reconocimiento facial");
    }

    tomarFotosCamaraExtra(){
        return("Toma fotos con otra camara extra");
    }
}

const lg = new lgg8xthinq("Negro","180gr","FHD","12MP Estandar /n 13MP Ángulo Amplio","6GB");
const iphone = new iphonexr("rojo","194gr","LCD","12MP Gran Angular", "4GB");
const samsung = new samsungs22("negro","227gr","AMOLED","12MP","12GB");

let opcion = prompt("Selecciona un número \n 1:Muestrame todos los telefonos \n 2:Muestrame el LG \n 3:Muestrame el iphone \n 4:Muestrame el Samsung");
if (opcion == 1) {
    document.write(`
    lgg8xthinq: <br> 
        ${lg.encender()} <br>
        ${lg.reiniciar()} <br>
        ${lg.tomarFotos()} <br>
        ${lg.grabar()} <br>
        ${lg.slowMotion()} <br>
        ${lg.reconocimientoFacial()} <br>
        ${lg.tomarFotosCamaraExtra()} <br>
        ${lg.mobileinfo()} <br>
    iphonexr: <br>
        ${iphone.encender()} <br>
        ${iphone.reiniciar()} <br>
        ${iphone.tomarFotos()} <br>
        ${iphone.grabar()} <br>
        ${iphone.slowMotion()} <br>
        ${iphone.reconocimientoFacial()} <br>
        ${iphone.tomarFotosCamaraExtra()} <br>
        ${iphone.mobileinfo()} <br>
    samsungs22: <br>
        ${samsung.encender()} <br>
        ${samsung.reiniciar()} <br>
        ${samsung.tomarFotos()} <br>
        ${samsung.grabar()} <br>
        ${samsung.slowMotion()} <br>
        ${samsung.reconocimientoFacial()} <br>
        ${samsung.tomarFotosCamaraExtra()} <br>
        ${samsung.mobileinfo()} <br>
    `);
} else if (opcion == 2){
    document.write(`
    lgg8xthinq: <br> 
        ${lg.encender()} <br>
        ${lg.reiniciar()} <br>
        ${lg.tomarFotos()} <br>
        ${lg.grabar()} <br>
        ${lg.slowMotion()} <br>
        ${lg.reconocimientoFacial()} <br>
        ${lg.tomarFotosCamaraExtra()} <br>
        ${lg.mobileinfo()} <br>`);
} else if (opcion == 3){
    document.write(`
    iphonexr: <br>
        ${iphone.encender()} <br>
        ${iphone.reiniciar()} <br>
        ${iphone.tomarFotos()} <br>
        ${iphone.grabar()} <br>
        ${iphone.slowMotion()} <br>
        ${iphone.reconocimientoFacial()} <br>
        ${iphone.tomarFotosCamaraExtra()} <br>
        ${iphone.mobileinfo()} <br>`);
} else if (opcion == 4){
    document.write(`
    samsungs22: <br>
        ${samsung.encender()} <br>
        ${samsung.reiniciar()} <br>
        ${samsung.tomarFotos()} <br>
        ${samsung.grabar()} <br>
        ${samsung.slowMotion()} <br>
        ${samsung.reconocimientoFacial()} <br>
        ${samsung.tomarFotosCamaraExtra()} <br>
        ${samsung.mobileinfo()} <br>`);
} else {
    alert("Escoge un número del 1 al 4");
}
