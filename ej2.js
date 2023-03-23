let vector = []

const input = document.getElementById("input")

const body = document.body;

document.getElementById("boton").addEventListener("click", cargarVector);

document.getElementById("boton2").addEventListener("click", mostrarVector);

document.getElementById("boton3").addEventListener("click", ordenarVector);

document.getElementById("boton4").addEventListener("click", buscarEnVector);


function cargarVector() {
    vector.push(Math.ceil(Math.random() * 10))
}

function mostrarVector() {
    let resultado = "[";

    if (vector.length > 0) {
        
        resultado = resultado + vector[0];

        for (let index = 1; index < vector.length; index++) {
            resultado = resultado + `,${vector[index]} `;
            
        }
    }



    resultado = resultado + "]";

    document.getElementById("vector").innerHTML = resultado
}

function ordenarVector(){
    vector.sort((a, b) => {
        return a - b;
    });
}

function buscarEnVector(){
    let numABuscar = input.value;
    let encontrado = false;

    if(numABuscar >= 1 && numABuscar <= 10){
        let index = 0;
        
        while (index<vector.length && !encontrado) {
            if(vector[index] == numABuscar){
                encontrado = true;
            } 
            index++
        }


    }
        

    cambiarFondoTemporal(encontrado);
    

}

function cambiarFondoTemporal(encontrado){
    if (encontrado){
        body.style.backgroundColor = "green";
    } else {
        body.style.backgroundColor = "red";
    }

    setTimeout(() => {
        body.style.backgroundColor = "";
      }, 2500);

}
