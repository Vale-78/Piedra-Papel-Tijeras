let eleccionJugador;
let jugadaCompu;
let resultado;
let piedra = "piedra";
let papel = "papel";
let tijeras= "tijeras";



// disable desabilitar botones
// display NamedNodeMap, display block

function saludarUsuario() {
    let nombre = document.getElementById("nombreUsuario").value;
    document.getElementById("saludoUsuario").innerHTML = "Bienvenida/o " + nombre + " !" + "<br/> Si estás lista/o para comenzar, inicia Juego!";
}
// function aleatorio(min,max) {
//     return Math.floor(Math.random()*(max-1+1)+min);
// }
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
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
         eleccionJugador = piedra;
         document.getElementById("eleccionJugador").innerHTML = "Elegiste Piedra 🪨"
        //  console.log(eleccionJugador);
         JugadaComputadora(); 
         determinarGanador();
        });
    botonPapel.addEventListener("click", ()=> {
         eleccionJugador = papel;
         document.getElementById("eleccionJugador").innerHTML = "Elegiste Papel 🧻"
        //  console.log(eleccionJugador);
         JugadaComputadora();
         determinarGanador();
        });
        
    botonTijeras.addEventListener("click", ()=> {
        eleccionJugador = tijeras;
        document.getElementById("eleccionJugador").innerHTML = "Elegiste Tijeras ✂️"
        // console.log(eleccionJugador);
        JugadaComputadora();
        determinarGanador();
    });  
    
    return eleccionJugador;   
}

function JugadaComputadora(){
    let eleccionAleatoria = getRandomInt(3);
    console.log(eleccionAleatoria);

    if(eleccionAleatoria == 0){
        jugadaCompu = piedra;
        // console.log(jugadaCompu);  
        // console.log(typeof(jugadaCompu));
        document.getElementById("eleccionCompu").innerHTML = "La compu eligió Piedra 🪨";

    } else if(eleccionAleatoria == 1) {
        jugadaCompu = papel;
        document.getElementById("eleccionCompu").innerHTML = "La compu eligió Papel 🧻";
        // console.log(jugadaCompu); 
        // console.log(typeof(jugadaCompu));
    } else {
        jugadaCompu = tijeras;
        document.getElementById("eleccionCompu").innerHTML = "La compu eligió Tijeras ✂️";
        // console.log(jugadaCompu); 
        // console.log(typeof(jugadaCompu));
    }
 return jugadaCompu;
} 

function determinarGanador(eleccionJugador, jugadaCompu){
    
    if(eleccionJugador == jugadaCompu){
        document.getElementById("resultadoRonda").innerHTML = "Empate"
        resultado = "Empate";
        // console.log(resultado);
    }else if((eleccionJugador == "piedra" && jugadaCompu == "tijeras") || (eleccionJugador == "papel" && jugadaCompu == "piedra") || (eleccionJugador == "tijeras" && jugadaCompu == "papel")){
        document.getElementById("resultadoRonda").innerHTML = "Ganaste!!!"
        resultado = "Ganaste!!!";
        // console.log(resultado);
    }else{
        document.getElementById("resultadoRonda").innerHTML = "Gana la computadora"
        resultado = "Gana la computadora";
        // console.log(resultado);
    }
    console.log(resultado);
    console.log(typeof(resultado));
    return resultado;
    
}


// let compuElige = obtenerJugadaComputadora();
// let resultadoFinal = determinarGanador(eleccionJugador,compuElige );
// console.log(`La computadora eligió: ${jugadaCompu},`);
// console.log(`El usuario eligió: ${eleccionJugador},`);
// console.log(`El resultado fue: ${resultadoFinal}.`);