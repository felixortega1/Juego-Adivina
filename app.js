let intentos = 0;
let numeroSecreto = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 3;

function asignarElementoTexto(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}

function generarNumeroSecreto(){
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarElementoTexto('p','Ya se sortearon todos los números posibles.');
    } else {
        //lista
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        }else{
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    //console.log(intentos);

    if(numeroDeUsuario == numeroSecreto){
        asignarElementoTexto('p',`Acertaste el número en ${intentos} ${intentos === 1 ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        if (numeroSecreto < numeroDeUsuario) {
            asignarElementoTexto('p','El número secreto es menor');
        } else {
            asignarElementoTexto('p','El número secreto es mayor')
        }
        limpiarCaja();
        intentos++;
    }

    return;
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = ''; 
}

function reiniciarJuego() {
    limpiarCaja();
    condicionesIniciales();
    document.querySelector('#reiniciar').setAttribute('disabled','true');
    
}

function condicionesIniciales() {
    asignarElementoTexto('h1','Juego del número secreto');
    asignarElementoTexto('p',`Digita un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos=1; 
}

condicionesIniciales();






/*
DESAFIO 02
//1 Crear una función que muestre "¡Hola, mundo!" en la consola.
function saludo() {
    alert("¡Hola, mundo!");
}
saludo();

//2 Crear una función que reciba un nombre como parámetro y muestre "¡Hola, [nombre]!" en la consola.

function saludoNombre(nombre) {
    console.log(`¡Hola, ${nombre}`);   
}
saludoNombre('Alex');

//3 Crear una función que reciba un número como parámetro y devuelva el doble de ese número.
function doble(numero) {
    return alert(`El doble es : ${2*numero}`);
}
doble(5);

//4 Crear una función que reciba tres números como parámetros y devuelva su promedio.
function promedio(a,b,c) {
    return console.log((a+b+c)/3);
}
promedio(2,5,8);

//5 Crear una función que reciba dos números como parámetros y devuelva el mayor de ellos.
function mayor(a,b) {
    if(a > b){
        return console.log(a);
    }else{
        return console.log(b);
    }
}
mayor(2,15);

//6 Crear una función que reciba un número como parámetro y devuelva el resultado de multiplicar ese número por sí mismo.
function alCuadrado(numero) {
    return console.log(numero*numero)
}
alCuadrado(25);
*/