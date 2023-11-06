// Call backs
const mostrar = params => console.log(params)   
mostrar("Hola a todos");

const finalizar = () => console.log("Fin");

saludar(finalizar);

function saludar(f){
    console.log("¡Hola a todos!");
    f();
}

saludar1((nombre) => console.log(`Hola ${nombre}!`));

function saludar1(f){
    console.log("Comienzo de la función...");
    let nombre = "Mati";
    f(nombre);
}

// Estructura común de los callbacks
const ejemploCallBack = (error, rtdo) => {
    if (error) {
        //hacer algo con el error
    }
    if (rtdo) {
        //hacer algo con la rtdo
    }
};

//Promesas

/*
new Promise(
    function (resolve, reject) {
        setTimeout(() => resolve(1),1000);
    })
    .then 
*/

axios.get('https://jsonplaceholder.typicode.com/users')
.then(resp=>console.log(resp))
.catch(e => console.log('Error!!!', e));


const nombre = Matias 
alert(nombre)