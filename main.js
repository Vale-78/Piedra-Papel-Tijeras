
// disable desabilitar botones
// display NamedNodeMap, display block


function saludarUsuario() {
    let nombre = document.getElementById("nombreUsuario").value;
    document.getElementById("saludoUsuario").innerHTML = "Bienvenido/a " + nombre + " !" + "<br/> Si estás listo para jugar, inicia Juego";
}

document.addEventListener("DOMContentLoaded", function (){
        const botonComenzar = document.getElementById('startButton');
        botonComenzar.addEventListener("click", saludarUsuario, true);
    })
    

// const piedra = "piedra";
// const papel = "papel";
// const tijeras = "tijeras";
// //  en esta ocasión, el usuario ingresará directamente piedra, papel o tijera (sim distinción de mayusculas
// //  o minúsculas) y no su n° correspondiente

// function random(min, max) {
//     return Math.floor((Math.random() * (max - min + 1)) + min);
// }
// let aleatorio = random(0,2);
// let jugadaCompu;

// function obtenerJugadaComputadora(){
//     if(aleatorio==0){
//         jugadaCompu = piedra;
//     } else if(aleatorio==1){
//         jugadaCompu = papel;
//     }else {
//         jugadaCompu = tijeras;
//     }
//  return jugadaCompu;
// }

// const readlineSync = require('readline-sync');
// const eleccionJugador = readlineSync.question('Elige : piedra, papel o tijeras: ').toLowerCase();

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