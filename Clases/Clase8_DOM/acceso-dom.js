let div = document.getElementById("app");
let parrafo = document.getElementById("parrafo1");
console.log("Contenido div: ", div.innerHTML);
console.log("Contenido párrafo: ", parrafo.innerHTML);

let paises = document.getElementsByClassName("pais");
console.log("pais 1: ", paises[0].innerHTML);
console.log("pais 2: ", paises[1].innerHTML);
console.log("pais 3: ", paises[2].innerHTML);


for (pais of paises) {
    console.log("pais: ", pais.innerHTML);
}

let contenedores = document.getElementsByTagName("div");
for (contenedor of contenedores) {
    console.log("contenedor: ", contenedor.innerHTML);
}

let nuevoParrafo = document.getElementById("parrafo1");
parrafo.innerHTML = "Hola a todo el mundo BOCA";

let nuevoParrafo2 = document.createElement("p");
nuevoParrafo2.innerHTML = "<h2> Dinamicamente </h2>";
document.body.appendChild(nuevoParrafo2);

//Inserción de nodos en el DOM desde un array
let padre = document.getElementById("personas");
let personas = ["Homero", "Marge", "Bart"];
for (const persona of personas) {
    let li = document.createElement("li");
    li.innerHTML = persona
    padre.appendChild(li);
}

//Formulario
document.getElementById("nombre").value = "Matias";
document.getElementById("edad").value = 20;

//KeyBoardsEvents
let input1 = document.getElementById("nombre");
input1.onkeyup = () => {console.log("keyUp")};

// Codigo JS de refe
let miForm = document.getElementById("formulario");
miForm.addEventListener("submit", validarFormulario);

function validarFormulario(e){
    e.preventDefault();
    console.log("Formulario Enviado");
}