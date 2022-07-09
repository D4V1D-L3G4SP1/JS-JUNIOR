/*EJEMPLO DE LA CREACIÓN DE UNA CLASE CON 3 OBJETOS ME PARECE QUE SE DICE ASÍ, PERO NO ESTOY MUY SEGURO*/

class Animal {
    constructor(especie,edad,color){
        this.especie = especie;
        this.edad = edad;
        this.color = color;
        this.info = `Soy ${this.especie}, tengo ${this.edad} años y soy de color ${this.color}`;
    }
    verInfo(){
        document.write(this.info + "<br>");
    }
    ladrar(){
        alert("¡WAW!");
    }
}
/*EJEMPLO DE HERENCIA*/
class Perro extends Animal {
    constructor(especie,edad,color,raza){
        super(especie,edad,color);
        this.raza = raza;
    }
    set setRaza(newName){
        this.raza = newName;
    }
    get getRaza(){
        return this.raza;
    }
}

const perro = new Perro("perro",5,"rojo","doberman");
const gato = new Animal("gato","2","negro");
const pajaro = new Animal("pajaro", "1", "marrón");


perro.verInfo();
gato.verInfo();
pajaro.verInfo();
/*Final del EJEMPLO */

perro.ladrar();
gato.ladrar();

perro.setRaza = "Pedro";
document.write(perro.getRaza);

document.write("<br>" + "---------------------------------");

/*EJEMPLO HERENCIA, dónde le estamos diciendo, la clase perroherencia, va a contener 
todo lo que contenga la clase animal, pero sólo le vamos a agregar unas cositas en específico*/
/*
class Perro extends Animal {
    constructor(especie,edad,color,raza){
        super(especie,edad,color);
        this.raza = raza;
    }
    ladrarHerencia(){
        alert("WAW");
    }
}
const perroherencia = new Animal("perro","5","rojo","doberman");
perroherencia.ladrarHerencia();
gato.ladrarHerencia();

/*EJEMPLO DE POLIFORMISMO*/
/*
class animal1 {
    constructor(especie,edad,color){
        this.especie1 = especie;
        this.edad1 = edad;
        this.color1 = color;
        this.info1 = `Soy ${this.especie}, tengo ${this.edad} años y soy de color ${this.color}`;
    }
    verInfo1(){
        document.write(this.info1 + "<br>");
    }
    ladrar1(){
        if (this.especie1 == "perro") {
            document.write("<br>" + "WAW" + "<br>");
        } else {
            document.write(`No puede ladrar, ya que es`+ this.especie1 + "<br>");
        }
    }
}

const perro1 = new animal1("perro","5","rojo");
const gato1 = new animal1("gato","2","negro");
const pajaro1 = new animal1("pajaro", "1", "marrón");

perro1.ladrar1();
gato1.ladrar1();
pajaro1.ladrar1();
/*FINAL EJEMPLO DE POLIFORMISMO*/





