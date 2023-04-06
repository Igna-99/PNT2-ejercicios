const Pelicula1 = {
    nombre: "Drive",
    anioDeEstreno: 2011,
    id: 0
}

const Pelicula2 = {
    nombre: "La Comunidad Del Anillo",
    anioDeEstreno: 2001,
    id: 1
}

const Pelicula3 = {
    nombre: "John Wick",
    anioDeEstreno: 2014,
    id: 2
}
const Pelicula4 = {
    nombre: "Django unchained",
    anioDeEstreno: 2012,
    id: 3
}

const listaDePeliculas = [Pelicula1, Pelicula2, Pelicula3, Pelicula4]

const msj = document.getElementById("resultado")

const input = document.getElementById("input")








function mostrarPeliculas() {
    if (listaDePeliculas.length == 0) {
        resultado = "No hay peliculas en la base de datos"

    } else {
        resultado = ""
        listaDePeliculas.forEach(element => {
            resultado += formatearPelicula(element)
            resultado += "<br>"
        });

    }


    msj.innerHTML = resultado


}

function formatearPelicula(peli) {
    return `${peli.nombre} (${peli.anioDeEstreno}) [ID ${peli.id}]`;
}





function ordenarVectorA() {
    listaDePeliculas.sort((a, b) => comparaString(a.nombre, b.nombre));
}

function ordenarVectorB() {
    listaDePeliculas.sort((a, b) => comparaString(b.nombre, a.nombre));
}

function comparaString(a, b) {
    resultado = null

    if (a.toUpperCase() > b.toUpperCase()) {
        resultado = 1
    } else if (a.toUpperCase() < b.toUpperCase()) {
        resultado = -1
    } else {
        resultado = 0
    }

    return resultado

}



function eliminarPorId() {
    if (input.value == "") {
        alert("El ID ingresao no corresponde a ninguna pelicula de la base de datos")
    } else {
        eliminado = false
        index = 0
        while (index < listaDePeliculas.length && !eliminado) {
            if (listaDePeliculas[index].id == input.value) {
                alert("la pelicula \"" + listaDePeliculas[index].nombre + "\" fue eliminada")
                listaDePeliculas.splice(index, 1)
                eliminado = true

            } else {
                index++
            }
        }
        if (!eliminado) {
            alert("El ID ingresao no corresponde a ninguna pelicula de la base de datos")
        }
    }

}