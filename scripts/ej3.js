
const Partido = {
    hayPelota : document.getElementById("cbox1"),
    cantTeamA : document.getElementById("cantA"),
    cantTeamB : document.getElementById("cantB"),
    mayores : document.getElementById("cbox2"),
    clima : document.getElementById("cbox3")
}


document.getElementById("boton").addEventListener("click", comprobar);


function comprobar()
{
    let jugable = true

    let msjError = "no se puede jugar el partido por las siguentes razones: <br>"
    if (!Partido.hayPelota.checked) {
        msjError += "no hay pelota <br>"
        jugable = false
    }
    if (Partido.cantTeamA.value != 11) {
        msjError += "el equipo A no tiene 11 jugadores <br>"
        jugable = false
    }
    if (Partido.cantTeamB.value != 11) {
        msjError += "el equipo B no tiene 11 jugadores <br>"
        jugable = false
    }
    if (!Partido.mayores.checked) {
        msjError += "hay jugadoroes menores de 18 años <br>"
        jugable = false
    }
    if (!Partido.clima.checked) {
        msjError += "las condiciones climaticas no son las correctas <br>"
        jugable = false
    }

    if (jugable) {
        msjError = "TODO PELOTA, A JUGAR"
        document.getElementById("resultado").style.color = "green"
    } else{
        document.getElementById("resultado").style.color = "red"
    }


    document.getElementById("resultado").innerHTML = msjError



}