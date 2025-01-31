let numeroSecreto;
let intentos ;
let numerosSorteados = [];
let numeroMaximo = 10;

function asiganrTextoElemento(elemento,texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

// Declaración del funcion para intentoUsuario
function  verificarIntento(){
    let numeroUsuario = parseInt( document.getElementById('valorUsuario').value);
    
   

    if(numeroUsuario === numeroSecreto){
        asiganrTextoElemento('p',`Acertaste el número en ${intentos} ${(intentos === 1) ? 'vez': 'veces' }`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else
    // El usuario no acertó
     if(numeroUsuario > numeroSecreto){
        asiganrTextoElemento('p', 'El número secreto es menor');
        limpiarCaja();

    }else{
        asiganrTextoElemento('p','El número secreto es mayor');
        limpiarCaja();
    }
    intentos++;
    return;
}

function generarNumeroSecreto() {
    let numeroGenerado =  Math.floor(Math.random()*numeroMaximo) + 1;
    
    console.log(numeroGenerado);
    console.log(numerosSorteados);
    //Preguntar si ya se sortearon todos los numeros
    if(numerosSorteados.length == numeroMaximo){
        asiganrTextoElemento('p','Ya se sortearon todos los números posibles');
    }else{

        // revisar si el valor que se genera yua está en la lista
        if(numerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();
        }else{
            numerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }

    
}

function limpiarCaja(){
    let valorCaja = document.querySelector('#valorUsuario').value = '';
}

function condicionesIniciales(){
    asiganrTextoElemento('h1','Juego del Número Secreto!');
    asiganrTextoElemento('p',`Ingresa un número del 1 al ${numeroMaximo}`); 
    // Generar el valor aleatorio
    numeroSecreto = generarNumeroSecreto();
    // Inicializazr el número de intentos a 1
    intentos = 1;
    //console.log(numeroSecreto);
}

function reiniciarJuego(){
    // Limpiar la caja
    limpiarCaja();
    // Indicar mensaje de inicio, intervalo de numeros
    condicionesIniciales();
    document.querySelector('#reiniciar').setAttribute('disabled',true);

}

condicionesIniciales();

