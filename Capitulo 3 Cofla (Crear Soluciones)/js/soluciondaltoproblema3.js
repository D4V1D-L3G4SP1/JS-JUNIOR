class App {
	constructor(descargas,puntuacion,peso){
		this.descargas = descargas;
		this.puntuacion = puntuacion;
		this.peso = peso;
		this.iniciada = false;
		this.instalada = false;
	}
	
	instalar(){
		if (this.instalada == false) {
			this.instalada = true;
			alert("app instalada correctamente")
		}
	}
	desinstalar(){
		if (this.instalada == true) {
			this.instalada = false;
			alert("app desinstalada correctamente");
		}
	}
	abrir(){
		if (this.iniciada == false && this.instalada == true) {
			this.iniciada = true;
			alert("app iniciada");
		}
	}
	cerrar(){
		if (this.iniciada == true && this.instalada == true) {
			this.iniciada = false;
			alert("app cerrada");
		}
	}

	appInfo(){
		return `
		Descargas: <b>${this.descargas}</b></br>
		Puntuacion: <b>${this.puntuacion}</b></br>
		Peso: <b>${this.peso}</b></br>
		`
	}

}


const app = new App("16.000","5 estrellas","900mb");
const app2 = new App("1.000","4 estrellas","400mb");
const app3 = new App("6.000","4.5 estrellas","100mb");
const app4 = new App("23.000","4.8 estrellas","1gb");
const app5 = new App("900","5 estrellas","250");
const app6 = new App("17","3.7 estrellas","522mb");
const app7 = new App("42.981","2.9 estrellas","723mb");


document.write(`
	${app.appInfo()} <br>
	${app2.appInfo()} <br>
	${app3.appInfo()} <br>
	${app4.appInfo()} <br>
	${app5.appInfo()} <br>
	${app6.appInfo()} <br>
	${app7.appInfo()} <br>
	`);