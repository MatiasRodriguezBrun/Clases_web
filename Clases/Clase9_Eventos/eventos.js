// Opcion 1 
let boton = document.getElementById("buttom");
boton.addEventListener("click", rtaClick)
function rtaClick() {
    console.log("RTA");
}

// Opcion 2
let boton2 = document.getElementById("buttom");
boton2.onclick = () =>(console.log("RTA 2"));

let boton3 = document.getElementById("buttom");
boton3.onmousemove = () =>(console.log("Move"));

//KeyBoardsEvents
let input1 = document.getElementById("nombre");
input1.onkeyup = () => {console.log("keyUp")};