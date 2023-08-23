let eleccionJugador;
let posiblesJugadas = ["piedra", "papel","tijera"];
let piedra = posiblesJugadas[0];
let papel = posiblesJugadas[1];
let tijeras= posiblesJugadas[2];

// disable desabilitar botones
// display NamedNodeMap, display block



function saludarUsuario() {
    let nombre = document.getElementById("nombreUsuario").value;
    document.getElementById("saludoUsuario").innerHTML = "Bienvenida/o " + nombre + " !" + "<br/> Si estás lista/o para comenzar, inicia Juego!";
}

document.addEventListener("DOMContentLoaded", function (){
    let botonIniciarJuego= document.getElementById("startButtonJuego");
    botonIniciarJuego.style.display = "none";
    /* oculto boton reiniciar juego */
    let seccionReiniciar= document.getElementById("reiniciarJuego");
    seccionReiniciar.style.display = "none"

/* oculto iiconos para seleccionar jugada */
    let seccionSeleccionarJugada = document.getElementById("seleccionar-jugada");
    seccionSeleccionarJugada.style.display = "none";

    const botonComenzar = document.getElementById("startButton");
    botonComenzar.addEventListener("click", saludarUsuario, true);
    botonComenzar.addEventListener("click", iniciarJuego, true);
})

function iniciarJuego(){
    let botonSaludo= document.getElementById("startButton");
    botonSaludo.style.display = "none";

    let botonIniciarJuego= document.getElementById("startButtonJuego");
    botonIniciarJuego.style.display = "block";
   
    botonIniciarJuego.addEventListener("click", comenzar);
}

function comenzar (){
    let seccionSaludoInicial = document.getElementById("saludoContainer");
    seccionSaludoInicial.style.display = "none";

    let seccionSeleccionarJugada = document.getElementById("seleccionar-jugada");
    seccionSeleccionarJugada.style.display = "block";
    
    let botonPiedra = document.getElementById("piedra");
    let botonPapel = document.getElementById("papel");
    let botonTijeras = document.getElementById("tijeras");
    botonPiedra.addEventListener("click", ()=> {
         eleccionJugador = "piedra";
         document.getElementById("eleccion").innerHTML = "Elegiste Piedra" });
    botonPapel.addEventListener("click", ()=> {
         eleccionJugador = "papel";
         console.log(eleccionJugador);
         document.getElementById("eleccion").innerHTML = "Elegiste Papel"});
    botonTijeras.addEventListener("click", ()=> {
        eleccionJugador = "tijeras";
        document.getElementById("eleccion").innerHTML = "Elegiste Tijeras"
        console.log(eleccionJugador);});  
}





//  en esta ocasión, el usuario ingresará directamente piedra, papel o tijera (sim distinción de mayusculas
//  o minúsculas) y no su n° correspondiente

function random(min, max) {
    return Math.floor((Math.random() * (max - min + 1)) + min);
}
let aleatorio = random(0,2);
let jugadaCompu;

function obtenerJugadaComputadora(){
    if(aleatorio==0){
        jugadaCompu = piedra;
    } else if(aleatorio==1){
        jugadaCompu = papel;
    }else {
        jugadaCompu = tijeras;
    }
 return jugadaCompu;
}

// const readlineSync = require("readline-sync");
// const eleccionJugador = readlineSync.question("Elige : piedra, papel o tijeras: ").toLowerCase();

// // Elimino function obtenerJugadaUsuario() ya que ahora no es necesaria.        

// function determinarGanador(usuario,compu){
//     let resultado;
//     if(usuario===compu){
//         resultado = "Empate"
        
//     }else if((usuario===piedra && compu ===tijeras) || (usuario===papel && compu === piedra ) || (usuario===tijeras && compu === papel)){
//         resultado = "Gana el usuario";
//     }else{
//         resultado = "Gana la computadora";
//     }
//     return resultado
// }

// let compuElige = obtenerJugadaComputadora();
// let resultadoFinal = determinarGanador(eleccionJugador,compuElige );
// console.log(`La computadora eligió: ${jugadaCompu},`);
// console.log(`El usuario eligió: ${eleccionJugador},`);
// console.log(`El resultado fue: ${resultadoFinal}.`);