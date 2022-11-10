const turn = document.getElementById("turn");
const lampada = document.getElementById("lampada");
const room = document.getElementById("room");
var lampStatus = false;

function turnLamp() {
    if(lampStatus) {
        room.style.backgroundColor = "black";
        turn.innerText = "Ligar";
        lampada.src = "./img/desligada.png"
    }
    else {
        room.style.backgroundColor = "white";
        turn.innerText = "Desligar";
        lampada.src = "./img/ligada.png"
    }
    lampStatus = !lampStatus;
}

turn.addEventListener("click", turnLamp)