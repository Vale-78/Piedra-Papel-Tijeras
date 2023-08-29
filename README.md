# Piedra-Papel-Tijeras
Interacción entre HTML, JS y CSS.
# PIEDRA-PAPEL-TIJERAS
## AUTOR: Inés Valeria Foglino

## Herramientas
Este proyecto integra HTML, CSS Y JavaScript. 

## Características

Aquí podrás divertirte jugando a Piedra Papel y tijeras contra tu PC.

* Gana el mejor de 5 jugadas.
* Por tanto, el que gana 3 jugadas, es el campeón.
* Los empates no se cuentan como partidos jugados.


## Casos de prueba:

#### Animación de título
<< Al colocar el mouse sobre el título, observarás una dinámica animacíon (Rotación y cambio de colores)

#### Ingreso del nombre de usuario
<< Es necesario completar esta entrada para acceder al saludo y así habilitar el botón "Iniciar Juego"
   Entrada1: "Nombre";   
* Salida: "Bienvenida/o " + nombre + " !" + "<br/> Si estás lista/o para comenzar, inicia Juego!".

#### Habilitación al clickear el botón "Iniciar Juego"
<< Una vez concretado el saludo, se habilita el botón para Iniciar juego!!
Haciendo "click" al botón "Iniciar Juego", se habilitan botones para seleccionar Jugada:
* Piedra.
* Papel.
* Tijeras.

#### Campos vacíos
<< Entrada1:  ;  Entrada2: 25;  Operación: Todas; 
* Salida: "Debes ingresar un valor en ambos campos".

#### Más de un punto
<< Entrada1: 2.345.03  ;  Entrada2: 10;  Operación: Todas; 
* Salida: "Uno o ambos valores ingresados no son numéricos".

#### Caso general
<< Entrada1: 3;  Entrada2: 10;  Operación: División; 
* Salida: o.3.

<< Entrada1: 8;  Entrada2: 235;  Operación: Multiplicación; 
* Salida: 1880.


## Algoritmo principal.
```javascript
function calcular(){
    (...)

    if((isNaN(valorNumerico1)) || (isNaN(valorNumerico2))) {
        alert ('Uno o ambos valores ingresados no son numéricos');
    } else if((n1 === '') || (n2 ==='')){
        alert ('Debes ingresar un valor en ambos campos');
    } else{
       (...)
            if(select.value == "suma"){
               let result = suma(valorNumerico1,valorNumerico2);
               document.getElementById("resultado").innerHTML = result;
            }else if(select.value == "resta"){
                let result = resta(valorNumerico1,valorNumerico2);
                document.getElementById("resultado").innerHTML = result;
            }else if(select.value == "multiplicacion"){
                let result = multiplicacion(valorNumerico1,valorNumerico2);
                document.getElementById("resultado").innerHTML = result;
            }else if(select.value == "division"){
                let result = division(valorNumerico1,valorNumerico2);
                if(valorNumerico2 === 0){
                    document.getElementById("resultado").innerHTML = "La operación no es válida";
                } else{
                document.getElementById("resultado").innerHTML = result;
                }
            }               
       (...)
    }
 }
```

## Cómo correr la aplicación _"Calculadora"_?

Para ejecutar esta aplicación, simplemente se necesita clonar el proyecto y ejecutar el archivo html.
Sino, accede directamente desde aquí:
    [GitHub Pages](https://vale-78.github.io/Calculadora/).


## Contribuciones

Cualquier tipo de aportes son bienvenidos.

1. <a href='https://help.github.com/articles/fork-a-repo/'>**(Fork)**</a> Bifurque el repositorio en GitHub.
2. <a href='https://help.github.com/articles/cloning-a-repository/'>**(Clone)**</a> Clone el proyecto en su propia máquina.
3. <a href='https://git-scm.com/book/en/v2/Git-Basics-Recording-Changes-to-the-Repository'>**(Commit)**</a> Confirmar cambios en la rama de desarrollo. <a href='https://git-scm.com/book/en/v2/Git-Branching-Branches-in-a-Nutshell'>**(development branch)**</a>.
4. <a href='https://help.github.com/articles/pushing-to-a-remote/'>**(Push)**</a> Empuje su trabajo de regreso a su repositorio en git.
5. <a href='https://help.github.com/articles/about-pull-requests/'>**(Pull request)**</a> Envíe una solicitud de extracción para que pueda revisar sus cambios. 

## Impresión de pantalla

![](./assest/MiCalcu.png)