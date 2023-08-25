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
// || (ganaPC < 4 && ganaUsuario < 4)


    function saludarUsuario() {
        let nombre = document.getElementById("nombreUsuario").value;
        let saludoANombre =document.getElementById("saludoUsuario");
        
        if(nombre=="" || !(isNaN(nombre))){
            saludoANombre.innerHTML = "Ingresa un nombre válido";
        }else{
            saludoANombre.innerHTML = "Bienvenida/o " + nombre + " !" + "<br/> Si estás lista/o para comenzar, inicia Juego!";
        } 
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
            partidosJugados = partidosJugados +1;
            numGanaUsuario.innerHTML = ganaUsuario;
            numGanaPC.innerHTML= ganaPC;

            
        }else if((eleccionJugador==piedra && jugadaCompu ==tijeras) || (eleccionJugador==papel && jugadaCompu == piedra ) || (eleccionJugador==tijeras && jugadaCompu == papel)){
            resultado = "Gana el usuario";
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
        console.log(partidosJugados);
        console.log(ganaUsuario);
        console.log(ganaPC);

        return resultado  
     }
      resultadoFinalfin(ganaUsuario, ganaPC);
    }


    function resultadoFinalfin(ganaUsuario, ganaPC){
        let resultFinal = document.getElementById("resultFinal");
        if(ganaUsuario===ganaPC){
            console.log(`Resultado Final : Empate`);
            resultadoFinal = "EMPATE";
            document.getElementById("Piedra").disabled = true;
            document.getElementById("Papel").disabled = true;
            document.getElementById("Tijeras").disabled = true;
            resultFinal.innerHTML = `Resultado Final : Empate`
        }else if(ganaUsuario > ganaPC){
            console.log(`Resultado Final : Ganaste, felicitaciones!!! .`);
            resultadoFinal = `Resultado Final : Ganaste, felicitaciones!!! .`;
            document.getElementById("Piedra").disabled = true;
            document.getElementById("Papel").disabled = true;
            document.getElementById("Tijeras").disabled = true;
            resultFinal.innerHTML = `Resultado Final : Ganaste, felicitaciones!!!`
        }else{
            console.log(`Resultado Final : Lo siento, Gana la Computadora.`);
            resultadoFinal = `Resultado Final : Lo siento, Gana la Computadora.`;
            document.getElementById("Piedra").disabled = true;
            document.getElementById("Papel").disabled = true;
            document.getElementById("Tijeras").disabled = true;
            resultFinal.innerHTML = `Resultado Final : Lo siento, Gana la Computadora.`
        return resultadoFinal
        };
       
    }
   
