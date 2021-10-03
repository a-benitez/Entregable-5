//
//
//
//Constructor 

class Obra{
    constructor(nombre, duracion, clasificacion, modalidad){
        this.name = nombre.toLowerCase();
        this.time = duracion;
        this.type = clasificacion;
        this.mode = modalidad;
    }
    asistir(){
        let funcion = prompt("Ingresar nombre de la obra ");
        alert("Esta obra está clasificada como " + ( this.type ) + " y dura " + ( this.time ) + " la modalidad disponible es " + (this.mode));
    }
}
let obra1 = new Obra("Claudia en la montaña", "80 minutos ", "+18", " online");
obra1.asistir();
let obra2 = new Obra("Marchita", "40 minutos ", "+18", " pesencial con protocolos");
obra2.asistir();
let obra3 = new Obra("Discépolo: Las casas", "30 minutos ", "ATP", " presencial con protocolos");
obra3.asistir();
let obra4 = new Obra("Alfonsina dispuesta a todo", "120 minutos ", "+18", " online");
obra4.asistir();
