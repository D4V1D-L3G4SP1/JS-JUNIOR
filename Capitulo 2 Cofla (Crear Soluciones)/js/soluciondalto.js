let free = false;

const validarCliente = (time)=>{
    let edad = prompt("¿Cuál es tu edad?");
    if (edad >= 18) {
        if (time >= 2 && time < 7 && free == false){
            alert("Puedes pasar gratis porque sos la primera persona después de las 2am");
            free == true;
        } else {
            alert(`son las ${time}:00HRs y puedes pasar, pero tienes que pagar la entrada`);
        }
    } else {
        alert("Mira PAPU, sos menor de edad por ende te la pelaste y no vas a pasar");
    }
}

validarCliente(23);
validarCliente(24);
validarCliente(0.2);
validarCliente(0.6);
validarCliente(1);
validarCliente(2);
validarCliente(2.4);
validarCliente(3);