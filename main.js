let eleccionJugador;
let jugadaCompu;
let resultado;
let piedra = "piedra";
let papel = "papel";
let tijeras= "tijeras";
ganaPC= 0;
ganaUsuario=0;
partidosJugados = 0;
let resultadoFinal;

// disable desabilitar botones
// display NamedNodeMap, display block

    function saludarUsuario() {
        let nombre = document.getElementById("nombreUsuario").value;
        let saludoANombre =document.getElementById("saludoUsuario");
     
        // Falta ver validacion inicial , activar boton reiniciar y lograr disable. Agregar suma empates
        
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
        const resultadoRondaParrafo = document.getElementById("resultadoRonda");
        let numGanaUsuario = document.getElementById("numeroGanaUsuario");
        let numGanaPC = document.getElementById("numeroGanaPC");


        while((partidosJugados < 5) && (ganaPC < 3 || ganaUsuario < 3)) { 
        if(eleccionJugador==jugadaCompu){
            resultado = "Empate";
            resultadoRondaParrafo.innerHTML = resultado;
            numGanaUsuario.innerHTML = ganaUsuario;
            numGanaPC.innerHTML= ganaPC;

            
        }else if((eleccionJugador==piedra && jugadaCompu ==tijeras) || (eleccionJugador==papel && jugadaCompu == piedra ) || (eleccionJugador==tijeras && jugadaCompu == papel)){
            resultado = "Ganaste!!!";
            resultadoRondaParrafo.innerHTML = resultado;
            ganaUsuario = ganaUsuario +1;
            partidosJugados = partidosJugados +1;
            numGanaUsuario.innerHTML = ganaUsuario;
            numGanaPC.innerHTML= ganaPC;
        }else{
            resultado = "Gana la computadora";
            resultadoRondaParrafo.innerHTML = resultado;
            ganaPC=ganaPC +1;
            partidosJugados = partidosJugados +1;
            numGanaUsuario.innerHTML = ganaUsuario;
            numGanaPC.innerHTML= ganaPC;
        }

        return resultado  
     }
      resultadoFinalfin(ganaUsuario, ganaPC);
    }


    function resultadoFinalfin(ganaUsuario, ganaPC){
        let resultFinal = document.getElementById("resultFinal");
        if(ganaUsuario > ganaPC){
            document.getElementById("Piedra").disabled = true;
            document.getElementById("Papel").disabled = true;
            document.getElementById("Tijeras").disabled = true;
            resultFinal.innerHTML = `Resultado Final : Ganaste, felicitaciones!!!`
        }else{
            document.getElementById("Piedra").disabled = true;
            document.getElementById("Papel").disabled = true;
            document.getElementById("Tijeras").disabled = true;
            resultFinal.innerHTML = `Resultado Final : Lo siento, Gana la Computadora.`
        };
        let seccionReiniciar= document.getElementById("reiniciarJuego");
        seccionReiniciar.style.display = "block";      
        let resetJuego = document.getElementById("resetButton");
        resetJuego.addEventListener("click",reiniciar);
    }            

function reiniciar(){
resultado = "";
partidosJugados = 0;
document.getElementById("eleccionJugador").innerHTML = "";
document.getElementById("eleccionCompu").innerHTML = "";
resultFinal.innerHTML = ``;
const resultadoRondaParrafo = document.getElementById("resultadoRonda");
resultadoRondaParrafo.innerHTML = "";
let numGanaUsuario = document.getElementById("numeroGanaUsuario");

numGanaUsuario.innerHTML = "";
let numGanaPC = document.getElementById("numeroGanaPC");
numGanaPC.innerHTML= "";
let seccionReiniciar= document.getElementById("reiniciarJuego");
seccionReiniciar.style.display = "none";   
}

     
  
        
