let eleccionJugador;
let jugadaCompu;
let resultado;
let piedra = "piedra";
let papel = "papel";
let tijeras= "tijeras";
let ganaPC = 0;
let ganaUsuario = 0;
let partidosJugados = 0;


// disable desabilitar botones
// display NamedNodeMap, display block

function saludarUsuario() {
    let nombre = document.getElementById("nombreUsuario").value;
    let saludoANombre =document.getElementById("saludoUsuario");
    
    if(nombre=="" || !(isNaN(nombre))){
        saludoANombre.innerHTML = "Ingresa un nombre válido";
        const botonComenzar = document.getElementById("startButton");
        botonComenzar.style.display = "block";
        const botonIniciarJuego= document.getElementById("startButtonJuego");
        botonIniciarJuego.style.display = "none";
    }else{
        saludoANombre.innerHTML = "Bienvenida/o " + nombre + " !" + "<br/> Si estás lista/o para comenzar, inicia Juego!"; 
        iniciarJuego();
    } 
}
document.addEventListener("DOMContentLoaded", function (){
    let botonIniciarJuego= document.getElementById("startButtonJuego");
    botonIniciarJuego.style.display = "none";
    /* oculto boton reiniciar juego */
    let seccionReiniciar= document.getElementById("reiniciarJuego");
    seccionReiniciar.style.display = "none";

/* oculto iiconos para seleccionar jugada */
    let seccionSeleccionarJugada = document.getElementById("seleccionar-jugada");
    seccionSeleccionarJugada.style.display = "none";

    const botonComenzar = document.getElementById("startButton");
    botonComenzar.addEventListener("click", saludarUsuario, true);
})

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

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
        let jugadaCOMPU = JugadaComputadora();
        determinarGanador(piedra, jugadaCOMPU);
        });
    botonPapel.addEventListener("click", ()=> {
        eleccionJugador = papel;
        document.getElementById("eleccionJugador").innerHTML = "Elegiste Papel 🧻"
        //  console.log(eleccionJugador);
        let jugadaCOMPU = JugadaComputadora();
        determinarGanador(papel, jugadaCOMPU);
        });
        
    botonTijeras.addEventListener("click", ()=> {
        eleccionJugador = tijeras;
        document.getElementById("eleccionJugador").innerHTML = "Elegiste Tijeras ✂️"
        // console.log(eleccionJugador);
        let jugadaCOMPU = JugadaComputadora();
        determinarGanador(tijeras, jugadaCOMPU);
    });  
    return eleccionJugador;   
}

function JugadaComputadora(){
    let eleccionAleatoria = getRandomInt(3);

    if(eleccionAleatoria == 0){
        jugadaCompu = piedra;
        document.getElementById("eleccionCompu").innerHTML = "La compu eligió Piedra 🪨";

    } else if(eleccionAleatoria == 1) {
        jugadaCompu = papel;
        document.getElementById("eleccionCompu").innerHTML = "La compu eligió Papel 🧻";
    } else {
        jugadaCompu = tijeras;
        document.getElementById("eleccionCompu").innerHTML = "La compu eligió Tijeras ✂️";
    }
return jugadaCompu;
} 

function determinarGanador(eleccionJugador, jugadaCompu){
    
    if(ganaPC < 3 && ganaUsuario < 3) { 
    const resultadoRondaParrafo = document.getElementById("resultadoRonda");
    let numGanaUsuario = document.getElementById("numeroGanaUsuario");
    let numGanaPC = document.getElementById("numeroGanaPC");
        
        if(eleccionJugador==jugadaCompu){
            resultado = "Empate";
            resultadoRondaParrafo.innerHTML = resultado;
            numGanaUsuario.innerHTML = ganaUsuario;
            numGanaPC.innerHTML= ganaPC;            
        }else if((eleccionJugador==piedra && jugadaCompu ==tijeras) || (eleccionJugador==papel && jugadaCompu == piedra ) || (eleccionJugador==tijeras && jugadaCompu == papel)){
            partidosJugados = partidosJugados +1;
            console.log(partidosJugados);
            ganaUsuario = ganaUsuario +1;
            resultado = "Ganaste!!!";
            resultadoRondaParrafo.innerHTML = resultado;
            numGanaUsuario.innerHTML = ganaUsuario;
            numGanaPC.innerHTML= ganaPC;
        }else{
            resultado = "Gana la computadora";
            partidosJugados = partidosJugados +1;
            console.log(partidosJugados);
            ganaPC = ganaPC +1;
            resultadoRondaParrafo.innerHTML = resultado;
            numGanaUsuario.innerHTML = ganaUsuario;
            numGanaPC.innerHTML= ganaPC;
        }  
  
    } if(ganaPC == 3 || ganaUsuario == 3) {
        let usuGana= ganaUsuario;
        let compuGana= ganaPC
        resultadoFinalfin( usuGana, compuGana);
    }
}

function resultadoFinalfin( ganaUsuario, ganaPC){
    let nombre = document.getElementById("nombreUsuario").value;
    let resultFinal = document.getElementById("resultFinal");

    if( ganaUsuario > ganaPC){
        resultFinal.innerHTML = `Felicitaciones ` + nombre + `,  Ganaste!!!!`
        // document.getElementById("Piedra").disabled = true;
        // document.getElementById("Papel").disabled = true;
        // document.getElementById("Tijeras").disabled = true;
    }else{
        resultFinal.innerHTML = ` Lo siento `  + nombre + `, Gana la Computadora.`
        // document.getElementById("Piedra").disabled = true;
        // document.getElementById("Papel").disabled = true;
        // document.getElementById("Tijeras").disabled = true;
    };
    let seccionReiniciar= document.getElementById("reiniciarJuego");
    seccionReiniciar.style.display = "block";      
    let resetJuego = document.getElementById("resetButton");
    resetJuego.addEventListener("click",reiniciar);
    return resultFinal;
}            

function reiniciar(){
resultado = "";
partidosJugados = 0;
ganaPC = 0;
ganaUsuario = 0; 
document.getElementById("eleccionJugador").innerHTML = "";
document.getElementById("eleccionCompu").innerHTML = "";
document.getElementById("resultFinal").innerHTML = ``;
document.getElementById("resultadoRonda").innerHTML = "";
document.getElementById("numeroGanaUsuario").innerHTML = "";
document.getElementById("numeroGanaPC").innerHTML= "";
let seccionReiniciar= document.getElementById("reiniciarJuego");
seccionReiniciar.style.display = "none";   
}

     
  
        
