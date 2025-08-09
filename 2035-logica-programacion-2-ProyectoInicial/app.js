let numeroSecreto = 0;
let Intentos = 0;
let numeroSorteados = [];
let numeroMaximo = 10;

console.log(numeroSecreto);

function asiganrTextoElemento(elemento, texto){

  let elementoHTML = document.querySelector(elemento);
  elementoHTML.innerHTML = texto;

  return;
}

function verificarIntento(){
  let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);

 
  console.log(Intentos);
  if(numeroDeUsuario == numeroSecreto){
    asiganrTextoElemento('p',`Acertaste en ${Intentos} ${(Intentos === 1) ? 'Intento' : 'Intentos'}`);

    document.getElementById('reiniciar').removeAttribute('disabled');
  }else{
    if(numeroDeUsuario > numeroSecreto){
     asiganrTextoElemento('p','El numero secreeto es menor');
  }else{
     asiganrTextoElemento('p','El numero secreto es mayor');
  }
  Intentos ++;
  limpiarTexto();
}
  return;
}

function limpiarTexto(){
  document.querySelector('#valorUsuario').value = '';
}

function  generarNumeroSecreto() {
 let numeroGenerado = Math.floor(Math.random()*numeroMaximo+1);

 console.log(numeroGenerado);
 console.log(numeroSorteados); 
 //Si ya sorteamos todos los numeros
 if(numeroSorteados.length == numeroMaximo){
  asiganrTextoElemento('p', 'Ya se sortearon todos los numeros posibles');

 }else{
    //Si el numero generado esta incluido en la lista
   if(numeroSorteados.includes(numeroGenerado)){
    return generarNumeroSecreto();
    }else {
    numeroSorteados.push(numeroGenerado);
    return numeroGenerado;
  }

 }
 //Si el numero generado esta incluido en la lista
}

function condicionesIniciales(){
  asiganrTextoElemento('h1', 'Juego del numero secreto');
  asiganrTextoElemento('p', `Dame un numero del 1 al ${numeroMaximo}`);
  numeroSecreto = generarNumeroSecreto();
  Intentos = 1;
}

function reiniciarJuego(){
  //Limpiar la caja de texto
  limpiarTexto();
  //indicar mensaje de inicio
  //Generar un nuevo numero aleatorio
  //reiniciar el numero de intentos
  condicionesIniciales();
  //Deshabilitar el boton de reinicio
  document.querySelector('#reiniciar').setAttribute('disabled','true');
}

condicionesIniciales();


