let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

let listaGenerica = [];
let lenguagesDeProgramacion = ['JavaScript', 'C', 'C++', 'Kotlin', 'Python'];
lenguagesDeProgramacion.push('Java', 'Ruby', 'GoLang');

let listaNumeros = [3,5,64,4];



function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p',`Acertaste el número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        //El usuario no acertó.
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p','El número secreto es menor');
        } else {
            asignarTextoElemento('p','El número secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto() {
    let numeroGenerado =  Math.floor(Math.random()*numeroMaximo)+1;

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //Si ya sorteamos todos los números
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p','Ya se sortearon todos los números posibles');
    } else {
        //Si el numero generado está incluido en la lista 
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function condicionesIniciales() {
    asignarTextoElemento('h1','Juego del número secreto!');
    asignarTextoElemento('p',`Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
    console.log(numeroSecreto);
}

function reiniciarJuego() {
    //limpiar caja
    limpiarCaja();
    //Indicar mensaje de intervalo de números 
    //Generar el número aleatorio
    //Inicializar el número intentos
    condicionesIniciales();
    //Deshabilitar el botón de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');
    
}

//1.
function MostrarListaLenguajes(){
    for (let i = 0; i < lenguagesDeProgramacion.length; i++) {
        console.log(lenguagesDeProgramacion[i]);
      }
}

//2.
function mostrarLenguagesReversoSeparadamente() {
    for (let i = lenguagesDeProgramacion.length - 1; i >= 0; i--) {
      console.log(lenguagesDeProgramacion[i]);
    }
  }
  

//3. Crea una función que calcule el promedio de los elementos en una lista de números.

function calcularPromedioListaNumeros(lista) {

    let suma = 0;

    for (let i = 0; i < lista.length; i++) {

        suma += lista[i];
        console.log(suma);
      }

      let promedio = suma / lista.length;
      console.log('Promedio:', promedio);
      //return promedio;
}
  
//4. Crea una función que muestre en la consola el número más grande y el número más pequeño en una lista.

function NumeroMayorYMenorLista(lista) {

    let mayor = lista[0];  //3,5,64,4
    let menor = lista[0];  //3,5,64,4
  
    for (let i = 1; i < lista.length; i++) {
      if (lista[i] > mayor) {
        mayor = lista[i];
      }
      if (lista[i] < menor) {
        menor = lista[i];
      }
    }
  
    console.log('Mayor:', mayor);
    console.log('Menor:', menor);
}

//5. Crea una función que retorne la suma de todos los elementos en una lista.

function calcularSumaLista(lista) {

    let suma = 0;

    for (let i = 0; i < lista.length; i++) {
        suma += lista[i];
        console.log(suma);
      }

      console.log('suma:', suma);
}

//6. Crea una función que reciba una lista como parámetro y retorne el índice 
//de un elemento también pasado como parámetro. Si ese elemento no existe en la lista, retorna -1.

function encontrarIndiceElemento(lista, elemento){

    for (let i = 0; i < lista.length; i++) {
        if(lista[i] === elemento){
            console.log('elemento:', elemento);
            return i;
        }
    }
    return -1;
}


//lazamiento de condiciones iniciales del juego
condicionesIniciales();

// ejercicio 3
calcularPromedioListaNumeros(listaNumeros);
// ejercicio 4
NumeroMayorYMenorLista(listaNumeros);
//ejercicio 5
calcularSumaLista(listaNumeros);

//ejercicio 6
let indice = encontrarIndiceElemento(listaNumeros, 8);
console.log('indice encontrada:', indice);


//ejercicio 1 y 2
MostrarListaLenguajes();
mostrarLenguagesReversoSeparadamente();







