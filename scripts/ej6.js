const corredores = []

const posicionesDeCarrera = []

const input = document.getElementById("nombre")

const botonInicio = document.getElementById("inicio")



function playSound() {
  var audio = document.getElementById("myAudio");
  audio.play();
}

function AgregarCorredor(){
  let textoIngresado = input.value
  if( textoIngresado.length <= 2){
    alert("el nombre del corredor es muy corto")
  } else {
    corredores.push(textoIngresado) 
    actualizarInscriptos()
    input.value = ""
  }
  
}

function actualizarInscriptos(){

  // Get the table element in which you want to add row
  let tabla = document.getElementById("corredoresAnotados");

  let fila = tabla.insertRow(-1); // We are adding at the end

  // Create table cells
  let c1 = fila.insertCell(0);
  let c2 = fila.insertCell(1);
 
  // Add data to c1 and c2
  c1.innerText = corredores[(corredores.length - 1)]
  c2.innerText = corredores.length

}

function iniciarCarrera(){

  if(corredores.length == 0) {
    alert("no hay corredores")
  } else {

    eliminarTodasLasFilas()

    botonInicio.disabled = true;

    setTimeout(() => {
      botonInicio.disabled = false;
    }, 10000);

    playSound()

    corredores.forEach( (nombre,index) => {

      correr(nombre,index).then(resultado => {

        actualizarPosiciones(resultado)

      })
    });

  }
}

function correr(nombre,index){

  return new Promise( (resolve) => {
    let tiempo = Math.ceil((Math.random()*8)+2) 
    setTimeout(() => {

      let corredor = {
        nombre : nombre,
        numero : (index + 1),
        tiempo : tiempo
      }

      resolve(corredor)
      
    }, tiempo*1000);
  } )

}

function actualizarPosiciones(resultado){


  // Get the table element in which you want to add row
  let tabla = document.getElementById("Posiciones");

  let fila = tabla.insertRow(-1); // We are adding at the end

  // Create table cells
  let c1 = fila.insertCell(0);
  let c2 = fila.insertCell(1);
  let c3 = fila.insertCell(2);
 
  // Add data to c1 and c2
  c1.innerText = resultado.nombre
  c2.innerText = resultado.numero
  c3.innerText = resultado.tiempo

}

function eliminarTodasLasFilas() {
  let tabla = document.getElementById("Posiciones");
  let cantidadFilas = tabla.rows.length;
  for (let i = cantidadFilas - 1; i >= 1; i--) {
    tabla.deleteRow(i);
  }
}


